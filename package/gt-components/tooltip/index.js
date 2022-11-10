import GTooltip from "./src/tooltip.vue";

/* istanbul ignore next */
GTooltip.install = function (Vue) {
  Vue.component(GTooltip.name, GTooltip);
};

export default GTooltip;
