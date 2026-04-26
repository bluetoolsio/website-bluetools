import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Boxes, Command, Moon, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { OctoPieLabel } from "@/components/brand/OctoPieLabel";

const assetBasePath = "/website-smartblender";

const workflowStats = [
  ["01", "Context-first menus"],
  ["08", "Radial slots per pie"],
  ["∞", "Profiles for every scene"],
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-40 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,32,70,0.26),transparent_34%),radial-gradient(circle_at_15%_28%,rgba(185,28,28,0.18),transparent_28%),linear-gradient(180deg,#09080d_0%,#050407_58%,#030203_100%)]" />
          <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-accent/20 bg-accent/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <FadeIn direction="up">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-accent shadow-lg shadow-accent/10">
                <Moon className="h-4 w-4" />
OctoPie for Blender workflows
              </div>
              <h1 className="max-w-5xl text-5xl font-black tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
                Build custom Blender pie menus for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-accent to-red-700">
                  faster work.
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                OctoPie lets Blender artists create context-aware radial menus for operators, shortcuts, scripts, assets, macros, and profiles — keeping the tools you use most right at your cursor.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/plugins/octopie">
                <Button size="lg" className="w-full sm:w-auto">
                  View OctoPie
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

          <FadeIn direction="left" delay={0.15}>
            <Link
              href="/plugins/octopie"
              aria-label="Open OctoPie plugin page"
              className="group relative block rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/60 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="absolute -inset-1 -z-10 rounded-[2.2rem] bg-gradient-to-br from-accent/35 via-transparent to-red-950/50 blur-xl" />
              <div className="rounded-[1.5rem] border border-white/10 bg-[#08070b] p-5">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-accent">Featured tool</p>
                    <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                      <OctoPieLabel iconBoxClassName="h-11 w-11" iconClassName="h-6 w-6" />
                    </h2>
                  </div>
                  <Sparkles className="h-7 w-7 text-accent transition duration-300 group-hover:scale-110 group-hover:rotate-6" />
                </div>
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${assetBasePath}/plugins/octopie/preview-animated.svg`}
                    alt="Animated OctoPie preview"
                    className="h-full w-full object-cover opacity-85 saturate-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-black/55 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                    Open OctoPie
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {workflowStats.map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 group-hover:border-accent/20 group-hover:bg-white/[0.06]">
                      <div className="text-2xl font-black text-accent">{value}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Built for focus</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
                A red-lit command layer for Blender.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Reploy keeps the interface quiet and the tools close: radial menus, scripts, shortcuts, assets, and repeatable profiles for real production work.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              [Command, "Fewer detours", "Put the Blender actions you actually use behind one direct gesture."],
              [Workflow, "Context aware", "Switch menus by editor, mode, profile, or the exact creative task in front of you."],
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
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <Boxes className="mx-auto mb-6 h-10 w-10 text-accent" />
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
