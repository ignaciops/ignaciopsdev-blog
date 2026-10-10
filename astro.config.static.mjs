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
      // Bloque oscuro sólido en ambos temas (el renderer lo enmarca con borde sólido)
      theme: 'github-dark',
      wrap: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx()],
});
