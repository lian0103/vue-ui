import path from 'path';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import Markdown from 'vite-plugin-md';

export const basicConfig = {
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, '../src')}`,
      packages: path.resolve(__dirname, '../packages'),
      '@package': path.resolve(__dirname, '../package'),
    },
  },
  plugins: [
    vue(),
    svgLoader(),
    Markdown(),
  ],
};
