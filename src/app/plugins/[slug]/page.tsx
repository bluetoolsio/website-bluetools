import { plugins, getPluginBySlug } from "@/data/plugins";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import {
  ChartPie,
  CheckCircle2,
  Play,
  Radar,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { OctoPieLabel } from "@/components/brand/OctoPieLabel";
import { ShowcaseCarousel } from "@/components/plugins/ShowcaseCarousel";

const assetBasePath = "/website-smartblender";

const featureIcons: Record<string, LucideIcon> = {
  "Build From Scratch": ChartPie,
  "Context-Aware Profiles": Radar,
};

function SuperhiveIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1920 1080" className="h-8 w-8">
      <path
        fill="currentColor"
        d="M987.49,526.61c68.99,74.6,113.93,206.77,41.23,294.08-21.71,26.08-65.99,51.78-100.31,53.65-43.66,2.38-3.06-33.55,4.85-44.48,105.65-146.05-136.97-380.25-275.28-268.6-11.27,9.1-18.62,31.4-36.18,18.76-11.87-8.54.7-43.8,5.4-56.22,60.95-161.18,269.09-95.82,360.3,2.82Z"
      />
      <path
        fill="currentColor"
        d="M1232.51,621.64c32.63,32.09,116.1,104.18,129.77,143.26,59.92,171.28-200.32,223.38-222.19,55.43-8.69-66.73-7.93-156.41-10.29-225.27-.95-27.78,19.42-45.27,45.01-31.76,15.81,8.35,43.27,44.16,57.71,58.35Z"
      />
      <path
        fill="currentColor"
        d="M664.84,126.56c34.18-5.37,69.88,5.09,97.23,25.45l169.94,170.1c18.85,51.85-41.61,43.26-75.17,42.5-49.9-1.13-110.73-2.92-160.04-6.71-165.96-12.78-156.14-211.82-31.95-231.33Z"
      />
      <path
        fill="currentColor"
        d="M697.67,630.26c57.56-6.84,120.72,37.75,146.36,87.21,74.47,143.63-94.53,206.17-188.08,89.98-48.06-59.69-51.58-166.1,41.71-177.2Z"
      />
      <path
        fill="currentColor"
        d="M1068.34,524.19c-14.1-28.87-39.72-56.84-64.29-77.9-9.7-8.31-38.9-20.13-37.07-33.61,1.31-3.42,2.94-8.79,6.08-10.62,3.46-2.01,62.05-11.12,70.16-11.55,76.35-4.03,61.1,58.44,49.9,112.01-3.28,15.68-5.21,25.59-24.78,21.66Z"
      />
    </svg>
  );
}

function GumroadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M256,37c29.58,0,58.26,5.79,85.23,17.2,26.07,11.03,49.5,26.82,69.62,46.95s35.92,43.55,46.95,69.62c11.41,26.98,17.2,55.66,17.2,85.23s-5.79,58.26-17.2,85.23c-11.03,26.07-26.82,49.5-46.95,69.62-20.12,20.12-43.55,35.92-69.62,46.95-26.98,11.41-55.66,17.2-85.23,17.2-29.58,0-58.26-5.79-85.23-17.2-26.07-11.03-49.5-26.82-69.62-46.95-20.12-20.12-35.92-43.55-46.95-69.62-11.41-26.98-17.2-55.66-17.2-85.23s5.79-58.26,17.2-85.23c11.03-26.07,26.82-49.5,46.95-69.62s43.55-35.92,69.62-46.95c26.98-11.41,55.66-17.2,85.23-17.2M256,6C117.93,6,6,117.93,6,256s111.93,250,250,250h0c138.07,0,250-111.93,250-250S394.07,6,256,6h0Z"
      />
      <path
        fill="currentColor"
        d="M234.3,381.99c-73.23,0-116.31-58.73-116.31-131.8s47.39-137.53,137.85-137.53,124.92,63.04,126.36,98.85h-67.49c-1.43-20.05-18.67-50.14-60.31-50.14-44.51,0-73.24,38.68-73.24,85.96s28.72,85.96,73.24,85.96c40.21,0,57.44-31.52,64.61-63.04h-64.61v-25.78h135.59v131.81h-59.49v-83.1c-4.31,30.08-22.98,88.82-96.21,88.82h0Z"
      />
    </svg>
  );
}

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
      <section className="bat-grid relative overflow-hidden border-b border-white/10 pb-20 pt-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-accent/16 via-background/40 to-background" />
        <div className="absolute left-1/2 top-20 z-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <p className="hud-label mb-5">Plugin dossier</p>
                <h1 className="mb-4 text-5xl font-black tracking-tight">
                  {plugin.slug === "octopie" ? (
                    <OctoPieLabel iconBoxClassName="h-14 w-14" iconClassName="h-7 w-7" />
                  ) : (
                    plugin.name
                  )}
                </h1>
                <p className="text-2xl text-muted-foreground mb-8">
                  {plugin.tagline}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-sm font-bold text-accent">v{plugin.version}</span>
                  <span className="text-sm text-muted-foreground">Updated {plugin.lastUpdated}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={plugin.purchaseLinks.superhive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-accent px-5 text-base font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-colors hover:bg-[#ff3659] sm:w-auto sm:min-w-44"
                  >
                    <SuperhiveIcon />
                    Superhive
                  </a>
                  <a
                    href={plugin.purchaseLinks.gumroad}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-accent px-5 text-base font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-colors hover:bg-[#ff3659] sm:w-auto sm:min-w-44"
                  >
                    <GumroadIcon />
                    Gumroad
                  </a>
                  <Link href="/docs" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Documentation
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="terminal-panel addon-glow group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl">
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-accent/80 shadow-lg shadow-accent/50 backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <span className="text-muted-foreground z-10">Trailer Video Placeholder</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Overview & Features */}
      <section className="border-b border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <FadeIn direction="up">
              <div>
                <p className="hud-label mb-4">Overview</p>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  A custom command surface for Blender.
                </h2>
                <div className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                  <p>{plugin.description}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1">
                  {plugin.features.map((feature, index) => {
                    const Icon = plugin.slug === "octopie"
                      ? featureIcons[feature.title] ?? CheckCircle2
                      : CheckCircle2;

                    return (
                      <div key={index} className="night-card flex gap-4 rounded-2xl p-6">
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/15 text-accent">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <h3 className="font-semibold mb-2">{feature.title}</h3>
                          <p className="text-sm leading-6 text-muted-foreground">{feature.description}</p>
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
        <section className="relative border-b border-white/10 bg-black/25 py-24">
          <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(110,168,255,0.16),transparent_45%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <div className="mb-12 max-w-3xl">
                <p className="hud-label mb-4">Workflow showcase</p>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  Build the pie menu around the way you actually work.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mb-8 max-w-3xl">
              <p className="hud-label mb-4">Details</p>
              <h2 className="text-3xl font-bold">Plugin Info & Support</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FadeIn direction="up" delay={0.1}>
              <div className="night-card p-6">
                <h3 className="font-semibold mb-4">Plugin Info</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Version</span>
                    <span>{plugin.version}</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Last Updated</span>
                    <span>{plugin.lastUpdated}</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Compatibility</span>
                    <span>Blender 4.0+</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="night-card p-6">
                <h3 className="font-semibold mb-4">Support</h3>
                <div className="space-y-3 flex flex-col">
                  <Link href="/docs" className="text-sm text-muted-foreground hover:text-white transition-colors">Documentation</Link>
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
