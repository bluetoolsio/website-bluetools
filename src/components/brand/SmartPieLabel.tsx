import { cn } from "@/lib/utils";

interface SmartPieIconProps {
  className?: string;
}

function SmartPieIcon({ className }: SmartPieIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 434.89 638.58"
      className={cn("h-5 w-5", className)}
    >
      <path
        fill="currentColor"
        d="M185.68,47.68v188.49c0,15.35,12.49,27.84,27.84,27.84h176.46c-3.34,19.67-9.81,38.53-19.31,56.23-11.64,21.7-27.23,40.63-46.35,56.27-22.46,18.37-35.34,45.66-35.34,74.88,0,8.93-7.26,16.19-16.19,16.19h-132.23c-8.92,0-16.18-7.3-16.19-16.28-.01-14.48-3.22-28.5-9.53-41.69-6.16-12.83-15.27-24.43-26.34-33.53-31.09-25.59-52.52-58.84-61.96-96.16-8.81-34.84-7.16-71.83,4.77-106.97,11.93-35.14,33.15-65.49,61.36-87.76,26.5-20.93,58.41-33.75,93.01-37.5M199.87,25.65c-.08,0-.16,0-.23,0C10.19,32.07-71.29,271.76,75.16,392.29c8.86,7.29,15.91,16.33,20.75,26.41,4.82,10.07,7.45,21.17,7.46,32.62.02,20.57,16.62,37.26,37.19,37.26h132.23c20.54,0,37.19-16.65,37.19-37.19,0-22.68,10.07-44.26,27.63-58.62,42.08-34.41,70.34-85.06,75.26-142.39.34-3.97-2.84-7.37-6.82-7.37h-192.52c-3.78,0-6.84-3.06-6.84-6.84V32.5c0-3.78-3.06-6.85-6.81-6.85h0Z"
      />
      <line
        x1="126.46"
        y1="514.31"
        x2="286.64"
        y2="514.31"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="27"
      />
      <polyline
        points="286.63 562.31 281.74 562.31 131.35 562.31 126.46 562.31"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="27"
      />
      <path
        fill="currentColor"
        d="M276.82,591.27c-11.26,27.74-38.48,47.31-70.27,47.31s-59.02-19.57-70.28-47.31h140.55Z"
      />
      <path
        fill="currentColor"
        d="M434.89,206.11s0,.07,0,.11c.01,6.07-4.97,10.97-11.04,10.97h-184.88c-6.1,0-11.04-4.94-11.04-11.04V11.04c0-6.35,5.34-11.37,11.68-11.02,108.8,5.99,194.97,95.33,195.27,206.09Z"
      />
    </svg>
  );
}

interface SmartPieLabelProps {
  className?: string;
  iconBoxClassName?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function SmartPieLabel({
  className,
  iconBoxClassName,
  iconClassName,
  textClassName,
}: SmartPieLabelProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/20 text-accent",
          iconBoxClassName
        )}
      >
        <SmartPieIcon className={iconClassName} />
      </span>
      <span className={textClassName}>Smart Pie</span>
    </span>
  );
}
