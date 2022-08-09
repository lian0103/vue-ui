import GCheckboxGroup from './src/index.vue';

export const GCheckboxGroupPlugin = {
  install(app) {
    app.component('g-checkbox-group', GCheckboxGroup);
  },
};

export {
  GCheckboxGroup,
};
