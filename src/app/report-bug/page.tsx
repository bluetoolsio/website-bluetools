"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Bug, Send } from "lucide-react";
import { useState } from "react";

export default function BugReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call or form submission for static site
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-20 -z-10 h-72 rounded-full bg-accent/10 blur-3xl" />
      <FadeIn direction="up">
        <div className="text-center mb-12">
          <div className="addon-glow mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
            <Bug className="h-8 w-8" />
          </div>
          <h1 className="mb-4 font-mono text-3xl font-bold uppercase tracking-[0.12em]">Report a <span className="text-addonline">Bug</span></h1>
          <p className="text-xl text-muted-foreground">
            Help us improve our plugins. Please provide as much detail as possible so we can reproduce and fix the issue.
          </p>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <Card className="night-card p-8">
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                <Send className="h-8 w-8" />
              </div>
              <h2 className="font-mono text-2xl font-bold tracking-[0.06em] mb-2">Report Submitted!</h2>
              <p className="text-muted-foreground mb-8">
                Thank you for your feedback. Our team will review the issue shortly.
              </p>
              <Button onClick={() => setIsSuccess(false)}>Submit Another Bug</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="plugin" className="text-sm font-medium text-white">Plugin</label>
                  <select 
                    id="plugin" 
                    className="h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  >
                    <option value="" disabled selected>Select a plugin</option>
                    <option value="octopie">OctoPie</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="version" className="text-sm font-medium text-white">Plugin Version</label>
                  <input 
                    type="text" 
                    id="version" 
                    placeholder="e.g. 1.2.0"
                    className="h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
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
                  className="h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-white">Description & Steps to Reproduce</label>
                <textarea 
                  id="description" 
                  rows={6}
                  placeholder="1. Open Blender&#10;2. Click on...&#10;3. The following error occurs..."
                  className="w-full resize-y rounded-lg border border-white/10 bg-black/35 p-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Attachments (Optional)</label>
                <div className="cursor-pointer rounded-xl border-2 border-dashed border-accent/20 bg-black/20 p-6 text-center transition-colors hover:bg-accent/5">
                  <p className="text-sm text-muted-foreground">
                    Drag and drop screenshots or log files here, or <span className="text-accent">browse</span>.
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
