import GSelect from "./src/select.vue";
import "../option";
import "../input";
import "../icon";
/* istanbul ignore next */
GSelect.install = function (Vue) {
  Vue.component(GSelect.name, GSelect);
};

export default GSelect;
