import GMessage from "./src/message.vue";

/* istanbul ignore next */
GMessage.install = function (Vue) {
  Vue.component(GMessage.name, GMessage);
};

export default GMessage;
