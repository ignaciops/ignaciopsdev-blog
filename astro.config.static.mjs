// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// Static site configuration (for public website)
// Build: npm run build:static
export default defineConfig({
  site: 'https://ignaciops.dev',
  output: 'static',

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx({
    components: {
      KeystaticImage: '~/components/mdx/KeystaticImage.astro',
      YouTube: '~/components/mdx/YouTube.astro',
      Callout: '~/components/mdx/Callout.astro',
    },
  })],
});
