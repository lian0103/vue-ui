import GIcons from './src/index.vue';

export const GIconsPlugin = {
  install(app) {
    app.component('g-icons', GIcons);
  },
};

export { GIcons };


