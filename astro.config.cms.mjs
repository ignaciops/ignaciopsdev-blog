// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import keystatic from '@keystatic/astro';

import node from '@astrojs/node';

// CMS-only configuration (for cms.ignaciops.dev)
// Build: npm run build:cms
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), keystatic()]
});
