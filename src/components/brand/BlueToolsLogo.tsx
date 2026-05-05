import Image from "next/image";
import { cn } from "@/lib/utils";

type BlueToolsLogoProps = {
  className?: string;
  logoClassName?: string;
  showTagline?: boolean;
};

export function BlueToolsLogo({
  className,
  logoClassName,
  showTagline = false,
}: BlueToolsLogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/brand/bluetools-logo.png"
        alt="BlueTools"
        width={2500}
        height={368}
        priority
        unoptimized
        className={cn("h-8 w-auto object-contain", logoClassName)}
      />
      {showTagline && (
        <span className="sr-only">Conveying creative control</span>
      )}
    </span>
  );
}
