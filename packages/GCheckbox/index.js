import GCheckbox from './src/index.vue';

export const GCheckboxPlugin = {
  install(app) {
    app.component('g-checkbox', GCheckbox);
  },
};

export {
  GCheckbox,
};
