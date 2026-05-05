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
    price: '$25',
    version: '1.0.0',
    lastUpdated: 'April 2026',
    heroImage: '/plugins/octopie/hero.jpg',
    previewImage: '/plugins/octopie/preview.gif',
    heroVideo: 'https://www.youtube.com/embed/u8TsCMp8k2w',
    purchaseLinks: {
      superhive: 'https://superhivemarket.com/',
      gumroad: 'https://bluetools.gumroad.com/l/fvynt'
    },
    gallery: [
      '/plugins/octopie/gallery-1.jpg',
      '/plugins/octopie/gallery-2.jpg'
    ],
    showcase: [
      {
        title: 'Activate',
        description: 'Set a shortcut to open OctoPie from the N-panel and get instant access to eight slots you can customize with your own tools, actions, and workflows.',
        media: '/plugins/octopie/showcase/activate.mp4'
      },
      {
        title: 'Operator',
        description: 'Call Blender operators directly from context-aware pie slots.',
        media: '/plugins/octopie/showcase/operator.mp4'
      },
      {
        title: 'Shortcut',
        description: 'Map shortcuts into visual slots for commands you reach for constantly.',
        media: '/plugins/octopie/showcase/shortcut.mp4'
      },
      {
        title: 'Keyboard',
        description: 'Trigger keyboard-style input from a pie slot when a direct operator is not enough.',
        media: '/plugins/octopie/showcase/emulate-keyboard.mp4'
      },
      {
        title: 'Menu',
        description: 'Bring familiar Blender menus into OctoPie and reach them from a faster layout.',
        media: '/plugins/octopie/showcase/menus.mp4'
      },
      {
        title: 'Script',
        description: 'Run custom scripts from a slot for personal tools and pipeline actions.',
        media: '/plugins/octopie/showcase/script.mp4'
      },
      {
        title: 'Asset',
        description: 'Turn asset placement into a slot-based workflow, so libraries stay one gesture away.',
        media: '/plugins/octopie/showcase/assets.mp4'
      },
      {
        title: 'Macro',
        description: 'Chain repeated Blender actions into one clean slot for multi-step work.',
        media: '/plugins/octopie/showcase/macros.mp4'
      },
      {
        title: 'List',
        description: 'Use compact lists for longer command sets without crowding the main pie.',
        media: '/plugins/octopie/showcase/list.mp4'
      },
      {
        title: 'Pie Menu',
        description: 'Nest focused pies for different modes, editors, profiles, and tasks.',
        media: '/plugins/octopie/showcase/pie.mp4'
      }
    ],
    features: [
      {
        title: 'Build From Scratch',
        description: 'Create your own Blender pie menus from the ground up, then fill each eight-slot layout with the operators, shortcuts, scripts, assets, macros, lists, or nested pies you actually use.'
      },
      {
        title: 'Context-Aware Profiles',
        description: 'Build different profiles for Blender editors and modes, so OctoPie can surface the right commands whether you are modeling, editing UVs, working in Geometry Nodes, or managing assets.'
      }
    ]
  }
];

export function getPluginBySlug(slug: string): PluginData | undefined {
  return plugins.find((p) => p.slug === slug);
}
