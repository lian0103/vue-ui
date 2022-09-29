import { defineConfig } from 'vite';
import { basicConfig } from './vite.basic.config.js';

// https://vitejs.dev/config/
export const config = {
  ...basicConfig,
  base: '/vue-ui/',
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
