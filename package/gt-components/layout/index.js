import GLayout from "./src/layout.vue";
import "../title";
import "../tabs";
/* istanbul ignore next */
GLayout.install = function (Vue) {
  Vue.component(GLayout.name, GLayout);
};

export default GLayout;
