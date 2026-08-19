import { defineConfig } from 'astro/config';

export default defineConfig({
  // Using nefo.cc as a custom domain on GitHub Pages -> keep base as '/'.
  // Deploying to USER.github.io/REPO instead? set base: '/REPO'.
  site: 'https://www.nefo.cc',
  base: '/',
});
