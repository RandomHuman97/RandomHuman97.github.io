import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import favicons from 'astro-favicons';

export default defineConfig({
  site: "https://human97.com",
  integrations: [mdx(), sitemap(), favicons()],
  fonts: [{
    provider: fontProviders.fontsource(),
    name: 'Inter',
    cssVariable: '--font-inter',
    weights: ['100 900'],
    styles: ['normal', 'italic'],
    subsets: ['latin'],

  }]

});