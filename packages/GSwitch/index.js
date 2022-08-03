import GSwitch from './src/index.vue';

export const GSwitchPlugin = {
  install(app) {
    app.component('g-switch', GSwitch);
  },
};

export {
  GSwitch,
};
