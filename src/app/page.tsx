import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Zap, Layers, Cpu } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { SmartPieLabel } from "@/components/brand/SmartPieLabel";

const assetBasePath = "/website-smartblender";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-background to-background" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/30 rounded-full blur-[120px] opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              Blender workflow without <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">interruption.</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
              We build Blender plugins that turn repeated clicks, menu hunting, and scattered shortcuts into focused tools that stay close to your workflow.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/plugins">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Plugins
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Read Documentation
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Featured Plugin / Showcase */}
      <section className="py-16 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">Featured</span>
                <h2 className="text-4xl font-bold mt-2 mb-6">
                  <SmartPieLabel iconBoxClassName="h-12 w-12" iconClassName="h-6 w-6" />
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Build your own context-aware pie menus with operators, shortcuts, scripts, assets, macros, nested lists, and reusable profiles.
                </p>
                <Link href="/plugins/smart-pie">
                  <Button>View Smart Pie</Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${assetBasePath}/plugins/smart-pie/preview.png`}
                  alt="Smart Pie preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Plugins Built Around Real Blender Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our tools are designed for artists who want fewer UI detours, more control, and workflows that can be shaped around how they already use Blender.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <Card className="p-8 h-full bg-white/5 border-white/10 hover-effect">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Less Menu Diving</h3>
                <p className="text-muted-foreground">Put the operators, shortcuts, scripts, and assets you actually use behind one direct action.</p>
              </Card>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <Card className="p-8 h-full bg-white/5 border-white/10 hover-effect">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                  <Layers className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Context Aware</h3>
                <p className="text-muted-foreground">Tools can change by editor and mode, so Object Mode, Sculpt, Geometry Nodes, UV, and other contexts get the right setup.</p>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <Card className="p-8 h-full bg-white/5 border-white/10 hover-effect">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                  <Cpu className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Built to Be Shaped</h3>
                <p className="text-muted-foreground">Profiles, shortcuts, local icons, scripts, assets, and backups let each plugin fit into your own pipeline.</p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold mb-6">Make Blender feel closer to your hands.</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Start with Smart Pie and build menus around the actions, assets, and scripts you reach for every day.
            </p>
            <Link href="/plugins">
              <Button size="lg" className="px-12">
                Browse Plugins
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
