import GSwitch from "./src/switch.vue";

/* istanbul ignore next */
GSwitch.install = function (Vue) {
  Vue.component(GSwitch.name, GSwitch);
};

export default GSwitch;
