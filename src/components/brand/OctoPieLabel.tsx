import { cn } from "@/lib/utils";

const assetBasePath = "/website-smartblender";

interface OctoPieIconProps {
  className?: string;
}

export function OctoPieIcon({ className }: OctoPieIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("block h-5 w-5 bg-current", className)}
      style={{
        WebkitMask: `url(${assetBasePath}/octopie_icon.svg) center / contain no-repeat`,
        mask: `url(${assetBasePath}/octopie_icon.svg) center / contain no-repeat`,
      }}
    />
  );
}

interface OctoPieLabelProps {
  className?: string;
  iconBoxClassName?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function OctoPieLabel({
  className,
  iconBoxClassName,
  iconClassName,
  textClassName,
}: OctoPieLabelProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/20 text-accent",
          iconBoxClassName
        )}
      >
        <OctoPieIcon className={iconClassName} />
      </span>
      <span className={textClassName}>OctoPie</span>
    </span>
  );
}
