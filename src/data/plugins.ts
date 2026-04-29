export interface PluginFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface PluginShowcase {
  title: string;
  description: string;
  media: string;
}

export interface PluginData {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  version: string;
  lastUpdated: string;
  features: PluginFeature[];
  heroVideo?: string;
  heroImage?: string;
  previewImage?: string;
  purchaseLinks: {
    superhive: string;
    gumroad: string;
  };
  gallery: string[];
  showcase?: PluginShowcase[];
}

export const plugins: PluginData[] = [
  {
    id: '1',
    slug: 'octopie',
    name: 'OctoPie',
    tagline: 'Context-aware pie menus, shortcuts, assets, and scripts for Blender',
    description: 'OctoPie lets you build your own Blender pie menus around the way you work. Create editor- and mode-aware profiles, fill slots with operators, shortcuts, scripts, assets, macros, lists, or nested pies, and keep your most-used actions within one fast gesture.',
    price: '$15.00',
    version: '1.2.0',
    lastUpdated: 'April 2026',
    heroImage: '/plugins/octopie/hero.jpg',
    previewImage: '/plugins/octopie/preview.gif',
    heroVideo: '', // Optional video
    purchaseLinks: {
      superhive: 'https://superhivemarket.com/products/smart-pie-menus',
      gumroad: 'https://gumroad.com/'
    },
    gallery: [
      '/plugins/octopie/gallery-1.jpg',
      '/plugins/octopie/gallery-2.jpg'
    ],
    showcase: [
      {
        title: 'Activate',
        description: 'Open OctoPie instantly and keep your most-used actions right under the cursor.',
        media: '/plugins/octopie/showcase/activate.mp4'
      },
      {
        title: 'Assets',
        description: 'Turn asset placement into a slot-based workflow, so libraries stay one gesture away.',
        media: '/plugins/octopie/showcase/assets.mp4'
      },
      {
        title: 'Emulate Keyboard',
        description: 'Trigger keyboard-style input from a pie slot when a direct operator is not enough.',
        media: '/plugins/octopie/showcase/emulate-keyboard.mp4'
      },
      {
        title: 'Lists',
        description: 'Use compact lists for longer command sets without crowding the main pie.',
        media: '/plugins/octopie/showcase/list.mp4'
      },
      {
        title: 'Macros',
        description: 'Chain repeated Blender actions into one clean slot for multi-step work.',
        media: '/plugins/octopie/showcase/macros.mp4'
      },
      {
        title: 'Menus',
        description: 'Bring familiar Blender menus into OctoPie and reach them from a faster layout.',
        media: '/plugins/octopie/showcase/menus.mp4'
      },
      {
        title: 'Operators',
        description: 'Call Blender operators directly from context-aware pie slots.',
        media: '/plugins/octopie/showcase/operator.mp4'
      },
      {
        title: 'Pie Menus',
        description: 'Nest focused pies for different modes, editors, profiles, and tasks.',
        media: '/plugins/octopie/showcase/pie.mp4'
      },
      {
        title: 'Scripts',
        description: 'Run custom scripts from a slot for personal tools and pipeline actions.',
        media: '/plugins/octopie/showcase/script.mp4'
      },
      {
        title: 'Shortcuts',
        description: 'Map shortcuts into visual slots for commands you reach for constantly.',
        media: '/plugins/octopie/showcase/shortcut.mp4'
      }
    ],
    features: [
      {
        title: 'Context Aware',
        description: 'Menus can change by editor and mode, including Object, Edit, Sculpt, Geometry Nodes, UV, Sequencer, Graph Editor, and more.'
      },
      {
        title: 'Slot-Based Workflows',
        description: 'Each pie has eight directional slots that can run operators, shortcuts, scripts, assets, macros, lists, or nested pies.'
      },
      {
        title: 'Portable Setup',
        description: 'Export, import, back up, and restore your OctoPie settings, scripts, icons, profiles, and keymaps.'
      }
    ]
  }
];

export function getPluginBySlug(slug: string): PluginData | undefined {
  return plugins.find((p) => p.slug === slug);
}
