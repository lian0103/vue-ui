import GFilterOption from "./src/filterOption.vue";
import GFilterOptionGroup from './src/filterOptionGroup.vue' 

/* istanbul ignore next */
GFilterOption.install = function (Vue) {
  Vue.component(GFilterOption.name, GFilterOption);
};

GFilterOptionGroup.install = function (Vue) {
  Vue.component(GFilterOptionGroup.name, GFilterOptionGroup);
};

export default { GFilterOption, GFilterOptionGroup };