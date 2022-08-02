import GButton from './src/index.vue';

export const GButtonPlugin = {
  install(app) {
    app.component('g-button', GButton);
  },
};

export { GButton };
