import Link from "next/link";
import { ArrowRight, Bug } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";

const bugReportOptions = [
  {
    name: "OctoPie",
    href: "/bugs/octopie",
    description: "Report an issue with OctoPie for Blender.",
  },
];

export default function BugReportPage() {
  return (
    <div className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <FadeIn direction="up">
        <div className="mb-12 text-center">
          <div className="addon-glow mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-[rgba(199,251,255,.16)] bg-black/28 text-cyan-100">
            <Bug className="h-8 w-8" />
          </div>
          <h1 className="mb-4 font-mono text-3xl font-bold uppercase tracking-[0.1em]">
            Report a <span className="text-addonline">Bug</span>
          </h1>
          <p className="section-copy text-xl">
            Choose the plugin you need help with. We’ll send you to the right bug report form.
          </p>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <Card className="night-card p-8">
          <div className="space-y-4">
            {bugReportOptions.map((option) => (
              <Link
                key={option.name}
                href={option.href}
                className="group flex w-full items-center justify-between border border-[rgba(199,251,255,.14)] bg-black/30 p-5 text-left transition-colors hover:border-cyan-200/28 hover:bg-cyan-300/8"
              >
                <span>
                  <span className="block font-mono text-lg font-bold uppercase tracking-[0.12em] text-white">
                    {option.name}
                  </span>
                  <span className="mt-2 block text-sm text-muted-foreground">
                    {option.description}
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 text-cyan-100 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}
