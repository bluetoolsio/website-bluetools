import { FadeIn } from "@/components/animations/FadeIn";
import { SmartPieLabel } from "@/components/brand/SmartPieLabel";

const navGroups = [
  {
    title: "Getting Started",
    links: [
      ["overview", "Overview"],
      ["installation", "Installation"],
      ["first-pie", "First Pie"],
    ],
  },
  {
    title: "Smart Pie",
    links: [
      ["contexts", "Editors & Contexts"],
      ["profiles", "Profiles"],
      ["slots", "Slots"],
      ["modules", "Modules"],
      ["shortcuts", "Shortcuts"],
      ["assets-scripts", "Assets & Scripts"],
      ["storage", "Storage"],
    ],
  },
];

const actionModules = [
  ["Operator", "Runs a Blender operator. Operators can run as Static, using EXEC_DEFAULT, or Dynamic, using INVOKE_DEFAULT."],
  ["Shortcut", "Finds the matching Blender keymap item and runs that shortcut from the current editor context."],
  ["Menu", "Opens a Blender menu. Menus can be attached to the slot or opened as a detached pie-style menu."],
  ["Script", "Runs a Python script stored in Smart Pie&apos;s scripts folder with access to bpy and context."],
  ["Asset", "Imports a configured Blender asset by append, append reuse, or link. In the 3D View, assets can be placed interactively on surfaces."],
  ["Macro", "Runs a sequence of operator, shortcut, script, or asset steps."],
  ["List", "Creates a nested list menu. List entries can contain operators, shortcuts, menus, scripts, assets, macros, lists, or pie menus."],
  ["Pie Menu", "Creates a nested eight-slice pie, or binds to another Smart Pie profile so an entire profile can be reused as a submenu."],
];

const supportedEditors = [
  "3D View",
  "Node Editor",
  "UV/Image Editor",
  "Video Sequencer",
  "Movie Clip",
  "Dope Sheet",
  "Graph Editor",
  "NLA Editor",
  "Text Editor",
  "Outliner",
  "Properties",
  "File Browser",
  "Spreadsheet",
];

export const metadata = {
  title: "Smart Pie Documentation | Smartblender.io",
  description: "Learn how Smart Pie works in Blender.",
};

export default function DocsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-24">
          <h2 className="font-bold text-lg mb-4">Documentation</h2>
          <nav className="space-y-6">
            {navGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {group.title === "Smart Pie" ? (
                    <SmartPieLabel
                      className="gap-2"
                      iconBoxClassName="h-6 w-6 rounded-md"
                      iconClassName="h-3.5 w-3.5"
                      textClassName="normal-case"
                    />
                  ) : (
                    group.title
                  )}
                </h3>
                <ul className="space-y-2">
                  {group.links.map(([href, label], index) => (
                    <li key={href}>
                      <a
                        href={`#${href}`}
                        className={
                          index === 0 && group.title === "Getting Started"
                            ? "text-accent font-medium block border-l-2 border-accent pl-3 -ml-[2px]"
                            : "text-muted-foreground hover:text-white transition-colors block border-l-2 border-transparent pl-3 -ml-[2px]"
                        }
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <FadeIn direction="up">
          <div className="prose prose-invert max-w-4xl">
            <section id="overview">
              <h1 className="text-4xl font-bold mb-6">Smart Pie Documentation</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Smart Pie is a Blender add-on that lets you build context-aware pie menus for the editors you use most. Each pie has eight directional slots, and each slot can run a Blender operator, replay a shortcut, open a menu, run a script, place an asset, execute a macro, or open another list or pie.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose mb-10">
                <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-muted-foreground mb-2">Pies per editor</p>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-muted-foreground mb-2">Slots per pie</p>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-muted-foreground mb-2">Minimum Blender</p>
                  <p className="text-3xl font-bold">5.0</p>
                </div>
              </div>
            </section>

            <section id="installation">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Installation</h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Open Blender Preferences.</li>
                <li>Go to Add-ons and install the Smart Pie zip file.</li>
                <li>Enable Smart Pie. The add-on appears in the N-panel under the Smart Pie tab.</li>
                <li>Open Preferences for the add-on if you want to enable Smart Pie panels in editors beyond the 3D View.</li>
              </ol>
            </section>

            <section id="first-pie">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Create Your First Pie</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">1</div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Choose a pie number</h3>
                    <p>Select Pie 1 through Pie 8 in the Smart Pie panel. Each number is a separate radial menu for the current editor.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">2</div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Assign a shortcut</h3>
                    <p>Click the shortcut field and press the key you want to use. Smart Pie stores one keymap entry per pie and syncs the binding across supported editors.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">3</div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Add slots</h3>
                    <p>Add up to eight slots. Slots are ordered North, South, East, West, North-East, North-West, South-East, and South-West.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Pick a module</h3>
                    <p>Set each slot&apos;s module and target. The label and icon can be manual, or Smart Pie can infer them from the chosen operator, shortcut, script, or asset.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="contexts">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Editors & Contexts</h2>
              <p className="text-muted-foreground mb-4">
                Smart Pie keeps separate configuration buckets per Blender editor. In editors with meaningful modes, Auto Context selects the right context automatically, such as Object, Edit, Sculpt, Shader, Geometry Nodes, UV, Paint, Action, Drivers, or Outliner display modes. Global is the fallback context.
              </p>
              <div className="not-prose flex flex-wrap gap-2 mb-8">
                {supportedEditors.map((editor) => (
                  <span key={editor} className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-muted-foreground">
                    {editor}
                  </span>
                ))}
              </div>
            </section>

            <section id="profiles">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Profiles</h2>
              <p className="text-muted-foreground mb-4">
                A profile is the set of slots used by a pie in one context. Every context can have multiple profiles, and every pie number can point at a different active profile. This lets the same shortcut open different tools depending on the editor and mode.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Profiles can be added, renamed, copied, imported, exported, reset, locked, or deleted.</li>
                <li>Locked profiles cannot be edited until unlocked.</li>
                <li>The special None profile represents an empty default state.</li>
                <li>Pie Menu slots can bind to another profile, so one pie can open another reusable profile as a nested pie.</li>
              </ul>
            </section>

            <section id="slots">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Slots</h2>
              <p className="text-muted-foreground mb-4">
                Each pie contains up to eight slots. Slots can be enabled, disabled, locked, collapsed, reordered, named, and assigned an icon. Runtime drawing follows the same directional layout everywhere, so a North slot in the editor remains the North item when the pie opens.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Slot labels can be typed manually or resolved from the module target.</li>
                <li>Icons can use Blender built-in icons, Lucide icons, local PNG icons, or simple text fallbacks.</li>
                <li>Operator and asset slots support Static or Dynamic behavior. Static executes immediately; Dynamic invokes Blender&apos;s interactive operator mode.</li>
                <li>Menu and List slots support Attached or Detached behavior. Attached opens from the button; Detached opens as its own pie-style menu.</li>
              </ul>
            </section>

            <section id="modules">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Modules</h2>
              <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {actionModules.map(([name, description]) => (
                  <div key={name} className="rounded-lg border border-white/10 bg-white/5 p-5">
                    <h3 className="text-white font-semibold mb-2">{name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                ))}
              </div>
            </section>

            <section id="shortcuts">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Shortcuts</h2>
              <p className="text-muted-foreground mb-4">
                Smart Pie uses two kinds of shortcuts. Pie shortcuts open one of the eight main pies. Shortcut modules replay an existing Blender keymap entry from inside a slot, list item, macro step, or nested pie step.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Click a pie shortcut to record a key. Press Esc to cancel recording.</li>
                <li>Reset removes the binding and shows Set Shortcut again.</li>
                <li>Shortcut modules can be recorded directly or selected from the visual keyboard picker.</li>
                <li>Live Preview is available in the 3D View and Node Editor when the current pie has an active keymap binding.</li>
              </ul>
            </section>

            <section id="assets-scripts">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Assets & Scripts</h2>
              <p className="text-muted-foreground mb-4">
                Asset slots store a library reference, blend file path, asset type, asset name, import method, and run behavior. Smart Pie can append, append while reusing existing local data, or link from the source file. In the 3D View, imported object assets can enter interactive placement with surface snapping.
              </p>
              <p className="text-muted-foreground mb-4">
                Script slots create or import Python files into Smart Pie&apos;s scripts folder. Scripts execute inside Blender with `bpy` and `context` available.
              </p>
              <div className="mt-6 p-6 bg-accent/10 border border-accent/20 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Script Safety</h3>
                <p className="text-muted-foreground text-sm mb-0">
                  Smart Pie scripts are not sandboxed. Only run scripts you wrote yourself or fully trust.
                </p>
              </div>
            </section>

            <section id="storage">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Storage, Backup & Reset</h2>
              <p className="text-muted-foreground mb-4">
                Smart Pie stores settings in Blender&apos;s user config folder under `SmartPie/settings.json`. Scripts live in `SmartPie/scripts`, icon data lives in `SmartPie/icons`, and backups live in `SmartPie/backups`.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Changes are saved automatically after a short debounce.</li>
                <li>The add-on preferences include Export Settings, Import Settings, Backup, and Factory Reset.</li>
                <li>Keymaps are saved with the Smart Pie settings and reapplied when the add-on loads.</li>
                <li>Current architecture stores one shared Smart Pie setup per Blender session, based on the first scene in the file.</li>
              </ul>
            </section>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
