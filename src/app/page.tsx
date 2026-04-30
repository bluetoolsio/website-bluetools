import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Gauge, Orbit, Sparkles, Workflow, Zap } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { OctoPieIcon, OctoPieLabel } from "@/components/brand/OctoPieLabel";
import { BlueToolsLogo } from "@/components/brand/BlueToolsLogo";

const assetBasePath = "/website-smartblender";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <section className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 md:pb-28 md:pt-32 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 neo-field" />
          <div className="absolute left-[-18%] bottom-[-30%] h-[620px] w-[620px]  bg-cyan-300/[0.035]" />
          <div className="absolute right-[-18%] top-[-26%] h-[620px] w-[620px]  bg-blue-950/25" />
          <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(94,234,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(94,234,255,.05)_1px,transparent_1px)] [background-size:96px_96px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-6xl">
            <FadeIn direction="up">
              <div className="mb-10 flex items-center justify-between gap-4">
                <BlueToolsLogo markClassName="h-10 w-10 " wordClassName="text-2xl md:text-3xl" showTagline />
                <div className="hud-label hidden w-fit sm:inline-flex">
                  <Orbit className="h-4 w-4" />
                  Creative systems for builders
                </div>
              </div>
              <h1 className="max-w-4xl font-mono text-3xl font-bold uppercase leading-tight tracking-[0.18em] text-white md:text-5xl">
                Rewriting how
                <span className="block text-addonline">
                  creators work.
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="mt-8 max-w-2xl space-y-4 text-base leading-7 text-muted-foreground md:text-lg">
                <p>Built to replace friction with control.</p>
                <p>
                  BlueTools is a growing suite of tools designed to streamline how you create. Less clutter. Faster execution. A workflow that scales with you.
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

          <FadeIn direction="up" delay={0.25} className="tech-frame mx-auto mt-16 max-w-5xl p-3 sm:p-4">
            <Link
              href="/plugins/octopie"
              aria-label="Open OctoPie plugin page"
              className="group relative grid overflow-hidden border border-cyan-200/10 bg-black/20 p-2 shadow-black/30 backdrop-blur-xl transition duration-300 hover:border-cyan-200/20 hover:bg-cyan-300/[0.025] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="flex flex-col justify-between border border-white/10 bg-[#080b12]/95 p-5 md:border-r-0">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-cyan-100/75">Featured add-on</p>
                  <h2 className="mt-3 font-mono text-2xl font-bold uppercase tracking-[0.12em] text-white">
                    <OctoPieLabel iconBoxClassName="h-10 w-10 " iconClassName="h-5 w-5" />
                  </h2>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    A customizable Blender pie menu system for Operator, Shortcut, Keyboard, Menu, Script, Asset, Macro, List, and nested Pie Menus.
                  </p>
                </div>
                <span className="mt-6 inline-flex w-fit items-center gap-2 border border-white/12 bg-black/40 px-4 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-cyan-200/34 hover:bg-cyan-300/10">
                  Open OctoPie
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="relative min-h-[260px] overflow-hidden border border-white/10 bg-[#0b0b0c]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${assetBasePath}/plugins/octopie/preview.gif`}
                  alt="OctoPie preview"
                  className="h-full w-full object-cover opacity-80 saturate-105 transition duration-500 group-hover:scale-[1.015] group-hover:opacity-92"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/24 via-transparent to-black/20" />
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="bat-grid border-y border-white/10 bg-black/30 py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-100">Smart Blender add-ons, built for flow</p>
              <h2 className="mt-4 font-mono text-2xl font-bold tracking-[0.08em] text-white md:text-4xl">
                Less clutter. More control.
                <span className="block">A faster way to create.</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                BlueTools builds smart Blender add-ons that reduce friction, speed up repetitive work, and change how creators move through production.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              [Workflow, "Workflow first", "Add-ons designed around real production habits, not bloated feature lists."],
              [Zap, "Built for speed", "Turn repetitive actions into cleaner, faster, more direct workflows."],
              [Sparkles, "Creator focused", "Tools that stay out of the way until the moment you need them."],
            ].map(([Icon, title, copy], index) => (
              <FadeIn key={String(title)} direction="up" delay={index * 0.1}>
                <Card hoverEffect className="h-full border-white/10 bg-black/28 p-7">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center  border border-cyan-200/20 bg-black/35 text-cyan-100 ">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-mono text-xl font-bold tracking-[0.04em] text-white">{title as string}</h3>
                  <p className="text-muted-foreground">{copy as string}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-80 max-w-4xl  bg-black/20" />
        <div className="absolute inset-x-0 top-16 -z-10 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-accent/45 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center  border border-cyan-200/20 bg-black/35 text-cyan-100 ">
              <OctoPieIcon className="h-8 w-8" />
            </span>
            <div className="mb-5 grid grid-cols-2 justify-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-flex h-10 w-32 items-center justify-center gap-2 border border-white/10 bg-black/28 px-3 py-2"><Gauge className="h-3.5 w-3.5 text-cyan-100" /> Fast</span>
              <span className="inline-flex h-10 w-32 items-center justify-center gap-2 border border-white/10 bg-black/28 px-3 py-2"><Sparkles className="h-3.5 w-3.5 text-cyan-100" /> Focused</span>
            </div>
            <h2 className="font-mono text-3xl font-bold tracking-[0.08em] md:text-5xl">Start with OctoPie.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
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
