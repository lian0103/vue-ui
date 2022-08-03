import GMessageToast from './src/index.vue';

export const GMessageToastPlugin = {
  install(app) {
    app.component('g-message-tpast', GMessageToast);
  },
};

export {
  GMessageToast,
};
