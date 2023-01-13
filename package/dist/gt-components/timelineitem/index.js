import GTimelineitem from "./src/timelineitem.vue";

/* istanbul ignore next */
GTimelineitem.install = function (Vue) {
  Vue.component(GTimelineitem.name, GTimelineitem);
};

export default GTimelineitem;
