import GIcon from "./src/icon.vue";

/* istanbul ignore next */
GIcon.install = function (Vue) {
  Vue.component(GIcon.name, GIcon);
};

export default GIcon;
