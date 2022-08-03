import GFilterOption from './src/index.vue';

export const GFilterOptionPlugin = {
  install(app) {
    app.component('g-filter-option', GFilterOption);
  },
};

export {
  GFilterOption,
};
