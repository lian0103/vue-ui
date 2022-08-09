import GLayout from "./src/layout.vue";

/* istanbul ignore next */
GLayout.install = function (Vue) {
  Vue.component(GLayout.name, GLayout);
};

export default GLayout;
