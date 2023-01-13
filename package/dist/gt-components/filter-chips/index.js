import GFilterChips from "./src/filter-chips.vue";

/* istanbul ignore next */
GFilterChips.install = function (Vue) {
  Vue.component(GFilterChips.name, GFilterChips);
};

export default GFilterChips;
