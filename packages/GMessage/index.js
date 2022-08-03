import GMessage from './src/index.vue';

export const GMessagePlugin = {
  install(app) {
    app.component('g-message', GMessage);
  },
};

export {
  GMessage,
};
