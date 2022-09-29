import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import Markdown from 'vite-plugin-md';

export const basicConfig = {
  plugins: [
    vue(),
    svgLoader(),
    Markdown(),
  ],
};
