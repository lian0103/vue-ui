import GTitle from './src/index.vue';

export const GTitlePlugin = {
  install(app) {
    app.component('g-title', GTitle);
  },
};

export {
  GTitle,
};
