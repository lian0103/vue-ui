import GLoading from "./src/loading.vue";

/* istanbul ignore next */
GLoading.install = function (Vue) {
  Vue.component(GLoading.name, GLoading);
};

export default GLoading;
