import GInput from './src/index.vue';

export const GInputPlugin = {
  install(app) {
    app.component('g-input', GInput);
  },
};

export {
  GInput,
};
