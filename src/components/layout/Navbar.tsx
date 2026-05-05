"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BlueToolsLogo } from "@/components/brand/BlueToolsLogo";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-accent/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="group inline-flex items-center text-xl text-white">
              <BlueToolsLogo logoClassName="h-9" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/plugins" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-white">Plugins</Link>
              <Link href="/docs" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-white">Docs</Link>
              <Link href="/report-bug" className=" border border-cyan-200/18 bg-black/30 px-3 py-1.5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-black/35 hover:text-white">Report Bug</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2  text-muted-foreground hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/plugins" onClick={() => setIsOpen(false)} className="block px-3 py-2  text-base font-medium hover:bg-black/28">Plugins</Link>
            <Link href="/docs" onClick={() => setIsOpen(false)} className="block px-3 py-2  text-base font-medium hover:bg-black/28">Docs</Link>
            <Link href="/report-bug" onClick={() => setIsOpen(false)} className="block px-3 py-2  text-base font-medium hover:bg-black/28">Report Bug</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
