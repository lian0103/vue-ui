import GRadiobox from './src/index.vue';

export const GRadioboxPlugin = {
  install(app) {
    app.component('g-radiobox', GRadiobox);
  },
};

export {
  GRadiobox,
};
