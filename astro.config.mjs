// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static, server-rendered HTML (the default). Set your real domain here —
  // it drives canonical URLs and Open Graph absolute image paths.
  site: 'https://heavenfurnituremart.com',
  output: 'static',
  build: {
    // Single-page landing: inline the CSS (~6.5KB gzipped) so nothing is
    // render-blocking on first paint.
    inlineStylesheets: 'always',
  },
});
