interface R2PutOptions {
  httpMetadata?: {
    contentType?: string;
  };
  customMetadata?: Record<string, string>;
}

interface R2Bucket {
  put(key: string, value: string | ArrayBuffer | ReadableStream, options?: R2PutOptions): Promise<unknown>;
}

interface Env {
  COMMUNITY_UPLOADS: R2Bucket;
  ALLOWED_ORIGIN?: string;
  GITHUB_TOKEN?: string;
  GITHUB_REPO?: string;
  GITHUB_LABELS?: string;
}

interface OctoPieManifest {
  type?: string;
  name?: string;
  author?: string;
  octopie_version?: string;
  blender_version?: string;
  description?: string;
}

interface OctoPieProfileFile {
  manifest?: OctoPieManifest;
  profile?: {
    name?: string;
    slots?: unknown[];
  };
}

const MAX_FILE_BYTES = 1024 * 1024;
const DEFAULT_REPO = "bluetoolsio/website-bluetools";
const DEFAULT_LABELS = ["community-profile", "octopie"];

function jsonResponse(data: unknown, status = 200, origin = "*") {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json; charset=utf-8",
      Vary: "Origin",
    },
  });
}

function readString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : "";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60) || "profile";
}

function getCorsOrigin(request: Request, env: Env) {
  const requestOrigin = request.headers.get("Origin") || "";
  const allowed = (env.ALLOWED_ORIGIN || "https://bluetools.io")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return allowed.includes(requestOrigin) ? requestOrigin : allowed[0] || "*";
}

function getLabels(env: Env) {
  return (env.GITHUB_LABELS || DEFAULT_LABELS.join(","))
    .split(",")
    .map((label) => label.trim())
    .filter(Boolean);
}

function buildIssueBody({
  fileName,
  fileSize,
  manifest,
  objectKey,
  slotCount,
  submittedAt,
}: {
  fileName: string;
  fileSize: number;
  manifest: Required<OctoPieManifest>;
  objectKey: string;
  slotCount: number;
  submittedAt: string;
}) {
  return `## OctoPie Profile Submission

- Profile name: ${manifest.name || "Not specified"}
- Author: ${manifest.author || "Not specified"}
- Description: ${manifest.description || "Not specified"}
- OctoPie version: ${manifest.octopie_version || "Not specified"}
- Blender version: ${manifest.blender_version || "Not specified"}
- Slots: ${slotCount}
- Original file: ${fileName} (${Math.round(fileSize / 1024)} KB)
- Submitted: ${submittedAt}

## R2 Location

\`${objectKey}\`

In Cloudflare, open the \`bluetools-community\` R2 bucket, then browse:

\`pending/octopie/\`

Download this file, review it, and if approved move/copy it into:

\`public/community/octopie/profiles/\`

Then rebuild and publish the website.`;
}

async function createGitHubIssue({
  env,
  body,
  title,
}: {
  env: Env;
  body: string;
  title: string;
}) {
  if (!env.GITHUB_TOKEN) {
    return null;
  }

  const repo = env.GITHUB_REPO || DEFAULT_REPO;
  const response = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      "User-Agent": "bluetools-community-upload-worker",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({
      title,
      body,
      labels: getLabels(env),
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`GitHub issue creation failed: ${response.status} ${details}`);
  }

  return response.json() as Promise<{ html_url: string; number: number }>;
}

async function handleSubmit(request: Request, env: Env) {
  const origin = getCorsOrigin(request, env);
  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return jsonResponse({ error: "Missing .octopie file." }, 400, origin);
  }

  if (file.size > MAX_FILE_BYTES) {
    return jsonResponse({ error: "Profile is too large. Maximum size is 1 MB." }, 413, origin);
  }

  const text = await file.text();
  let data: OctoPieProfileFile;

  try {
    data = JSON.parse(text) as OctoPieProfileFile;
  } catch {
    return jsonResponse({ error: "Profile is not valid JSON." }, 400, origin);
  }

  if (!data.manifest || typeof data.manifest !== "object") {
    return jsonResponse({ error: "Profile does not contain a manifest." }, 400, origin);
  }

  if (data.manifest.type && data.manifest.type !== "profile") {
    return jsonResponse({ error: "This .octopie file is not a profile export." }, 400, origin);
  }

  const manifest: Required<OctoPieManifest> = {
    type: readString(data.manifest.type) || "profile",
    name: readString(data.manifest.name) || readString(data.profile?.name),
    author: readString(data.manifest.author),
    octopie_version: readString(data.manifest.octopie_version),
    blender_version: readString(data.manifest.blender_version),
    description: readString(data.manifest.description),
  };

  if (!manifest.name) {
    return jsonResponse({ error: "Profile manifest is missing a name." }, 400, origin);
  }

  const submittedAt = new Date().toISOString();
  const submissionId = crypto.randomUUID();
  const safeName = slugify(manifest.name);
  const objectKey = `pending/octopie/${safeName}-${submissionId}.octopie`;
  const slotCount = Array.isArray(data.profile?.slots) ? data.profile.slots.length : 0;

  await env.COMMUNITY_UPLOADS.put(objectKey, text, {
    httpMetadata: {
      contentType: "application/json; charset=utf-8",
    },
    customMetadata: {
      profileName: manifest.name,
      author: manifest.author,
      octopieVersion: manifest.octopie_version,
      submittedAt,
      originalFileName: file.name,
    },
  });

  let issue: { html_url: string; number: number } | null = null;
  let issueError = "";

  try {
    issue = await createGitHubIssue({
      env,
      title: `OctoPie profile submission: ${manifest.name}`,
      body: buildIssueBody({
        fileName: file.name,
        fileSize: file.size,
        manifest,
        objectKey,
        slotCount,
        submittedAt,
      }),
    });
  } catch (error) {
    issueError = error instanceof Error ? error.message : "GitHub issue creation failed.";
  }

  return jsonResponse(
    {
      objectKey,
      issueCreated: Boolean(issue),
      issueError,
      issueNumber: issue?.number,
      issueUrl: issue?.html_url,
      manifest,
      slotCount,
    },
    201,
    origin
  );
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = getCorsOrigin(request, env);

    if (request.method === "OPTIONS") {
      return jsonResponse({ ok: true }, 200, origin);
    }

    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/submit") {
      try {
        return await handleSubmit(request, env);
      } catch (error) {
        return jsonResponse(
          { error: error instanceof Error ? error.message : "Upload failed." },
          500,
          origin
        );
      }
    }

    return jsonResponse({ error: "Not found." }, 404, origin);
  },
};

export default worker;
