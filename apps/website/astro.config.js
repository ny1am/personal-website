import image from '@astrojs/image';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nazaryy.dev/',
  integrations: [solid(), tailwind({ config: { applyBaseStyles: false } }), image()],
});
