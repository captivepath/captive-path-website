// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://captivepath.com',
  prefetch: {
    defaultStrategy: 'hover',
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/privacy') && !page.includes('/terms'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
