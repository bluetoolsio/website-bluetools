import { FadeIn } from "@/components/animations/FadeIn";
import { OctoPieLabel } from "@/components/brand/OctoPieLabel";
import { OctoPieProfileSubmitter } from "@/components/community/OctoPieProfileSubmitter";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Submit OctoPie Profile | BlueTools",
  description: "Upload an OctoPie profile and create a prefilled community submission.",
};

export default function SubmitOctoPieProfilePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <FadeIn direction="up">
        <Link
          href="/community/octopie"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          OctoPie Community
        </Link>

        <div className="mb-10 max-w-3xl">
          <p className="hud-label mb-5">Submit Profile</p>
          <h1 className="font-mono text-4xl font-bold uppercase tracking-[0.08em] md:text-5xl">
            <OctoPieLabel iconBoxClassName="h-14 w-14" iconClassName="h-7 w-7" />
          </h1>
          <p className="section-copy mt-6 text-lg">
            Upload an exported profile and its manifest will prepare the submission.
          </p>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <OctoPieProfileSubmitter />
      </FadeIn>
    </div>
  );
}
