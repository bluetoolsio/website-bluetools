import Link from "next/link";
import { OctoPieLabel } from "@/components/brand/OctoPieLabel";
import { BlueToolsLogo } from "@/components/brand/BlueToolsLogo";

export default function Footer() {
  return (
    <footer className="border-t border-accent/10 bg-black/35 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center text-xl text-white">
              <BlueToolsLogo markClassName="h-8 w-8" wordClassName="text-xl" showTagline />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Electric-blue workflow add-ons for Blender menus, shortcuts, scripts, assets, and custom daily tools.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/plugins/octopie" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  <OctoPieLabel
                    className="gap-2"
                    iconBoxClassName="h-6 w-6 "
                    iconClassName="h-3.5 w-3.5"
                  />
                </Link>
              </li>
              <li>
                <Link href="/plugins" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  View All Plugins
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/report-bug" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Report a Bug
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BlueTools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
