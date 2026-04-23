import { plugins, getPluginBySlug } from "@/data/plugins";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Download, Play } from "lucide-react";
import Link from "next/link";

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
                <h1 className="text-5xl font-bold mb-4">{plugin.name}</h1>
                <p className="text-2xl text-muted-foreground mb-8">
                  {plugin.tagline}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium border border-white/10">v{plugin.version}</span>
                  <span className="text-muted-foreground text-sm">Updated {plugin.lastUpdated}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="px-8">
                    <Download className="mr-2 h-5 w-5" />
                    Buy for {plugin.price}
                  </Button>
                  <Link href="/docs">
                    <Button variant="outline" size="lg">View Documentation</Button>
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
