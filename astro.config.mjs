import { defineConfig } from 'astro/config';

export default defineConfig({
  // Deployed to nef-o-nef.github.io/site, so every URL needs the /site prefix.
  // Moving to a custom domain later? set site to it and base back to '/'.
  site: 'https://nef-o-nef.github.io',
  base: '/site',
});
