import GDropdown from './src/index.vue';

export const GDropdownPlugin = {
  install(app) {
    app.component('g-dropdown', GDropdown);
  },
};

export {
  GDropdown,
};
