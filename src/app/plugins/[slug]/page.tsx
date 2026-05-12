import { plugins, getPluginBySlug } from "@/data/plugins";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  ChartPie,
  CheckCircle2,
  Radar,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { OctoPieLabel } from "@/components/brand/OctoPieLabel";
import { ShowcaseCarousel } from "@/components/plugins/ShowcaseCarousel";
import { PluginPurchaseActions } from "@/components/plugins/PluginPurchaseActions";

const assetBasePath = "";

const featureIcons: Record<string, LucideIcon> = {
  "Build From Scratch": ChartPie,
  "Context-Aware Profiles": Radar,
};

export function generateStaticParams() {
  return plugins.map((plugin) => ({
    slug: plugin.slug,
  }));
}

export default async function PluginPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plugin = getPluginBySlug(slug);

  if (!plugin) {
    notFound();
  }

  return (
    <div className="pb-24">
      {/* Plugin Hero */}
      <section className="neo-field relative overflow-visible border-b border-[rgba(199,251,255,.1)] pb-20 pt-12 md:pt-14">
        <div className="absolute inset-0 z-0 opacity-[0.08] [background-image:linear-gradient(rgba(199,251,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(65,223,241,.045)_1px,transparent_1px)] [background-size:96px_96px]" />
        <div className="absolute inset-x-0 bottom-0 z-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <FadeIn direction="right">
              <div>
                <p className="hud-label mb-5">Blender add-on</p>
                <h1 className="mb-4 font-mono text-4xl font-bold uppercase tracking-[0.08em] md:text-5xl">
                  {plugin.slug === "octopie" ? (
                    <OctoPieLabel iconBoxClassName="h-14 w-14" iconClassName="h-7 w-7" />
                  ) : (
                    plugin.name
                  )}
                </h1>
                <p className="section-copy mb-8 max-w-xl text-xl md:text-2xl">
                  Customizable Blender add-on for building personal pie menu systems.
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="border border-[rgba(199,251,255,.16)] bg-black/35 px-3 py-1 font-mono text-sm font-bold text-cyan-100">v{plugin.version}</span>
                  <span className="border border-[rgba(199,251,255,.16)] bg-black/35 px-3 py-1 text-sm font-semibold text-cyan-100">
                    {plugin.price}
                  </span>
                </div>
                <PluginPurchaseActions
                  docsHref={`/docs/${plugin.slug}`}
                  purchaseLinks={plugin.purchaseLinks}
                />
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2} className="lg:pt-16">
              <div className="terminal-panel addon-glow relative aspect-video overflow-hidden">
                {plugin.heroVideo ? (
                  <iframe
                    src={plugin.heroVideo}
                    title={`${plugin.name} demo video`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <span className="section-copy absolute inset-0 flex items-center justify-center text-sm">
                    Trailer Video Placeholder
                  </span>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Overview & Features */}
      <section className="border-b border-[rgba(199,251,255,.1)] bg-black/16 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <FadeIn direction="up">
              <div>
                <p className="hud-label mb-4">Overview</p>
                <h2 className="font-mono text-3xl font-bold uppercase tracking-[0.06em] md:text-5xl">
                  A custom command surface for Blender.
                </h2>
                <div className="section-copy mt-6 max-w-3xl text-lg">
                  <p>{plugin.description}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div>
                <h2 className="mb-6 font-mono text-3xl font-bold uppercase tracking-[0.05em]">Key Features</h2>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1">
                  {plugin.features.map((feature, index) => {
                    const Icon = plugin.slug === "octopie"
                      ? featureIcons[feature.title] ?? CheckCircle2
                      : CheckCircle2;

                    return (
                      <div key={index} className="night-card flex gap-4 p-6">
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-[rgba(199,251,255,.14)] bg-black/28 text-cyan-100">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-[0.08em] text-white">{feature.title}</h3>
                          <p className="section-copy text-sm">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {plugin.showcase && plugin.showcase.length > 0 ? (
        <section className="relative border-b border-[rgba(199,251,255,.1)] bg-black/18 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <div className="mb-12 max-w-3xl">
                <p className="hud-label mb-4">Workflow showcase</p>
                <h2 className="font-mono text-3xl font-bold uppercase tracking-[0.06em] md:text-5xl">
                  Build the pie menu around the way you actually work.
                </h2>
                <p className="section-copy mt-5 text-lg">
                  OctoPie slots can launch operators, shortcuts, scripts, assets, macros, lists, and nested pies, so each profile becomes a fast command surface for the current Blender context.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <ShowcaseCarousel items={plugin.showcase} assetBasePath={assetBasePath} />
            </FadeIn>
          </div>
        </section>
      ) : null}

      {/* Details */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mb-8 max-w-3xl">
              <p className="hud-label mb-4">Details</p>
              <h2 className="font-mono text-3xl font-bold uppercase tracking-[0.05em]">Plugin Info & Support</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            <FadeIn direction="up" delay={0.1} className="h-full">
              <div className="night-card h-full p-6">
                <h3 className="font-semibold mb-4">Plugin Info</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Version</span>
                    <span>{plugin.version}</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Compatibility</span>
                    <span>Blender 4.0+</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Price</span>
                    <span>{plugin.price}</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="h-full">
              <div className="night-card h-full p-6">
                <h3 className="font-semibold mb-4">Support</h3>
                <div className="space-y-3 flex flex-col">
                  <Link href={`/docs/${plugin.slug}`} className="text-sm text-muted-foreground hover:text-white transition-colors">Documentation</Link>
                  <Link href={`/community/${plugin.slug}`} className="text-sm text-muted-foreground hover:text-white transition-colors">Community Profiles</Link>
                  <Link href="/report-bug" className="text-sm text-muted-foreground hover:text-white transition-colors">Report an Issue</Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Contact Support</Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
