// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://heaven-furniture-mart.vercel.app',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
});
