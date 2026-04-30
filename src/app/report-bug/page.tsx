"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Bug, Check, ChevronDown, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const pluginOptions = [
  { value: "octopie", label: "OctoPie" },
];

export default function BugReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedPlugin, setSelectedPlugin] = useState("");
  const [isPluginOpen, setIsPluginOpen] = useState(false);
  const [pluginError, setPluginError] = useState(false);
  const pluginMenuRef = useRef<HTMLDivElement>(null);

  const selectedPluginLabel = pluginOptions.find((plugin) => plugin.value === selectedPlugin)?.label;

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!pluginMenuRef.current?.contains(event.target as Node)) {
        setIsPluginOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsPluginOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPlugin) {
      setPluginError(true);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call or form submission for static site
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <FadeIn direction="up">
        <div className="mb-12 text-center">
          <div className="addon-glow mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-[rgba(199,251,255,.16)] bg-black/28 text-cyan-100">
            <Bug className="h-8 w-8" />
          </div>
          <h1 className="mb-4 font-mono text-3xl font-bold uppercase tracking-[0.1em]">Report a <span className="text-addonline">Bug</span></h1>
          <p className="section-copy text-xl">
            Help us improve our plugins. Please provide as much detail as possible so we can reproduce and fix the issue.
          </p>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <Card className="night-card p-8">
          {isSuccess ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-green-300/20 bg-green-500/10 text-green-300">
                <Send className="h-8 w-8" />
              </div>
              <h2 className="mb-2 font-mono text-2xl font-bold uppercase tracking-[0.055em]">Report Submitted!</h2>
              <p className="section-copy mb-8">
                Thank you for your feedback. Our team will review the issue shortly.
              </p>
              <Button onClick={() => setIsSuccess(false)}>Submit Another Bug</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label id="plugin-label" className="text-sm font-medium text-white">Plugin</label>
                  <div ref={pluginMenuRef} className="relative">
                    <button
                      type="button"
                      aria-labelledby="plugin-label"
                      aria-haspopup="listbox"
                      aria-expanded={isPluginOpen}
                      onClick={() => {
                        setIsPluginOpen((current) => !current);
                        setPluginError(false);
                      }}
                      className={`flex h-10 w-full items-center justify-between border bg-black/32 px-3 text-left text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/60 ${
                        pluginError ? "border-red-300/60" : "border-[rgba(199,251,255,.12)] hover:border-cyan-200/24"
                      }`}
                    >
                      <span className={selectedPluginLabel ? "text-white" : "text-muted-foreground"}>
                        {selectedPluginLabel ?? "Select a plugin"}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-cyan-100 transition-transform ${isPluginOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isPluginOpen && (
                      <div
                        role="listbox"
                        aria-labelledby="plugin-label"
                        className="absolute left-0 top-[calc(100%+.5rem)] z-40 w-full border border-[rgba(199,251,255,.16)] bg-[rgba(3,8,14,.98)] p-1.5 shadow-[0_18px_45px_rgba(0,0,0,.4),inset_0_1px_0_rgba(255,255,255,.04)] backdrop-blur-xl"
                      >
                        {pluginOptions.map((plugin) => (
                          <button
                            key={plugin.value}
                            type="button"
                            role="option"
                            aria-selected={selectedPlugin === plugin.value}
                            onClick={() => {
                              setSelectedPlugin(plugin.value);
                              setPluginError(false);
                              setIsPluginOpen(false);
                            }}
                            className="flex h-11 w-full items-center justify-between border border-transparent px-3 text-left font-mono text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-cyan-200/18 hover:bg-cyan-300/8 hover:text-white"
                          >
                            <span>{plugin.label}</span>
                            {selectedPlugin === plugin.value && (
                              <Check className="h-4 w-4 text-cyan-100" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {pluginError && (
                    <p className="text-xs text-red-300">Select a plugin before submitting.</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="version" className="text-sm font-medium text-white">Plugin Version</label>
                  <input 
                    type="text" 
                    id="version" 
                    placeholder="e.g. 1.2.0"
                    className="h-10 w-full border border-[rgba(199,251,255,.12)] bg-black/32 px-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/60"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium text-white">Issue Title</label>
                <input 
                  type="text" 
                  id="title" 
                  placeholder="Brief summary of the issue"
                  className="h-10 w-full border border-[rgba(199,251,255,.12)] bg-black/32 px-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/60"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-white">Description & Steps to Reproduce</label>
                <textarea 
                  id="description" 
                  rows={6}
                  placeholder="1. Open Blender&#10;2. Click on...&#10;3. The following error occurs..."
                  className="w-full resize-y border border-[rgba(199,251,255,.12)] bg-black/32 p-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/60"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Attachments (Optional)</label>
                <div className="cursor-pointer border-2 border-dashed border-[rgba(199,251,255,.14)] bg-black/20 p-6 text-center transition-colors hover:bg-accent/5">
                  <p className="section-copy text-sm">
                    Drag and drop screenshots or log files here, or <span className="text-cyan-100">browse</span>.
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Bug Report"}
              </Button>
            </form>
          )}
        </Card>
      </FadeIn>
    </div>
  );
}
