import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default () => {
  let config = {
    plugins: [vue()],
    build: {
      // minify: false,
      lib: {
        entry: path.resolve(__dirname,'../package-echart/index.js'),
        name: 'gt-ui',
        fileName: (format) => `gt-ui-chart.${format}.min.js`,
      },
      outDir: `./dist/chart/`,
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
