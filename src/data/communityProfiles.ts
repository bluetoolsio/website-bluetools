import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { plugins } from "@/data/plugins";

export interface CommunityProfile {
  id: string;
  pluginSlug: string;
  title: string;
  description: string;
  author: string;
  version: string;
  updatedAt: string;
  fileName: string;
  downloadHref: string;
  tags: string[];
}

export interface CommunityPlugin {
  slug: string;
  name: string;
  description: string;
  submitHref: string;
}

interface OctoPieFile {
  manifest?: {
    type?: string;
    name?: string;
    author?: string;
    octopie_version?: string;
    blender_version?: string;
    description?: string;
  };
  profile?: {
    name?: string;
    slots?: unknown[];
  };
}

const octopieProfilesDirectory = path.join(process.cwd(), "public", "community", "octopie", "profiles");

export const communityPlugins: CommunityPlugin[] = plugins.map((plugin) => ({
  slug: plugin.slug,
  name: plugin.name,
  description: `Download approved community profiles for ${plugin.name}, or submit your own setup for review.`,
  submitHref:
    plugin.slug === "octopie"
      ? "/community/octopie/submit"
      : "https://github.com/bluetoolsio/website-bluetools/issues/new",
}));

function readString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : "";
}

function formatUpdatedAt(date: Date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(date);
}

function getOctoPieProfiles(): CommunityProfile[] {
  if (!existsSync(octopieProfilesDirectory)) {
    return [];
  }

  return readdirSync(octopieProfilesDirectory)
    .filter((fileName) => fileName.toLowerCase().endsWith(".octopie"))
    .flatMap((fileName) => {
      const filePath = path.join(octopieProfilesDirectory, fileName);

      try {
        const stats = statSync(filePath);
        const data = JSON.parse(readFileSync(filePath, "utf8")) as OctoPieFile;
        const manifest = data.manifest;

        if (!manifest || manifest.type !== "profile") {
          return [];
        }

        const slotCount = Array.isArray(data.profile?.slots) ? data.profile.slots.length : 0;
        const title = readString(manifest.name) || readString(data.profile?.name) || fileName.replace(/\.octopie$/i, "");

        return [
          {
            id: fileName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            pluginSlug: "octopie",
            title,
            description: readString(manifest.description) || "Community-submitted OctoPie profile.",
            author: readString(manifest.author) || "Community",
            version: readString(manifest.octopie_version) || "OctoPie",
            updatedAt: formatUpdatedAt(stats.mtime),
            fileName,
            downloadHref: `/community/octopie/profiles/${encodeURIComponent(fileName)}`,
            tags: slotCount > 0 ? [`${slotCount} slots`] : ["Profile"],
          },
        ];
      } catch {
        return [];
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export const communityProfiles: CommunityProfile[] = getOctoPieProfiles();

export function getCommunityPluginBySlug(slug: string) {
  return communityPlugins.find((plugin) => plugin.slug === slug);
}

export function getCommunityProfilesBySlug(slug: string) {
  if (slug === "octopie") {
    return getOctoPieProfiles();
  }

  return communityProfiles.filter((profile) => profile.pluginSlug === slug);
}
