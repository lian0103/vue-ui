import GLoadingIcon from './src/index.vue';

export const GLoadingIconPlugin = {
  install(app) {
    app.component('g-loading-icon', GLoadingIcon);
  },
};

export {
  GLoadingIcon,
};
