// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import keystatic from '@keystatic/astro';

import node from '@astrojs/node';

// Local development configuration with Keystatic CMS
// Use: npm run dev (for editing content via Keystatic)
// For production build, use: npm run build (uses astro.config.static.mjs)
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),

  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false
    }
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      disabled: 'build'
    },
    ssr: {
      noExternal: ['@keystatic/core', '@keystatic/astro']
    }
  },

  integrations: [react(), mdx({
    components: {
      KeystaticImage: '~/components/mdx/KeystaticImage.astro',
      YouTube: '~/components/mdx/YouTube.astro',
      Callout: '~/components/mdx/Callout.astro',
    },
  }), keystatic()]
});
