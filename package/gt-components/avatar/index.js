import GAvatar from "./src/avatar.vue";

/* istanbul ignore next */
GAvatar.install = function (Vue) {
  Vue.component(GAvatar.name, GAvatar);
};

export default GAvatar;
