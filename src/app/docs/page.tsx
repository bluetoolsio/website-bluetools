import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = {
  title: "Documentation | Smartblender.io",
  description: "Learn how to install and use our premium Blender plugins.",
};

export default function DocsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-24">
          <h2 className="font-bold text-lg mb-4">Documentation</h2>
          <nav className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Getting Started</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-accent font-medium block border-l-2 border-accent pl-3 -ml-[2px]">Installation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors block border-l-2 border-transparent pl-3 -ml-[2px]">Authentication</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors block border-l-2 border-transparent pl-3 -ml-[2px]">Basic Usage</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Smart Pie</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors block border-l-2 border-transparent pl-3 -ml-[2px]">Configuration</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors block border-l-2 border-transparent pl-3 -ml-[2px]">Adding Custom Tools</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-white transition-colors block border-l-2 border-transparent pl-3 -ml-[2px]">Keyboard Shortcuts</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0">
        <FadeIn direction="up">
          <div className="prose prose-invert max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Installation Guide</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Welcome to the Smartblender documentation. This guide will walk you through installing our plugins in Blender 4.0+.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Prerequisites</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
              <li>Blender version 4.0 or higher installed.</li>
              <li>A downloaded `.zip` file from your purchase email.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Step-by-Step Installation</h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">1</div>
                <div>
                  <h3 className="text-white font-medium mb-1">Open Preferences</h3>
                  <p>In Blender, go to `Edit` {'>'} `Preferences`.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">2</div>
                <div>
                  <h3 className="text-white font-medium mb-1">Install Add-on</h3>
                  <p>Navigate to the `Add-ons` tab on the left sidebar and click the `Install...` button at the top right.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">3</div>
                <div>
                  <h3 className="text-white font-medium mb-1">Select the ZIP file</h3>
                  <p>Locate the downloaded `.zip` file on your computer and select it. Do not extract the zip file manually.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-white font-medium mb-1">Enable the Plugin</h3>
                  <p>Check the box next to the newly installed plugin to enable it. You are now ready to go!</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-xl">
              <h3 className="text-white font-semibold flex items-center gap-2 mb-2">
                Need Help?
              </h3>
              <p className="text-muted-foreground text-sm mb-0">
                If you encounter any issues during installation, please <a href="/report-bug" className="text-accent hover:underline">report a bug</a> or contact support.
              </p>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
