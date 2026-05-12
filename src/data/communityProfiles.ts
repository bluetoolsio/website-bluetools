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

export const communityPlugins: CommunityPlugin[] = plugins.map((plugin) => ({
  slug: plugin.slug,
  name: plugin.name,
  description: `Download approved community profiles for ${plugin.name}, or submit your own setup for review.`,
  submitHref:
    plugin.slug === "octopie"
      ? "/community/octopie/submit"
      : "https://github.com/bluetoolsio/website-bluetools/issues/new",
}));

export const communityProfiles: CommunityProfile[] = [];

export function getCommunityPluginBySlug(slug: string) {
  return communityPlugins.find((plugin) => plugin.slug === slug);
}

export function getCommunityProfilesBySlug(slug: string) {
  return communityProfiles.filter((profile) => profile.pluginSlug === slug);
}
