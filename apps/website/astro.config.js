import solid from '@astrojs/solid-js';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nazaryy.dev/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [solid()],
});
