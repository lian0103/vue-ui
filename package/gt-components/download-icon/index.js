import GDownloadIcon from './src/download-icon.vue';
import '../icon';
/* istanbul ignore next */
GDownloadIcon.install = function (Vue) {
  Vue.component(GDownloadIcon.name, GDownloadIcon);
};

export default GDownloadIcon;
