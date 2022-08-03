import GImgUpload from './src/index.vue';

export const GImgUploadPlugin = {
  install(app) {
    app.component('g-img-upload', GImgUpload);
  },
};

export {
  GImgUpload,
};
