import path from 'path';
import { basicConfig } from './vite.basic.config.js';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const libTarget = {
  GT: '../package/index.js',
};

// https://vitejs.dev/config/
export default () => {
  let config = {
    ...basicConfig,
    plugins: [vue()],
    build: {
      // minify: false,
      lib: {
        entry: path.resolve(__dirname, libTarget['GT'] || ''),
        name: 'gt-ui',
        fileName: (format) => `gt-ui.${format}.min.js`,
      },
      outDir: `./dist/`,
      minify:false,
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
