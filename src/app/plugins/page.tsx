import { FadeIn } from "@/components/animations/FadeIn";
import { plugins } from "@/data/plugins";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { OctoPieLabel } from "@/components/brand/OctoPieLabel";

const assetBasePath = "/website-smartblender";

export const metadata = {
  title: "Plugins | BlueTools",
  description: "Browse focused plugins and specialist tools from BlueTools.",
};

export default function PluginsPage() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-x-4 top-24 -z-10 h-72  bg-black/20" />
      <FadeIn direction="up">
        <div className="mb-16">
          <p className="hud-label mb-4">BlueTools plugins</p>
          <h1 className="mb-4 font-mono text-3xl font-bold uppercase tracking-[0.12em] md:text-5xl">Plugins and specialist tools for <span className="text-addonline">focused work.</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            BlueTools is a base for sharp, practical products across creative and technical workflows — starting with OctoPie for Blender.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plugins.map((plugin, index) => (
          <FadeIn key={plugin.id} direction="up" delay={index * 0.1}>
            <Card hoverEffect className="flex flex-col h-full night-card">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-white/10 bg-black">
                {plugin.slug === "octopie" && (
                  <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2  border border-cyan-200/20 bg-black/60 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">
                    <OctoPieLabel iconBoxClassName="h-6 w-6 " iconClassName="h-3.5 w-3.5" textClassName="sr-only" />
                    OctoPie
                  </div>
                )}
                {plugin.previewImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${assetBasePath}${plugin.previewImage}`}
                    alt={`${plugin.name} preview`}
                    className="h-full w-full object-cover opacity-90 saturate-125 transition duration-500 hover:scale-105"
                  />
                ) : (
                  <span className="text-muted-foreground">{plugin.name} Preview</span>
                )}
              </div>
              
              <div className="relative z-10 flex flex-grow flex-col p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-mono text-2xl font-bold tracking-[0.06em]">
                    {plugin.slug === "octopie" ? (
                      <OctoPieLabel
                        iconBoxClassName="h-9 w-9"
                        iconClassName="h-5 w-5"
                      />
                    ) : (
                      plugin.name
                    )}
                  </h2>
                  <span className="text-cyan-100 font-semibold">{plugin.price}</span>
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
