import GPieGraph from "./src/pieGraph.vue";

/* istanbul ignore next */
GPieGraph.install = function (Vue) {
  Vue.component(GPieGraph.name, GPieGraph);
};

export default GPieGraph;
