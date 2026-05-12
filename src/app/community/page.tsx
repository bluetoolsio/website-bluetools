import { FadeIn } from "@/components/animations/FadeIn";
import { OctoPieLabel } from "@/components/brand/OctoPieLabel";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { communityPlugins, getCommunityProfilesBySlug } from "@/data/communityProfiles";
import { ArrowRight, FileJson, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Community | BlueTools",
  description: "Choose a BlueTools add-on to browse community profiles.",
};

export default function CommunityHubPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <FadeIn direction="up">
        <div className="mb-14 max-w-3xl">
          <p className="hud-label mb-4">Community</p>
          <h1 className="font-mono text-3xl font-bold uppercase tracking-[0.1em] md:text-5xl">
            Choose an add-on.
          </h1>
          <p className="section-copy mt-5 text-lg">
            Browse approved community profiles and download setups shared by BlueTools users.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {communityPlugins.map((plugin, index) => {
          const profileCount = getCommunityProfilesBySlug(plugin.slug).length;

          return (
            <FadeIn key={plugin.slug} direction="up" delay={index * 0.1}>
              <Card hoverEffect className="night-card flex h-full flex-col p-7">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="section-kicker">Community Profiles</p>
                    <h2 className="mt-3 font-mono text-2xl font-bold uppercase tracking-[0.08em] text-white">
                      {plugin.slug === "octopie" ? (
                        <OctoPieLabel iconBoxClassName="h-10 w-10" iconClassName="h-5 w-5" />
                      ) : (
                        plugin.name
                      )}
                    </h2>
                  </div>
                  <span className="inline-flex items-center gap-2 border border-[rgba(199,251,255,.14)] bg-black/28 px-3 py-1 font-mono text-xs font-bold text-cyan-100">
                    <FileJson className="h-3.5 w-3.5" />
                    {profileCount}
                  </span>
                </div>

                <p className="section-copy mb-8 flex-grow text-sm">{plugin.description}</p>

                <Link href={`/community/${plugin.slug}`} className="mt-auto w-fit">
                  <Button className="gap-2">
                    <Users className="h-4 w-4" />
                    View community
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
