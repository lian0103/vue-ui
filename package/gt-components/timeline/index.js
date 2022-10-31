import GTimeline from "./src/timeline.vue";

/* istanbul ignore next */
GTimeline.install = function (Vue) {
  Vue.component(GTimeline.name, GTimeline);
};

export default GTimeline;
