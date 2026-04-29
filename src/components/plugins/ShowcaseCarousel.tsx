"use client";

import { useEffect, useRef, useState } from "react";
import type { PluginShowcase } from "@/data/plugins";
import { cn } from "@/lib/utils";
import {
  ChartPie,
  CheckCircle2,
  Command,
  FileCode,
  Keyboard,
  List,
  Package,
  Power,
  SquareFunction,
  SquareMenu,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const showcaseIcons: Record<string, LucideIcon> = {
  Activate: Power,
  Operator: SquareFunction,
  Shortcut: Command,
  Keyboard,
  Menu: SquareMenu,
  Script: FileCode,
  Asset: Package,
  Macro: Workflow,
  List,
  "Pie Menu": ChartPie,
};

interface ShowcaseCarouselProps {
  items: PluginShowcase[];
  assetBasePath: string;
}

export function ShowcaseCarousel({ items, assetBasePath }: ShowcaseCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeItem = items[activeIndex] ?? items[0];
  const ActiveIcon = showcaseIcons[activeItem.title] ?? CheckCircle2;

  useEffect(() => {
    videoRef.current?.load();
    void videoRef.current?.play();
  }, [activeItem.media]);

  return (
    <div className="space-y-5">
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
        <div className="relative aspect-video overflow-hidden bg-black">
          <video
            ref={videoRef}
            key={activeItem.media}
            aria-label={`${activeItem.title} showcase`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          >
            <source src={`${assetBasePath}${activeItem.media}`} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 pt-16 sm:p-6 sm:pt-24">
            <div className="flex items-end gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/20 text-accent backdrop-blur">
                <ActiveIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-2xl font-black text-white sm:text-3xl">{activeItem.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-[#05070d] to-transparent sm:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-4 bg-gradient-to-l from-[#05070d] to-transparent sm:hidden" />
        <div
          aria-label="Choose showcase step"
          className="scrollbar-hidden -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
        >
          {items.map((item, index) => {
            const Icon = showcaseIcons[item.title] ?? CheckCircle2;
            const isActive = index === activeIndex;

            return (
              <button
                key={item.media}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group flex min-w-44 snap-start items-center gap-3 rounded-xl border p-3 text-left transition sm:min-w-48",
                  isActive
                    ? "border-accent/55 bg-accent/15 text-white shadow-lg shadow-accent/10"
                    : "border-white/10 bg-white/[0.035] text-muted-foreground hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                )}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition",
                    isActive
                      ? "border-accent/35 bg-accent/20 text-accent"
                      : "border-white/10 bg-white/[0.04] text-muted-foreground group-hover:text-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold">{item.title}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
