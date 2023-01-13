import GTabs from "./src/tabs.vue";

/* istanbul ignore next */
GTabs.install = function (Vue) {
  Vue.component(GTabs.name, GTabs);
};

export default GTabs;
