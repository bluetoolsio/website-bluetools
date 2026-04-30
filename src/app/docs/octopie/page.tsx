import { FadeIn } from "@/components/animations/FadeIn";
import { OctoPieLabel } from "@/components/brand/OctoPieLabel";

const navGroups = [
  {
    title: "Getting Started",
    links: [
      ["overview", "Overview"],
      ["installation", "Installation"],
      ["interface", "Interface"],
      ["first-pie", "First Pie"],
    ],
  },
  {
    title: "OctoPie",
    links: [
      ["concepts", "Core Concepts"],
      ["contexts", "Editors & Contexts"],
      ["profiles", "Profiles"],
      ["slots", "Slots"],
      ["modules", "Modules"],
      ["shortcuts", "Shortcuts"],
      ["assets-scripts", "Assets & Scripts"],
    ],
  },
  {
    title: "Workflow",
    links: [
      ["advanced", "Advanced"],
      ["tips", "Tips"],
      ["troubleshooting", "Troubleshooting"],
      ["quick-reference", "Quick Reference"],
    ],
  },
];

const supportedEditors = [
  "3D View",
  "Node Editor",
  "Image Editor",
  "Sequence Editor",
  "Clip Editor",
  "Dope Sheet",
  "Graph Editor",
  "NLA Editor",
  "Text Editor",
  "Outliner",
  "Properties",
  "File Browser",
  "Spreadsheet",
];

const actionModules = [
  ["None", "Leaves a direction unused."],
  ["Operator", "Runs a Blender operator directly, with optional properties and static or dynamic execution."],
  ["Menu", "Opens a built-in Blender menu, attached to the slot or as a detached pie-style menu."],
  ["Shortcut", "Replays an existing Blender keymap entry from inside a slot, list item, macro step, or nested pie."],
  ["Script", "Runs a Python script stored in OctoPie's scripts folder with bpy and context available."],
  ["Asset", "Appends, appends with reuse, or links an Asset Browser item from a configured library."],
  ["Macro", "Runs multiple operator, shortcut, script, or asset steps in sequence."],
  ["List", "Opens a custom list menu containing operators, menus, shortcuts, scripts, assets, macros, lists, or pies."],
  ["Pie Menu", "Opens another eight-slice pie, or binds to another OctoPie profile as a reusable nested pie."],
];

const slotPositions = [
  ["1", "North", "Top"],
  ["2", "South", "Bottom"],
  ["3", "East", "Right"],
  ["4", "West", "Left"],
  ["5", "North-East", "Top-Right"],
  ["6", "North-West", "Top-Left"],
  ["7", "South-East", "Bottom-Right"],
  ["8", "South-West", "Bottom-Left"],
];

const quickGuide = [
  ["Run one Blender command", "Operator"],
  ["Expose a Blender submenu", "Menu"],
  ["Trigger a known shortcut", "Shortcut"],
  ["Run your own Python tool", "Script"],
  ["Chain several actions", "Macro"],
  ["Open a custom item list", "List"],
  ["Open another radial menu", "Pie Menu"],
  ["Load something from Asset Browser", "Asset"],
];

const clickBehaviors = [
  ["Pie selector", "Ctrl+Click", "Toggle pie on or off"],
  ["Move button", "Ctrl+Click", "Duplicate slot"],
  ["Move button", "Alt+Click", "Copy slot to profile"],
  ["Remove button", "Ctrl+Click", "Delete slot"],
  ["Shortcut recorder", "Double-click", "Open keyboard picker"],
  ["Operator picker", "Ctrl+Click", "Paste from Info"],
  ["Operator picker", "Alt+Click", "Toggle Info editor"],
];

const troubleshooting = [
  ["The slot editor does not appear", "The selected pie has no shortcut assigned.", "Assign a shortcut first, then add slots."],
  ["The panel is missing in an editor", "That editor is disabled in OctoPie preferences.", "Open Preferences > Add-ons > OctoPie > Editors & Behaviors and enable the editor."],
  ["The wrong profile opens", "The active profile, context, or Global override is different from what you expect.", "Check the current editor, current context, Global override state, and active profile."],
  ["A slot does nothing", "The slot is disabled, incomplete, or pointing at a missing target.", "Check that the slot is enabled, configured, and saved in the profile you are using."],
  ["A script or asset is not working", "The target script or asset cannot be found.", "Verify that the script exists in the scripts folder, or that the asset is selected and its import method is valid."],
];

export const metadata = {
  title: "OctoPie Documentation | BlueTools",
  description: "Learn how OctoPie works in Blender.",
};

function ReferenceTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="not-prose mb-8 overflow-x-auto border border-[rgba(199,251,255,.12)]">
      <table className="w-full text-left text-sm">
        <thead className="bg-black/24 text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {rows.map((row) => (
            <tr key={row.join("-")} className="text-muted-foreground">
              {row.map((cell) => (
                <td key={cell} className="px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DocsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 md:flex-row lg:px-8">
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-24">
          <h2 className="font-bold text-lg mb-4">Documentation</h2>
          <nav className="space-y-6">
            {navGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {group.title === "OctoPie" ? (
                    <OctoPieLabel
                      className="gap-2"
                      iconBoxClassName="h-6 w-6 "
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
                            ? "text-cyan-100 font-medium block border-l-2 border-accent pl-3 -ml-[2px]"
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
              <h1 className="text-4xl font-bold mb-6">OctoPie Documentation</h1>
              <p className="text-lg text-muted-foreground mb-8">
                OctoPie is a Blender add-on for building fast, customized pie menus from the N-panel. You configure slots, profiles, contexts, scripts, assets, and shortcuts in the sidebar, then launch the finished pie at your cursor with a keyboard shortcut.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose mb-10">
                <div className="night-card p-5">
                  <p className="text-sm text-muted-foreground mb-2">Pies per editor</p>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <div className="night-card p-5">
                  <p className="text-sm text-muted-foreground mb-2">Slots per pie</p>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <div className="night-card p-5">
                  <p className="text-sm text-muted-foreground mb-2">Guide updated</p>
                  <p className="text-3xl font-bold">Apr 24</p>
                </div>
              </div>
              <div className="not-prose  border border-cyan-200/18 bg-black/30 p-5 mb-10">
                <h2 className="text-white font-semibold mb-2">Core idea</h2>
                <p className="text-sm text-muted-foreground mb-0">
                  The pie menu is your runtime launcher. All setup and editing happens in the N-panel.
                </p>
              </div>
            </section>

            <section id="installation">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Installation & Setup</h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Download the OctoPie add-on zip or repository.</li>
                <li>Install it from Blender Preferences &gt; Add-ons, or copy the OctoPie folder into Blender&apos;s add-ons directory.</li>
                <li>Search for OctoPie and enable the add-on.</li>
                <li>Open Edit &gt; Preferences &gt; Add-ons &gt; OctoPie and enable the editors where you want the panel to appear.</li>
                <li>In a supported editor, press <code>N</code> if the sidebar is hidden and open the OctoPie tab.</li>
              </ol>
              <p className="text-muted-foreground mb-4">
                The 3D View and Node Editor are enabled by default. Other editors can be toggled in Preferences under Editors & Behaviors.
              </p>
            </section>

            <section id="interface">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Understanding the Interface</h2>
              <p className="text-muted-foreground mb-4">
                The N-panel is split into a header area, a context and profile area, and the slot editor. This keeps editing separate from the runtime pie, so the pie itself stays quick and uncluttered.
              </p>
              <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="night-card p-5">
                  <h3 className="text-white font-semibold mb-2">Header</h3>
                  <p className="text-sm text-muted-foreground">Preferences, pie selector, shortcut button, and live preview toggle.</p>
                </div>
                <div className="night-card p-5">
                  <h3 className="text-white font-semibold mb-2">Context & Profile</h3>
                  <p className="text-sm text-muted-foreground">Resolved context, Global override, active profile, and profile actions.</p>
                </div>
                <div className="night-card p-5">
                  <h3 className="text-white font-semibold mb-2">Slots</h3>
                  <p className="text-sm text-muted-foreground">Add, expand, move, lock, remove, name, icon, and configure each slot.</p>
                </div>
              </div>
            </section>

            <section id="first-pie">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Create Your First Pie</h2>
              <div className="space-y-6 text-muted-foreground">
                {[
                  ["Choose a pie number", "Select Pie 1 through Pie 8 in the OctoPie panel. Each number is a separate radial menu for the current editor."],
                  ["Assign a shortcut first", "Click the shortcut button, press the key combination you want, and make sure the pie has a real launcher before adding slots."],
                  ["Choose your context", "Use Auto Context, Global override, or a manual context depending on whether the pie should change by mode."],
                  ["Select or create a profile", "Create a descriptive profile such as Modeling, Edit Mesh, Shader Tools, or UV Workflow."],
                  ["Add slots and test", "Add up to eight slots, set each module and target, then press the shortcut in Blender to test the pie at your cursor."],
                ].map(([title, body], index) => (
                  <div key={title} className="flex gap-4">
                    <div className={index === 4 ? "flex-shrink-0 w-8 h-8  bg-accent text-cyan-100-foreground flex items-center justify-center font-bold" : "flex-shrink-0 w-8 h-8  bg-white/10 flex items-center justify-center font-bold text-white"}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{title}</h3>
                      <p>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="concepts">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Core Concepts</h2>
              <p className="text-muted-foreground mb-4">
                Every OctoPie setup is resolved through three layers: the Blender editor, the current context inside that editor, and the active profile for the pie.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li><strong className="text-white">Editor:</strong> where the pie operates, such as 3D View, Node Editor, Image Editor, or Sequencer.</li>
                <li><strong className="text-white">Context:</strong> the mode or state, such as Object Mode, Edit Mode, Sculpt Mode, Shader, or Geometry Nodes.</li>
                <li><strong className="text-white">Profile:</strong> the saved set of eight slots for a specific editor and context combination.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                When a pie opens, OctoPie looks for editor plus resolved context plus active profile, then editor plus Global plus active profile, then the Empty profile fallbacks. If nothing is configured, it opens an empty pie safely.
              </p>
            </section>

            <section id="contexts">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Editors & Contexts</h2>
              <p className="text-muted-foreground mb-4">
                OctoPie keeps separate configuration buckets per Blender editor. Auto Context can select the right context automatically, while Global override forces one setup to behave the same everywhere in that editor.
              </p>
              <div className="not-prose flex flex-wrap gap-2 mb-8">
                {supportedEditors.map((editor) => (
                  <span key={editor} className="border border-[rgba(199,251,255,.12)] bg-black/24 px-3 py-1.5 text-sm text-muted-foreground">
                    {editor}
                  </span>
                ))}
              </div>
            </section>

            <section id="profiles">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Profiles</h2>
              <p className="text-muted-foreground mb-4">
                A profile is the content of a pie for a specific editor and context. Profiles can be added, duplicated, renamed, imported, exported, reset, locked, or deleted.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Use descriptive names by purpose, such as Modeling, Edit Mesh, Render Utility, or Shader Tools.</li>
                <li>Lock stable profiles to avoid accidental edits.</li>
                <li>Use Pie Menu slots to open another reusable profile as a nested pie.</li>
                <li>The Empty profile represents a clean default state.</li>
              </ul>
            </section>

            <section id="slots">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Slots</h2>
              <p className="text-muted-foreground mb-4">
                Each pie has eight fixed directions. A slot can be enabled, disabled, locked, collapsed, moved, duplicated, copied to another profile, named, assigned an icon, and connected to a module target.
              </p>
              <ReferenceTable headers={["Slot", "Direction", "Position"]} rows={slotPositions} />
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Labels can be typed manually or resolved from the module target.</li>
                <li>Icons can use Blender built-in icons, Lucide icons, local PNG icons, or text fallbacks.</li>
                <li>Consistent directions across pies make muscle memory easier to build.</li>
              </ul>
            </section>

            <section id="modules">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Action Types Reference</h2>
              <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {actionModules.map(([name, description]) => (
                  <div key={name} className="night-card p-5">
                    <h3 className="text-white font-semibold mb-2">{name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="shortcuts">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Shortcuts</h2>
              <p className="text-muted-foreground mb-4">
                OctoPie uses two shortcut concepts. Pie shortcuts open one of the eight main pies. Shortcut modules replay an existing Blender shortcut from inside a slot, list item, macro step, or nested pie.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Click a pie shortcut to record a key. Press Esc to cancel recording.</li>
                <li>Double-click the shortcut recorder to open the keyboard picker.</li>
                <li>Mirror shortcuts across editors when useful, such as Pie 1 on Q everywhere.</li>
                <li>Live Preview is available in supported editors when the current pie has an active keymap binding.</li>
              </ul>
            </section>

            <section id="assets-scripts">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Assets & Scripts</h2>
              <p className="text-muted-foreground mb-4">
                Asset slots store a library reference, blend file path, asset type, asset name, import method, and run behavior. Supported asset types include Object, Collection, Material, NodeTree, and World.
              </p>
              <p className="text-muted-foreground mb-4">
                Script slots create or import Python files into OctoPie&apos;s scripts folder. Scripts execute inside Blender with <code>bpy</code> and <code>context</code> available.
              </p>
              <div className="mt-6 p-6 bg-black/30 border border-cyan-200/18 ">
                <h3 className="text-white font-semibold mb-2">Script Safety</h3>
                <p className="text-muted-foreground text-sm mb-0">
                  OctoPie scripts are not sandboxed. Only run scripts you wrote yourself or fully trust.
                </p>
              </div>
            </section>

            <section id="advanced">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Advanced Features</h2>
              <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  ["Profile management", "Add, copy, rename, import, export, reset, lock, and delete complete pie setups."],
                  ["Moving slots", "Swap slot positions, duplicate a slot with Ctrl+Click, or copy it to another profile with Alt+Click."],
                  ["Script management", "Create, import, and edit Python scripts directly from OctoPie."],
                  ["Asset actions", "Assign selected Asset Browser items and choose append, append reuse, or link behavior."],
                ].map(([title, body]) => (
                  <div key={title} className="night-card p-5">
                    <h3 className="text-white font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="tips">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Tips & Best Practices</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                <li>Use one pie for one clear job or category.</li>
                <li>Name profiles and slots by purpose, not by number.</li>
                <li>Keep similar actions in similar positions across pies.</li>
                <li>Leave unused directions empty when that makes the pie easier to read.</li>
                <li>Use List for many actions in one category, Pie Menu for secondary radial groups, Macro for repeated multi-step work, Script for personal automation, and Asset for reusable library content.</li>
              </ul>
            </section>

            <section id="troubleshooting">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Troubleshooting</h2>
              <ReferenceTable headers={["Issue", "Likely cause", "Fix"]} rows={troubleshooting} />
              <p className="text-muted-foreground mb-4">
                Reset a single slot with the remove button. Reset a profile from profile actions. Factory Reset is available in Preferences &gt; OctoPie &gt; System & Data and deletes all OctoPie data after confirmation.
              </p>
            </section>

            <section id="quick-reference">
              <h2 className="text-2xl font-semibold mt-12 mb-4">Quick Reference</h2>
              <ReferenceTable headers={["If you want to", "Use"]} rows={quickGuide} />
              <ReferenceTable headers={["Control", "Click", "Result"]} rows={clickBehaviors} />
              <div className="not-prose night-card mb-8 p-5">
                <h3 className="text-white font-semibold mb-2">Runtime pie keys</h3>
                <p className="text-sm text-muted-foreground mb-0">
                  Escape closes the pie without action. Clicking a slot executes that slot. Clicking outside closes the pie.
                </p>
              </div>
            </section>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
