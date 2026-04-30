import { cn } from "@/lib/utils";

type BlueToolsLogoProps = {
  className?: string;
  markClassName?: string;
  wordClassName?: string;
  showTagline?: boolean;
};

export function BlueToolsLogo({
  className,
  markClassName,
  wordClassName,
  showTagline = false,
}: BlueToolsLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "blue-mark relative flex h-9 w-9 items-center justify-center rounded-[0.95rem] border border-cyan-200/35 bg-cyan-300/10 shadow-[0_0_34px_rgba(0,174,255,.52)]",
          markClassName
        )}
      >
        <span className="absolute inset-[5px] rounded-[0.72rem] border border-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(94,234,255,.95)]" />
      </span>
      <span className="leading-none">
        <span className={cn("block font-black tracking-[-0.055em] text-white", wordClassName)}>
          Blue<span className="text-electric">Tools</span>
        </span>
        {showTagline && (
          <span className="mt-1 block text-[0.56rem] font-bold uppercase tracking-[0.28em] text-cyan-100/70">
            Conveying creative control
          </span>
        )}
      </span>
    </span>
  );
}
