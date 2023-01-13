import GImgUpload from "./src/img-upload.vue";

/* istanbul ignore next */
GImgUpload.install = function (Vue) {
  Vue.component(GImgUpload.name, GImgUpload);
};

export default GImgUpload;
