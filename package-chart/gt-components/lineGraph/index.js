import GLineGraph from "./src/lineGraph.vue";

/* istanbul ignore next */
GLineGraph.install = function (Vue) {
  Vue.component(GLineGraph.name, GLineGraph);
};

export default GLineGraph;
