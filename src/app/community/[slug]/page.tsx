import { FadeIn } from "@/components/animations/FadeIn";
import { OctoPieLabel } from "@/components/brand/OctoPieLabel";
import { Card } from "@/components/ui/Card";
import {
  communityPlugins,
  getCommunityPluginBySlug,
  getCommunityProfilesBySlug,
} from "@/data/communityProfiles";
import { ArrowLeft, Download, FileJson, Send, ShieldCheck, Upload } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return communityPlugins.map((plugin) => ({
    slug: plugin.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plugin = getCommunityPluginBySlug(slug);

  return {
    title: plugin ? `${plugin.name} Community | BlueTools` : "Community | BlueTools",
    description: plugin
      ? `Download approved community profiles for ${plugin.name}.`
      : "Download approved BlueTools community profiles.",
  };
}

export default async function CommunityPluginPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plugin = getCommunityPluginBySlug(slug);

  if (!plugin) {
    notFound();
  }

  const profiles = getCommunityProfilesBySlug(slug);

  return (
    <div className="pb-24">
      <section className="neo-field border-b border-[rgba(199,251,255,.1)] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <Link
              href="/community"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Community
            </Link>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_22rem] lg:items-end">
              <div>
                <p className="hud-label mb-5">Community Profiles</p>
                <h1 className="font-mono text-4xl font-bold uppercase tracking-[0.08em] md:text-5xl">
                  {plugin.slug === "octopie" ? (
                    <OctoPieLabel iconBoxClassName="h-14 w-14" iconClassName="h-7 w-7" />
                  ) : (
                    plugin.name
                  )}
                </h1>
                <p className="section-copy mt-6 max-w-3xl text-lg">
                  Download approved profile JSON files shared by the community.
                </p>
              </div>

              <Card className="night-card p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center border border-[rgba(199,251,255,.14)] bg-black/28 text-cyan-100">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-white">
                      Reviewed queue
                    </p>
                    <p className="text-sm text-muted-foreground">Submissions are approved before publishing.</p>
                  </div>
                </div>
                <a
                  href={plugin.submitHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 border border-[rgba(199,251,255,.14)] bg-[rgba(5,9,16,.62)] px-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-cyan-200/28 hover:bg-cyan-300/8 hover:text-cyan-50"
                >
                  <Upload className="h-4 w-4 text-cyan-100" />
                  Submit profile
                </a>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {profiles.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {profiles.map((profile, index) => (
              <FadeIn key={profile.id} direction="up" delay={index * 0.08}>
                <Card hoverEffect className="night-card flex h-full flex-col p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[rgba(199,251,255,.14)] bg-black/28 text-cyan-100">
                      <FileJson className="h-5 w-5" />
                    </span>
                    <span className="border border-[rgba(199,251,255,.14)] bg-black/28 px-2.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cyan-100">
                      {profile.version}
                    </span>
                  </div>

                  <h2 className="mb-3 font-mono text-xl font-bold uppercase tracking-[0.08em] text-white">
                    {profile.title}
                  </h2>
                  <p className="section-copy mb-5 flex-grow text-sm">{profile.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {profile.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[rgba(199,251,255,.12)] bg-black/24 px-2.5 py-1 text-xs font-semibold text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-sm">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Author</p>
                      <p className="mt-1 text-white">{profile.author}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Updated</p>
                      <p className="mt-1 text-white">{profile.updatedAt}</p>
                    </div>
                  </div>

                  <a
                    href={profile.downloadHref}
                    download={profile.fileName}
                    className="mt-auto inline-flex h-10 items-center justify-center gap-2 border border-[rgba(199,251,255,.14)] bg-[rgba(5,9,16,.62)] px-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-cyan-200/28 hover:bg-cyan-300/8 hover:text-cyan-50"
                  >
                    <Download className="h-4 w-4 text-cyan-100" />
                    Download JSON
                  </a>
                </Card>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn direction="up">
            <Card className="night-card mx-auto max-w-2xl p-8 text-center">
              <Send className="mx-auto mb-4 h-9 w-9 text-cyan-100" />
              <h2 className="font-mono text-2xl font-bold uppercase tracking-[0.08em] text-white">
                No approved profiles yet.
              </h2>
              <p className="section-copy mt-3">
                Be the first to submit a profile for this add-on.
              </p>
              <a
                href={plugin.submitHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 border border-[rgba(199,251,255,.14)] bg-[rgba(5,9,16,.62)] px-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-cyan-200/28 hover:bg-cyan-300/8 hover:text-cyan-50"
              >
                <Upload className="h-4 w-4 text-cyan-100" />
                Submit profile
              </a>
            </Card>
          </FadeIn>
        )}
      </section>
    </div>
  );
}
