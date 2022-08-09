import GLoadingIcon from "./src/loading-icon.vue";

/* istanbul ignore next */
GLoadingIcon.install = function (Vue) {
  Vue.component(GLoadingIcon.name, GLoadingIcon);
};

export default GLoadingIcon;

import '../icon'