"use client";

import { Button } from "@/components/ui/Button";
import { ChevronDown, FileText, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface PluginPurchaseActionsProps {
  docsHref: string;
  purchaseLinks: {
    superhive: string;
    gumroad: string;
  };
}

function SuperhiveIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1920 1080" className="h-6 w-6">
      <path
        fill="currentColor"
        d="M987.49,526.61c68.99,74.6,113.93,206.77,41.23,294.08-21.71,26.08-65.99,51.78-100.31,53.65-43.66,2.38-3.06-33.55,4.85-44.48,105.65-146.05-136.97-380.25-275.28-268.6-11.27,9.1-18.62,31.4-36.18,18.76-11.87-8.54.7-43.8,5.4-56.22,60.95-161.18,269.09-95.82,360.3,2.82Z"
      />
      <path
        fill="currentColor"
        d="M1232.51,621.64c32.63,32.09,116.1,104.18,129.77,143.26,59.92,171.28-200.32,223.38-222.19,55.43-8.69-66.73-7.93-156.41-10.29-225.27-.95-27.78,19.42-45.27,45.01-31.76,15.81,8.35,43.27,44.16,57.71,58.35Z"
      />
      <path
        fill="currentColor"
        d="M664.84,126.56c34.18-5.37,69.88,5.09,97.23,25.45l169.94,170.1c18.85,51.85-41.61,43.26-75.17,42.5-49.9-1.13-110.73-2.92-160.04-6.71-165.96-12.78-156.14-211.82-31.95-231.33Z"
      />
      <path
        fill="currentColor"
        d="M697.67,630.26c57.56-6.84,120.72,37.75,146.36,87.21,74.47,143.63-94.53,206.17-188.08,89.98-48.06-59.69-51.58-166.1,41.71-177.2Z"
      />
      <path
        fill="currentColor"
        d="M1068.34,524.19c-14.1-28.87-39.72-56.84-64.29-77.9-9.7-8.31-38.9-20.13-37.07-33.61,1.31-3.42,2.94-8.79,6.08-10.62,3.46-2.01,62.05-11.12,70.16-11.55,76.35-4.03,61.1,58.44,49.9,112.01-3.28,15.68-5.21,25.59-24.78,21.66Z"
      />
    </svg>
  );
}

function GumroadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M256,37c29.58,0,58.26,5.79,85.23,17.2,26.07,11.03,49.5,26.82,69.62,46.95s35.92,43.55,46.95,69.62c11.41,26.98,17.2,55.66,17.2,85.23s-5.79,58.26-17.2,85.23c-11.03,26.07-26.82,49.5-46.95,69.62-20.12,20.12-43.55,35.92-69.62,46.95-26.98,11.41-55.66,17.2-85.23,17.2-29.58,0-58.26-5.79-85.23-17.2-26.07-11.03-49.5-26.82-69.62-46.95-20.12-20.12-35.92-43.55-46.95-69.62-11.41-26.98-17.2-55.66-17.2-85.23s5.79-58.26,17.2-85.23c11.03-26.07,26.82-49.5,46.95-69.62s43.55-35.92,69.62-46.95c26.98-11.41,55.66-17.2,85.23-17.2M256,6C117.93,6,6,117.93,6,256s111.93,250,250,250h0c138.07,0,250-111.93,250-250S394.07,6,256,6h0Z"
      />
      <path
        fill="currentColor"
        d="M234.3,381.99c-73.23,0-116.31-58.73-116.31-131.8s47.39-137.53,137.85-137.53,124.92,63.04,126.36,98.85h-67.49c-1.43-20.05-18.67-50.14-60.31-50.14-44.51,0-73.24,38.68-73.24,85.96s28.72,85.96,73.24,85.96c40.21,0,57.44-31.52,64.61-63.04h-64.61v-25.78h135.59v131.81h-59.49v-83.1c-4.31,30.08-22.98,88.82-96.21,88.82h0Z"
      />
    </svg>
  );
}

export function PluginPurchaseActions({
  docsHref,
  purchaseLinks,
}: PluginPurchaseActionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div ref={menuRef} className="relative w-full sm:w-44">
        <Button
          type="button"
          size="lg"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="w-full gap-2.5"
        >
          <ShoppingCart className="h-5 w-5 text-cyan-100" />
          Buy
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </Button>

        {isOpen && (
          <div
            role="menu"
            className="absolute left-0 top-[calc(100%+.5rem)] z-40 w-full border border-[rgba(199,251,255,.16)] bg-[rgba(3,8,14,.96)] p-1.5 shadow-[0_18px_45px_rgba(0,0,0,.38),inset_0_1px_0_rgba(255,255,255,.04)] backdrop-blur-xl"
          >
            <a
              role="menuitem"
              href={purchaseLinks.superhive}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-3 border border-transparent px-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-cyan-200/18 hover:bg-cyan-300/8 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex h-7 w-7 items-center justify-center border border-[rgba(199,251,255,.14)] bg-black/28 text-cyan-100">
                <SuperhiveIcon />
              </span>
              Superhive
            </a>
            <a
              role="menuitem"
              href={purchaseLinks.gumroad}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-3 border border-transparent px-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-cyan-200/18 hover:bg-cyan-300/8 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex h-7 w-7 items-center justify-center border border-[rgba(199,251,255,.14)] bg-black/28 text-cyan-100">
                <GumroadIcon />
              </span>
              Gumroad
            </a>
          </div>
        )}
      </div>

      <Link href={docsHref} className="w-full sm:w-44">
        <Button variant="outline" size="lg" className="w-full gap-2.5">
          <FileText className="h-5 w-5 text-cyan-100" />
          Docs
        </Button>
      </Link>
    </div>
  );
}
