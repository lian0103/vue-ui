import { defineConfig } from 'vite';
import { basicConfig , silenceSomeSassDeprecationWarnings } from './vite.basic.config.js';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import svgLoader from 'vite-svg-loader';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vitejs.dev/config/
export const config = {
  ...basicConfig,
  base: '/vue-ui/',
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
    vue({ template: { transformAssetUrls } }),
    quasar({
      sassVariables: 'src/assets/quasar-variables.scss',
    }),
    AutoImport(),
    Components(),
    svgLoader(),
  ],

  chunkSizeWarningLimit: 1600,
  build: {
    outDir: 'demo',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/static/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
};

export default () => {
  return defineConfig(config);
};
