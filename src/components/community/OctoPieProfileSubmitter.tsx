"use client";

import { useMemo, useRef, useState } from "react";
import { CheckCircle2, Clipboard, ExternalLink, FileJson, Upload, XCircle } from "lucide-react";

interface OctoPieManifest {
  type?: string;
  name?: string;
  author?: string;
  octopie_version?: string;
  blender_version?: string;
  description?: string;
}

interface ParsedProfile {
  fileName: string;
  fileSize: number;
  manifest: OctoPieManifest;
  slotCount: number;
}

const githubIssueBase = "https://github.com/bluetoolsio/website-bluetools/issues/new";

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  return `${Math.round(bytes / 1024)} KB`;
}

function readString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : "";
}

function buildIssueBody(profile: ParsedProfile) {
  const { manifest } = profile;
  const manifestJson = JSON.stringify(manifest, null, 2);

  return `## Profile

- Profile name: ${readString(manifest.name) || "Not specified"}
- Author: ${readString(manifest.author) || "Not specified"}
- Description: ${readString(manifest.description) || "Not specified"}
- OctoPie version: ${readString(manifest.octopie_version) || "Not specified"}
- Blender version: ${readString(manifest.blender_version) || "Not specified"}
- Slots: ${profile.slotCount}
- File: ${profile.fileName} (${formatFileSize(profile.fileSize)})

## Profile File

I will attach the parsed \`.octopie\` file to this issue.

## Parsed Manifest

\`\`\`json
${manifestJson}
\`\`\`

## Notes

- I confirm this profile is my own work or I have permission to share it.
- I understand BlueTools may review, edit metadata, or decline the submission before publishing.`;
}

function getIssueHref(profile: ParsedProfile) {
  const title = `OctoPie profile submission: ${readString(profile.manifest.name) || profile.fileName}`;
  const body = buildIssueBody(profile);
  const params = new URLSearchParams({
    title,
    body,
    labels: "community-profile",
  });

  return `${githubIssueBase}?${params.toString()}`;
}

export function OctoPieProfileSubmitter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useState<ParsedProfile | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const issueHref = useMemo(() => (profile ? getIssueHref(profile) : ""), [profile]);

  async function parseFile(file: File) {
    setError("");
    setCopied(false);

    try {
      const text = await file.text();
      const data = JSON.parse(text) as {
        manifest?: OctoPieManifest;
        profile?: {
          name?: string;
          slots?: unknown[];
        };
      };

      const manifest = data.manifest;

      if (!manifest || typeof manifest !== "object") {
        throw new Error("No manifest found in this profile.");
      }

      if (manifest.type && manifest.type !== "profile") {
        throw new Error("This .octopie file does not look like a profile export.");
      }

      setProfile({
        fileName: file.name,
        fileSize: file.size,
        manifest: {
          type: readString(manifest.type) || "profile",
          name: readString(manifest.name) || readString(data.profile?.name),
          author: readString(manifest.author),
          octopie_version: readString(manifest.octopie_version),
          blender_version: readString(manifest.blender_version),
          description: readString(manifest.description),
        },
        slotCount: Array.isArray(data.profile?.slots) ? data.profile.slots.length : 0,
      });
    } catch (caught) {
      setProfile(null);
      setError(caught instanceof Error ? caught.message : "Could not read this profile.");
    }
  }

  async function handleCopy() {
    if (!profile) {
      return;
    }

    await navigator.clipboard.writeText(buildIssueBody(profile));
    setCopied(true);
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_24rem]">
      <div
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          const file = event.dataTransfer.files[0];

          if (file) {
            void parseFile(file);
          }
        }}
        className={`night-card flex min-h-[20rem] flex-col items-center justify-center border p-8 text-center transition-colors ${
          isDragging ? "border-cyan-200/42 bg-cyan-300/8" : "border-[rgba(199,251,255,.14)]"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".octopie,.json,application/json"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0];

            if (file) {
              void parseFile(file);
            }
          }}
        />

        <span className="mb-5 flex h-14 w-14 items-center justify-center border border-[rgba(199,251,255,.16)] bg-black/28 text-cyan-100">
          <Upload className="h-7 w-7" />
        </span>
        <h2 className="font-mono text-2xl font-bold uppercase tracking-[0.08em] text-white">
          Drop .octopie profile
        </h2>
        <p className="section-copy mt-3 max-w-xl">
          The manifest is read in your browser and used for the GitHub submission.
        </p>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="mt-7 inline-flex h-11 items-center justify-center gap-2 border border-[rgba(199,251,255,.14)] bg-[rgba(5,9,16,.62)] px-5 font-mono text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-cyan-200/28 hover:bg-cyan-300/8 hover:text-cyan-50"
        >
          <FileJson className="h-4 w-4 text-cyan-100" />
          Choose file
        </button>

        {error ? (
          <div className="mt-6 flex items-center gap-2 text-sm text-red-200">
            <XCircle className="h-4 w-4" />
            {error}
          </div>
        ) : null}
      </div>

      <div className="night-card p-6">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-[rgba(199,251,255,.14)] bg-black/28 text-cyan-100">
            {profile ? <CheckCircle2 className="h-5 w-5" /> : <FileJson className="h-5 w-5" />}
          </span>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-white">
              Parsed Manifest
            </p>
            <p className="text-sm text-muted-foreground">
              {profile ? profile.fileName : "Waiting for profile"}
            </p>
          </div>
        </div>

        <dl className="space-y-4 text-sm">
          {[
            ["Name", profile?.manifest.name],
            ["Author", profile?.manifest.author],
            ["Description", profile?.manifest.description],
            ["OctoPie", profile?.manifest.octopie_version],
            ["Blender", profile?.manifest.blender_version],
            ["Slots", profile ? String(profile.slotCount) : ""],
          ].map(([label, value]) => (
            <div key={label} className="border-b border-white/10 pb-3">
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {label}
              </dt>
              <dd className="mt-1 text-white">{value || "Not specified"}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-3">
          <a
            href={profile ? issueHref : undefined}
            aria-disabled={!profile}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-11 items-center justify-center gap-2 border px-4 font-mono text-sm font-bold uppercase tracking-[0.12em] transition-colors ${
              profile
                ? "border-[rgba(199,251,255,.14)] bg-[rgba(5,9,16,.62)] text-white hover:border-cyan-200/28 hover:bg-cyan-300/8 hover:text-cyan-50"
                : "pointer-events-none border-white/10 bg-white/5 text-muted-foreground opacity-55"
            }`}
          >
            <ExternalLink className="h-4 w-4 text-cyan-100" />
            Open GitHub issue
          </a>
          <button
            type="button"
            disabled={!profile}
            onClick={() => void handleCopy()}
            className="inline-flex h-10 items-center justify-center gap-2 border border-transparent px-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-[rgba(199,251,255,.14)] hover:bg-cyan-300/7 hover:text-white disabled:pointer-events-none disabled:opacity-55"
          >
            <Clipboard className="h-4 w-4" />
            {copied ? "Copied" : "Copy issue text"}
          </button>
        </div>
      </div>
    </div>
  );
}
