import { defineConfig } from 'vite';
import {
  basicConfig,
  silenceSomeSassDeprecationWarnings,
} from './vite.basic.config';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import svgLoader from 'vite-svg-loader';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import Markdown from 'vite-plugin-md';

// https://vitejs.dev/config/
export const config = {
  ...basicConfig,
  css: {
    preprocessorOptions: {
      sass: {
        ...silenceSomeSassDeprecationWarnings,
      },
      scss: {
        additionalData: `@use "../src/assets/elementPlusInit.scss" as *;`,
      },
    },
  },
  plugins: [
    vue({ template: { transformAssetUrls }, include: [/\.vue$/, /\.md$/] }),
    quasar({
      sassVariables: 'src/assets/quasar-variables.scss',
    }),
    AutoImport(),
    Components(),
    svgLoader(),
    Markdown(),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
};

export default () => {
  return defineConfig(config);
};
