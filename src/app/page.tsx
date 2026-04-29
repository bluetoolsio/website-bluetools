import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Command, Gauge, Orbit, Radar, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { OctoPieIcon, OctoPieLabel } from "@/components/brand/OctoPieLabel";

const assetBasePath = "/website-smartblender";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-36 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(110,168,255,0.20),transparent_34%),radial-gradient(circle_at_18%_30%,rgba(124,92,255,0.14),transparent_30%),linear-gradient(180deg,#070a12_0%,#05070d_58%,#03050a_100%)]" />
          <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-accent/20 bg-accent/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn direction="up">
              <div className="hud-label mx-auto mb-7 w-fit">
                <Orbit className="h-4 w-4" />
                Creative systems for builders
              </div>
              <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-[-0.065em] text-white md:text-7xl lg:text-8xl">
                Rewriting how
                <span className="block text-addonline">
                  creators work.
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="mx-auto mt-8 max-w-3xl space-y-4 text-lg leading-8 text-muted-foreground md:text-xl">
                <p>Built to replace friction with control.</p>
                <p>
                  Reploy is a growing suite of tools designed to streamline how you create. Less clutter. Faster execution. A workflow that scales with you.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
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

          <FadeIn direction="up" delay={0.25} className="mx-auto mt-16 max-w-4xl">
            <Link
              href="/plugins/octopie"
              aria-label="Open OctoPie plugin page"
              className="group relative grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/45 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.045] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="absolute -inset-px -z-10 rounded-[1.55rem] bg-gradient-to-br from-accent/14 via-transparent to-transparent opacity-70 blur-lg" />
              <div className="flex flex-col justify-between rounded-[1.2rem] border border-white/10 bg-[#080b12]/95 p-5 md:rounded-r-none md:border-r-0">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent/75">Featured add-on</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
                    <OctoPieLabel iconBoxClassName="h-10 w-10 rounded-xl" iconClassName="h-5 w-5" />
                  </h2>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    A customizable Blender pie menu system for Operator, Shortcut, Keyboard, Menu, Script, Asset, Macro, List, and nested Pie Menus.
                  </p>
                </div>
                <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-black/45 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent backdrop-blur">
                  Open OctoPie
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="relative min-h-[260px] overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#0b0b0c] md:rounded-l-none">
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
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Add-on friendly, not noisy</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
                Low light. High signal. Everything reachable.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Reploy keeps the interface quiet and the tools close: radial menus, scripts, shortcuts, assets, and repeatable profiles for real production work.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              [Command, "Command density", "Put the Blender actions you actually use behind one direct gesture."],
              [Radar, "Context radar", "Switch menus by editor, mode, profile, or the exact creative task in front of you."],
              [ShieldCheck, "Pipeline safe", "Export, back up, restore, and carry your setup between machines without drama."],
            ].map(([Icon, title, copy], index) => (
              <FadeIn key={String(title)} direction="up" delay={index * 0.1}>
                <Card hoverEffect className="h-full border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-7">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/15 text-accent shadow-lg shadow-accent/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{title as string}</h3>
                  <p className="text-muted-foreground">{copy as string}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-80 max-w-4xl rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-x-0 top-16 -z-10 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-accent/45 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-accent/15 text-accent shadow-lg shadow-accent/10">
              <OctoPieIcon className="h-8 w-8" />
            </span>
            <div className="mb-5 flex justify-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2"><Gauge className="h-3.5 w-3.5 text-accent" /> Fast</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2"><Sparkles className="h-3.5 w-3.5 text-accent" /> Focused</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">Start with OctoPie.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Build menus around the actions, assets, scripts, and macros you reach for every day — then reploy them wherever your workflow moves next.
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
