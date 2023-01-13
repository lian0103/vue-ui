import GPagination from "./src/pagination.vue";

/* istanbul ignore next */
GPagination.install = function (Vue) {
  Vue.component(GPagination.name, GPagination);
};

export default GPagination;
