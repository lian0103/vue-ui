import GLoading from './src/index.vue';

export const GLoadingPlugin = {
  install(app) {
    app.component('g-loading', GLoading);
  },
};

export {
  GLoading,
};
