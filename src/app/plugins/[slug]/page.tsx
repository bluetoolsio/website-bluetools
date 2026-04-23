import { plugins, getPluginBySlug } from "@/data/plugins";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Play } from "lucide-react";
import Link from "next/link";
import { SmartPieLabel } from "@/components/brand/SmartPieLabel";

function SuperhiveIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1920 1080" className="h-5 w-5">
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
        fill="#ff90e8"
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
      <section className="relative pt-24 pb-20 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-background z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <h1 className="text-5xl font-bold mb-4">
                  {plugin.slug === "smart-pie" ? (
                    <SmartPieLabel iconBoxClassName="h-14 w-14" iconClassName="h-7 w-7" />
                  ) : (
                    plugin.name
                  )}
                </h1>
                <p className="text-2xl text-muted-foreground mb-8">
                  {plugin.tagline}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium border border-white/10">v{plugin.version}</span>
                  <span className="text-muted-foreground text-sm">Updated {plugin.lastUpdated}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={plugin.purchaseLinks.superhive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-md bg-accent px-5 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-colors hover:bg-accent/90 sm:w-auto sm:min-w-44"
                    >
                      <SuperhiveIcon />
                      Superhive
                    </a>
                    <a
                      href={plugin.purchaseLinks.gumroad}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-md border border-white/10 bg-white/10 px-5 text-base font-semibold text-white transition-colors hover:bg-white/15 sm:w-auto sm:min-w-44"
                    >
                      <GumroadIcon />
                      Gumroad
                    </a>
                  </div>
                  <Link href="/docs" className="w-full sm:w-fit">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      View Documentation
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="aspect-video bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-20 h-20 rounded-full bg-accent/80 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-accent/50">
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <FadeIn direction="up">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                  <p>{plugin.description}</p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.1} className="mt-16">
                <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {plugin.features.map((feature, index) => (
                    <div key={index} className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <FadeIn direction="up" delay={0.2}>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold mb-4">Plugin Info</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Version</span>
                      <span>{plugin.version}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Last Updated</span>
                      <span>{plugin.lastUpdated}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Compatibility</span>
                      <span>Blender 4.0+</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
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
        </div>
      </section>
    </div>
  );
}
