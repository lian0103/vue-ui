import GFilterChipsGroup from "./src/filter-chips-group.vue";
import "../filter-chips";

/* istanbul ignore next */
GFilterChipsGroup.install = function (Vue) {
  Vue.component(GFilterChipsGroup.name, GFilterChipsGroup);
};

export default GFilterChipsGroup;
