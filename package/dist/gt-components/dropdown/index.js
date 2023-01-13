import GDropdown from "./src/dropdown.vue";
import '../icon'
/* istanbul ignore next */
GDropdown.install = function (Vue) {
  Vue.component(GDropdown.name, GDropdown);
};

export default GDropdown;
