import GBarGraph from "./src/barGraph.vue";

/* istanbul ignore next */
GBarGraph.install = function (Vue) {
  Vue.component(GBarGraph.name, GBarGraph);
};

export default GBarGraph;
