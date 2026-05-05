import { FadeIn } from "@/components/animations/FadeIn";
import { plugins } from "@/data/plugins";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { OctoPieLabel } from "@/components/brand/OctoPieLabel";
import { PluginBuyDropdown } from "@/components/plugins/PluginPurchaseActions";

const assetBasePath = "";

export const metadata = {
  title: "Plugins | BlueTools",
  description: "Browse focused plugins and specialist tools from BlueTools.",
};

export default function PluginsPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 md:pt-14 lg:px-8">
      <FadeIn direction="up">
        <div className="mb-16">
          <p className="hud-label mb-4">BlueTools plugins</p>
          <h1 className="mb-4 font-mono text-3xl font-bold uppercase tracking-[0.1em] md:text-5xl">
            Plugins and specialist tools for <span className="text-addonline">focused work.</span>
          </h1>
          <p className="section-copy max-w-2xl text-xl">
            BlueTools is a base for sharp, practical products across creative and technical workflows, starting with OctoPie for Blender.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plugins.map((plugin, index) => (
          <FadeIn key={plugin.id} direction="up" delay={index * 0.1}>
            <Card hoverEffect className="flex h-full flex-col overflow-visible night-card">
              <div className="media-panel octopie-preview-stage relative flex aspect-[4/3] items-center justify-center overflow-hidden border-x-0 border-t-0">
                {plugin.previewImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${assetBasePath}${plugin.previewImage}`}
                    alt={`${plugin.name} preview`}
                    className="relative z-10 h-full w-full object-cover opacity-[0.92] saturate-105 contrast-105 transition duration-500 hover:scale-[1.025] hover:opacity-100"
                  />
                ) : (
                  <span className="section-copy text-sm">{plugin.name} Preview</span>
                )}
              </div>

              <div className="relative z-10 flex flex-grow flex-col p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h2 className="font-mono text-2xl font-bold uppercase tracking-[0.055em]">
                    {plugin.slug === "octopie" ? (
                      <OctoPieLabel
                        iconBoxClassName="h-9 w-9"
                        iconClassName="h-5 w-5"
                      />
                    ) : (
                      plugin.name
                    )}
                  </h2>
                  <span className="flex flex-col items-end gap-1 text-right leading-none">
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-cyan-100/75">
                      {plugin.discountLabel}
                    </span>
                    <span className="font-semibold text-cyan-100">{plugin.price}</span>
                  </span>
                </div>

                <p className="section-copy mb-6 flex-grow text-sm">
                  {plugin.tagline}
                </p>

                <div className="mt-auto flex gap-4">
                  <Link href={`/plugins/${plugin.slug}`} className="flex-1">
                    <Button className="w-full gap-2.5">
                      <ExternalLink className="h-4 w-4 text-cyan-100" />
                      Open
                    </Button>
                  </Link>
                  <PluginBuyDropdown
                    size="md"
                    className="flex-1"
                    purchaseLinks={plugin.purchaseLinks}
                  />
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
