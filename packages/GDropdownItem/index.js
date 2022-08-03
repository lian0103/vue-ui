import GDropdownItem from './src/index.vue';

export const GDropdownItemPlugin = {
  install(app) {
    app.component('g-dropdown-item', GDropdownItem);
  },
};

export {
  GDropdownItem,
};
