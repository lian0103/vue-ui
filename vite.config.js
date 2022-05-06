import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default ({ mode }) => {
  let config = {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/components/indexProd.js'),
        name: 'gt-UI',
        fileName: (format) => `gt-UI.${format}.js`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          // Provide global variables to use in the UMD build
          // Add external deps here
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/elementPlusInit.scss" as *;`,
        },
      },
    },
    plugins: [
      vue(),
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
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
  };

  if (mode === 'demo') {
    config.build = {
      outDir: './demo',
    };
    console.log("config.build",config.build)
  }

  return defineConfig(config);
};
