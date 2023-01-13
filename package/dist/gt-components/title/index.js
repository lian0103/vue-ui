import GTitle from "./src/title.vue";

/* istanbul ignore next */
GTitle.install = function (Vue) {
  Vue.component(GTitle.name, GTitle);
};

export default GTitle;
