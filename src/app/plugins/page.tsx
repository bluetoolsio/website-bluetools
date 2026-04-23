import { FadeIn } from "@/components/animations/FadeIn";
import { plugins } from "@/data/plugins";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { SmartPieLabel } from "@/components/brand/SmartPieLabel";

const assetBasePath = "/website-smartblender";

export const metadata = {
  title: "Plugins | Smartblender.io",
  description: "Browse our collection of premium Blender plugins.",
};

export default function PluginsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <FadeIn direction="up">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Plugins</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Professional grade tools designed to streamline your workflow and expand what&apos;s possible in Blender.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plugins.map((plugin, index) => (
          <FadeIn key={plugin.id} direction="up" delay={index * 0.1}>
            <Card className="flex flex-col h-full hoverEffect={true}">
              <div className="aspect-[4/3] bg-white/5 border-b border-white/10 relative overflow-hidden flex items-center justify-center">
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
                    {plugin.slug === "smart-pie" ? (
                      <SmartPieLabel
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
