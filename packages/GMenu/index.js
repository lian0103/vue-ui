import GMenu from './src/index.vue';

export const GMenuPlugin = {
  install(app) {
    app.component('g-menu', GMenu);
  },
};

export {
  GMenu,
};
