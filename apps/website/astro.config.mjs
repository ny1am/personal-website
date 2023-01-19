import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nazaryy.dev',
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
