// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages (project site) — served under /<repo>/.
  // If you later move to a custom domain / root host, set site to that domain
  // and remove `base`.
  site: 'https://tahmid9510.github.io',
  base: '/RACDOX_Hackathon',
  output: 'static',
  build: {
    // Single-page landing: inline the CSS (~6.5KB gzipped) so nothing is
    // render-blocking on first paint.
    inlineStylesheets: 'always',
  },
});
