import GTree from "./src/tree.vue";

/* istanbul ignore next */
GTree.install = function (Vue) {
  Vue.component(GTree.name, GTree);
};

export default GTree;
