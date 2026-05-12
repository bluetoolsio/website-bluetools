"use client";

import { useMemo, useRef, useState } from "react";
import { CheckCircle2, FileJson, Upload, XCircle } from "lucide-react";

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
  rawText: string;
  slotCount: number;
}

const uploadEndpoint =
  process.env.NEXT_PUBLIC_COMMUNITY_UPLOAD_ENDPOINT ||
  "https://bluetools-community-upload.magnus-884.workers.dev/submit";
const defaultUploadEndpoint = "https://bluetools-community-upload.magnus-884.workers.dev/submit";

function readString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : "";
}

export function OctoPieProfileSubmitter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useState<ParsedProfile | null>(null);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadKey, setUploadKey] = useState("");

  const statusText = useMemo(() => {
    if (isUploading) {
      return "Uploading profile";
    }

    if (uploadKey) {
      return "Uploaded for review";
    }

    return profile ? profile.fileName : "Waiting for profile";
  }, [isUploading, profile, uploadKey]);

  async function uploadProfile(file: File) {
    setIsUploading(true);
    setUploadKey("");

    try {
      const formData = new FormData();
      formData.append("file", file, file.name);

      const response = await fetch(uploadEndpoint, {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as {
        error?: string;
        objectKey?: string;
      };

      if (!response.ok || !result.objectKey) {
        throw new Error(result.error || "Upload service did not confirm the upload.");
      }

      setUploadKey(result.objectKey);
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "";
      setError(
        message.includes("fetch") || message.includes("NetworkError")
          ? `Upload service is not live yet. Deploy the Cloudflare Worker and route ${defaultUploadEndpoint}.`
          : message || "Upload failed. Please try again."
      );
    } finally {
      setIsUploading(false);
    }
  }

  async function parseFile(file: File) {
    setError("");
    setUploadKey("");

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

      const parsedProfile = {
        fileName: file.name,
        fileSize: file.size,
        rawText: text,
        manifest: {
          type: readString(manifest.type) || "profile",
          name: readString(manifest.name) || readString(data.profile?.name),
          author: readString(manifest.author),
          octopie_version: readString(manifest.octopie_version),
          blender_version: readString(manifest.blender_version),
          description: readString(manifest.description),
        },
        slotCount: Array.isArray(data.profile?.slots) ? data.profile.slots.length : 0,
      };

      setProfile(parsedProfile);
      await uploadProfile(file);
    } catch (caught) {
      setProfile(null);
      setError(caught instanceof Error ? caught.message : "Could not read this profile.");
    }
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
          The profile is uploaded to the BlueTools review queue. No GitHub step needed.
        </p>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={isUploading}
          className="mt-7 inline-flex h-11 items-center justify-center gap-2 border border-[rgba(199,251,255,.14)] bg-[rgba(5,9,16,.62)] px-5 font-mono text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-cyan-200/28 hover:bg-cyan-300/8 hover:text-cyan-50 disabled:pointer-events-none disabled:opacity-55"
        >
          <FileJson className="h-4 w-4 text-cyan-100" />
          {isUploading ? "Uploading..." : "Choose file"}
        </button>

        {isUploading ? (
          <div className="mt-6 flex items-center gap-2 text-sm text-cyan-100">
            <Upload className="h-4 w-4" />
            Uploading to review queue...
          </div>
        ) : null}

        {uploadKey ? (
          <div className="mt-6 flex items-center gap-2 text-sm text-cyan-100">
            <CheckCircle2 className="h-4 w-4" />
            Uploaded for review.
          </div>
        ) : null}

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
              Submission
            </p>
            <p className="text-sm text-muted-foreground">
              {statusText}
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

        <p className="section-copy mt-6 text-sm">
          Approved profiles appear here after they are moved into the public community profile folder.
        </p>
      </div>
    </div>
  );
}
