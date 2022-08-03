import GForm from './src/index.vue';

export const GFormPlugin = {
  install(app) {
    app.component('g-form', GForm);
  },
};

export {
  GForm,
};
