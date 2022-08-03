import GTabs from './src/index.vue';

export const GTabsPlugin = {
  install(app) {
    app.component('g-tabs', GTabs);
  },
};

export {
  GTabs,
};
