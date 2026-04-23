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
    slug: 'smart-pie',
    name: 'Smart Pie',
    tagline: 'The ultimate pie menu enhancement for Blender',
    description: 'Smart Pie radically improves your workflow in Blender by introducing context-aware pie menus that adapt to your current mode, selection, and tools. Work faster, smarter, and with less friction.',
    price: '$15.00',
    version: '1.2.0',
    lastUpdated: 'October 2026',
    heroImage: '/plugins/smart-pie/hero.jpg',
    previewImage: '/plugins/smart-pie/preview.png',
    heroVideo: '', // Optional video
    purchaseLinks: {
      superhive: 'https://superhivemarket.com/products/smart-pie-menus',
      gumroad: 'https://gumroad.com/'
    },
    gallery: [
      '/plugins/smart-pie/gallery-1.jpg',
      '/plugins/smart-pie/gallery-2.jpg'
    ],
    features: [
      {
        title: 'Context Aware',
        description: 'Menus change automatically depending on whether you are in Object, Edit, or Sculpt mode.'
      },
      {
        title: 'Customizable',
        description: 'Easily add your own favorite tools, macros, and scripts directly into any pie slot.'
      },
      {
        title: 'Fast Execution',
        description: 'Built for speed with minimal overhead, ensuring menus pop up instantly.'
      }
    ]
  }
];

export function getPluginBySlug(slug: string): PluginData | undefined {
  return plugins.find((p) => p.slug === slug);
}
