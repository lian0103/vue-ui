import path from 'path';
import { basicConfig } from './vite.basic.config.js';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import svgLoader from 'vite-svg-loader';

const libTarget = {
  GT: '../packages/index.js',
};

// https://vitejs.dev/config/
export default () => {
  let config = {
    ...basicConfig,
    plugins: [vue(), AutoImport(), Components(), svgLoader()],
    build: {
      // minify: false,
      lib: {
        entry: path.resolve(__dirname, libTarget['GT'] || ''),
        name: 'gt-ui',
        fileName: (format) => `gt-ui.${format}.js`,
      },
      outDir: `./dist/GT`,
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  };

  return defineConfig(config);
};
