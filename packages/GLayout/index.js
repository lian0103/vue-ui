import GLayout from './src/index.vue';

export const GLayoutPlugin = {
  install(app) {
    app.component('g-layout', GLayout);
  },
};

export {
  GLayout,
};
