import GDownloadIcon from './src/index.vue';

export const GDownloadIconPlugin = {
  install(app) {
    app.component('g-download-icon', GDownloadIcon);
  },
};

export {
  GDownloadIcon,
};
