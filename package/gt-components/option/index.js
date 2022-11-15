import GOption from "./src/option.vue";

/* istanbul ignore next */
GOption.install = function (Vue) {
  Vue.component(GOption.name, GOption);
};

export default GOption;
