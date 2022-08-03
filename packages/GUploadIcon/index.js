import GUploadIcon from './src/index.vue';

export const GUploadIconPlugin = {
  install(app) {
    app.component('g-upload-icon', GUploadIcon);
  },
};

export {
  GUploadIcon,
};
