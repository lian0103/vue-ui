import { defineConfig } from 'vite';
import { basicConfig } from './vite.basic.config';

// https://vitejs.dev/config/
export const config = {
  ...basicConfig,
  test: {
    global: true,
    environment: 'jsdom',
    includeSource: ['packages/__test__/*.spec.js'],
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
};

export default () => {
  return defineConfig(config);
};
