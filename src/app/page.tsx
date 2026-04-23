import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Zap, Layers, Cpu } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
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
              Premium context-aware plugins for Blender professionals. Work faster, smarter, and with less friction.
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

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Professionals</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every plugin is designed from the ground up to eliminate repetitive tasks and keep you in the creative flow.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <Card className="p-8 h-full bg-white/5 border-white/10 hover-effect">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-muted-foreground">Optimized C++ and Python code ensures zero lag, even in heavy scenes with millions of polygons.</p>
              </Card>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <Card className="p-8 h-full bg-white/5 border-white/10 hover-effect">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                  <Layers className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Context Aware</h3>
                <p className="text-muted-foreground">Menus and tools adapt to your current selection, mode, and active tool dynamically.</p>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <Card className="p-8 h-full bg-white/5 border-white/10 hover-effect">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                  <Cpu className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Highly Customizable</h3>
                <p className="text-muted-foreground">Tailor every aspect of the plugins to match your exact pipeline and muscle memory.</p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Plugin / Showcase */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">Featured</span>
                <h2 className="text-4xl font-bold mt-2 mb-6">Smart Pie</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  The ultimate pie menu enhancement. Radically improve your workflow with menus that predict what you need before you need it.
                </p>
                <Link href="/plugins/smart-pie">
                  <Button>View Smart Pie</Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl">
                {/* Placeholder for video/gif demo */}
                <div className="text-muted-foreground flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                  <p>Interactive Demo</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold mb-6">Ready to upgrade your workflow?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join thousands of 3D artists who have already revolutionized how they use Blender.
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
