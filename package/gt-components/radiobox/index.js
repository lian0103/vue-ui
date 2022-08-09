import GRadiobox from "./src/radiobox.vue";
import GRadioboxGroup from "./src/radioboxGroup.vue";

/* istanbul ignore next */
GRadiobox.install = function (Vue) {
  Vue.component(GRadiobox.name, GRadiobox);
};
GRadioboxGroup.install = function (Vue) {
  Vue.component(GRadioboxGroup.name, GRadioboxGroup);
};

export default { GRadiobox, GRadioboxGroup };
