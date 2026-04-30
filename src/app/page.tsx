import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Focus, Gauge, Workflow, Zap } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { OctoPieIcon, OctoPieLabel } from "@/components/brand/OctoPieLabel";

const assetBasePath = "/website-smartblender";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <section className="relative overflow-hidden pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 neo-field" />
          <div className="absolute left-[-18%] bottom-[-30%] h-[620px] w-[620px]  bg-cyan-300/[0.035]" />
          <div className="absolute right-[-18%] top-[-26%] h-[620px] w-[620px]  bg-blue-950/25" />
          <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(94,234,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(94,234,255,.05)_1px,transparent_1px)] [background-size:96px_96px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div>
            <FadeIn direction="up">
              <h1 className="max-w-4xl font-mono text-3xl font-bold uppercase leading-tight tracking-[0.16em] text-white md:text-5xl">
                Rewriting how{" "}
                <span className="block text-addonline">
                  creators work.
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="section-copy mt-8 max-w-2xl text-base md:text-lg">
                <p>
                  We build creative add-ons that replace friction with control. Less clutter. Faster execution. Smarter workflows that scale with you.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/plugins">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore plugins
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Read docs
                </Button>
              </Link>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.25} className="tech-frame mx-auto mt-14 max-w-6xl p-3 sm:p-4">
            <Link
              href="/plugins/octopie"
              aria-label="Open OctoPie plugin page"
              className="group relative grid overflow-hidden bg-black/20 shadow-black/30 backdrop-blur-xl transition duration-300 hover:bg-cyan-300/[0.025] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="flex flex-col justify-between border border-[rgba(199,251,255,.10)] bg-[rgba(5,9,16,.96)] p-6 md:border-r-0 lg:p-7">
                <div>
                  <p className="section-kicker">Blender Add-on</p>
                  <h2 className="mt-3 font-mono text-2xl font-bold uppercase tracking-[0.12em] text-white">
                    <OctoPieLabel iconBoxClassName="h-10 w-10 " iconClassName="h-5 w-5" />
                  </h2>
                  <p className="section-copy mt-5 text-sm">
                    fully customizable pie menu system for Blender.
                    <br />
                    Build your own workflow with Operators, Shortcuts, Keyboard inputs, Menus, Scripts, Assets, Macros, Lists, and nested Pie Menus.
                  </p>
                </div>
                <span className="mt-8 inline-flex w-fit items-center gap-2 border border-[rgba(199,251,255,.14)] bg-[rgba(0,2,7,.42)] px-4 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-cyan-200/28 hover:bg-cyan-300/8">
                  Open OctoPie
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="media-panel relative min-h-[300px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${assetBasePath}/plugins/octopie/preview.gif`}
                  alt="OctoPie preview"
                  className="h-full w-full object-cover opacity-[0.78] saturate-95 contrast-110 transition duration-500 group-hover:scale-[1.012] group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/28 via-transparent to-black/18" />
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="bat-grid border-y border-[rgba(199,251,255,.10)] bg-black/24 py-18 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="section-kicker">Smart Blender add-ons, built for flow</p>
              <h2 className="mt-4 font-mono text-2xl font-bold uppercase tracking-[0.07em] text-white md:text-4xl">
                Less clutter. More control.
                <span className="block">A faster way to create.</span>
              </h2>
              <p className="section-copy mx-auto mt-5 max-w-2xl">
                BlueTools builds smart Blender add-ons that reduce friction, speed up repetitive work, and change how creators move through production.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              [Workflow, "Workflow first", "Add-ons designed around real production habits, not bloated feature lists."],
              [Zap, "Built for speed", "Turn repetitive actions into cleaner, faster, more direct workflows."],
              [Focus, "Creator focused", "Tools that stay out of the way until the moment you need them."],
            ].map(([Icon, title, copy], index) => (
              <FadeIn key={String(title)} direction="up" delay={index * 0.1}>
                <Card hoverEffect className="h-full p-7">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center border border-[rgba(199,251,255,.14)] bg-black/30 text-cyan-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-mono text-lg font-bold uppercase tracking-[0.035em] text-white">{title as string}</h3>
                  <p className="section-copy text-sm">{copy as string}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-22 md:py-30">
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-80 max-w-4xl bg-black/16" />
        <div className="absolute inset-x-0 top-16 -z-10 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mx-auto mb-7 grid w-fit grid-cols-[6.5rem_3.5rem_6.5rem] items-center gap-2 sm:grid-cols-[8rem_3.5rem_8rem] sm:gap-4">
              <span className="inline-flex h-10 items-center justify-center gap-2 border border-[rgba(199,251,255,.12)] bg-black/24 px-2 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground sm:px-3 sm:text-xs sm:tracking-[0.18em]"><Gauge className="h-3.5 w-3.5 text-cyan-100" /> Fast</span>
              <span className="inline-flex h-14 w-14 items-center justify-center border border-[rgba(199,251,255,.15)] bg-black/30 text-cyan-100">
                <OctoPieIcon className="h-8 w-8" />
              </span>
              <span className="inline-flex h-10 items-center justify-center gap-2 border border-[rgba(199,251,255,.12)] bg-black/24 px-2 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground sm:px-3 sm:text-xs sm:tracking-[0.18em]"><Focus className="h-3.5 w-3.5 text-cyan-100" /> Focused</span>
            </div>
            <h2 className="font-mono text-3xl font-bold uppercase tracking-[0.07em] md:text-5xl">Start with OctoPie.</h2>
            <p className="section-copy mx-auto mt-6 max-w-2xl text-lg">
              Build menus around the actions, assets, scripts, and macros you reach for every day, then redeploy them wherever your workflow moves next.
            </p>
            <div className="mt-10">
              <Link href="/plugins/octopie">
                <Button size="lg" className="px-12">
                  View OctoPie
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
