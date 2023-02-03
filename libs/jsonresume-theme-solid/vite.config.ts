import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3001,
    open: 'src/index.html',
  },
  build: {
    target: 'esnext',
  },
});
