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
          "blue-mark relative flex h-9 w-9 items-center justify-center border border-cyan-200/24 bg-black/35 text-cyan-100",
          markClassName
        )}
      >
        <span className="absolute inset-[5px] border border-white/12" />
        <span className="h-2 w-2 bg-cyan-200" />
      </span>
      <span className="leading-none">
        <span className={cn("block font-mono font-bold uppercase tracking-[0.10em] text-white", wordClassName)}>
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
