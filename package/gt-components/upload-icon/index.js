import GUploadIcon from "./src/upload-icon.vue";
import '../icon'
/* istanbul ignore next */
GUploadIcon.install = function (Vue) {
  Vue.component(GUploadIcon.name, GUploadIcon);
};

export default GUploadIcon;
