import GLoadingIcon from "./src/loading-icon.vue";
import '../icon'
/* istanbul ignore next */
GLoadingIcon.install = function (Vue) {
  Vue.component(GLoadingIcon.name, GLoadingIcon);
};

export default GLoadingIcon;
