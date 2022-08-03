import GTag from './src/index.vue';

export const GTagPlugin = {
  install(app) {
    app.component('g-tag', GTag);
  },
};

export {
  GTag,
};
