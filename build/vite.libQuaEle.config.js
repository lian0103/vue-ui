import path from 'path';
import {
  basicConfig,
  silenceSomeSassDeprecationWarnings,
} from './vite.basic.config.js';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import svgLoader from 'vite-svg-loader';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

const libTarget = {
  Element: '../packagesQuaEle/indexElement.js',
  Quasar: '../packagesQuaEle/indexQuasar.js',
};

// https://vitejs.dev/config/
export default ({ mode }) => {
  let config = {
    ...basicConfig,
    build: {
      lib: {
        entry: path.resolve(__dirname, libTarget[mode] || ''),
        name: 'gt-ui',
        fileName: (format) => `gt-ui.${format}.js`,
      },
      outDir: `./dist/${mode}`,
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
        ...(mode === 'production' && {
          'vue-types': 'vue-types/shim',
        }),
      },
    },
    css: {
      preprocessorOptions: {
        sass: {
          ...silenceSomeSassDeprecationWarnings,
        },
        scss: {
          additionalData: `@use "packagesQuaEle/elementPlusInit.scss" as *;`,
        },
      },
    },
    plugins: [
      vue({ template: { transformAssetUrls } }),
      quasar({
        sassVariables: 'packagesQuaEle/quasar-variables.scss',
      }),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
            // directives: true,
            // version: "2.1.5",
          }),
        ],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
            // directives: true,
            // version: "2.1.5",
          }),
        ],
      }),
      svgLoader(),
    ],
  };

  return defineConfig(config);
};
