import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  site: 'https://sargolmazraedoost.github.io',
  markdown: {
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    shikiConfig: {
      themes: {
        dark: 'rose-pine',
        light: 'rose-pine-dawn',
      },
      wrap: true,
    },
  },
});
