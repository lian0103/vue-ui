import path from 'path';
import { basicConfig } from './vite.basic.config.js';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import svgLoader from 'vite-svg-loader';

const libTarget = {
  GT: '../package/index.js',
};

// https://vitejs.dev/config/
export default () => {
  let config = {
    ...basicConfig,
    plugins: [vue(), AutoImport(), svgLoader()],
    build: {
      // minify: false,
      lib: {
        entry: path.resolve(__dirname, libTarget['GT'] || ''),
        name: 'gt-ui',
        fileName: (format) => `gt-ui.${format}.min.js`,
      },
      outDir: `./dist/js/`,
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
