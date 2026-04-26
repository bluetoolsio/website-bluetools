import { FadeIn } from "@/components/animations/FadeIn";
import { plugins } from "@/data/plugins";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { OctoPieLabel } from "@/components/brand/OctoPieLabel";

const assetBasePath = "/website-smartblender";

export const metadata = {
  title: "Plugins | Reploy",
  description: "Browse focused plugins and specialist tools from Reploy.",
};

export default function PluginsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <FadeIn direction="up">
        <div className="mb-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-accent">Reploy plugins</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Plugins and specialist tools for focused work.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Reploy is a base for sharp, practical products across creative and technical workflows — starting with OctoPie for Blender.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plugins.map((plugin, index) => (
          <FadeIn key={plugin.id} direction="up" delay={index * 0.1}>
            <Card hoverEffect className="flex flex-col h-full night-card">
              <div className="aspect-[4/3] bg-black border-b border-white/10 relative overflow-hidden flex items-center justify-center">
                {plugin.slug === "octopie" && (
                  <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-black/60 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-accent backdrop-blur">
                    <OctoPieLabel iconBoxClassName="h-6 w-6 rounded-md" iconClassName="h-3.5 w-3.5" textClassName="sr-only" />
                    OctoPie
                  </div>
                )}
                {plugin.previewImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${assetBasePath}${plugin.previewImage}`}
                    alt={`${plugin.name} preview`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-muted-foreground">{plugin.name} Preview</span>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">
                    {plugin.slug === "octopie" ? (
                      <OctoPieLabel
                        iconBoxClassName="h-9 w-9"
                        iconClassName="h-5 w-5"
                      />
                    ) : (
                      plugin.name
                    )}
                  </h2>
                  <span className="text-accent font-semibold">{plugin.price}</span>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {plugin.tagline}
                </p>
                
                <div className="flex gap-4 mt-auto">
                  <Link href={`/plugins/${plugin.slug}`} className="flex-1">
                    <Button className="w-full">View Details</Button>
                  </Link>
                  <Button variant="outline" className="px-4">
                    Buy Now
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
