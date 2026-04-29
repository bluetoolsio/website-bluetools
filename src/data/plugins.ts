export interface PluginFeature {
  title: string;
  description: string;
  icon?: string;
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
