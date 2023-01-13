import GCheckbox from "./src/checkbox.vue";
import GCheckboxGroup from "./src/checkboxGroup.vue";
import "../icon";

/* istanbul ignore next */
GCheckbox.install = function (Vue) {
  Vue.component(GCheckbox.name, GCheckbox);
};

GCheckboxGroup.install = function (Vue) {
  Vue.component(GCheckboxGroup.name, GCheckboxGroup);
};
export default { GCheckbox, GCheckboxGroup };


