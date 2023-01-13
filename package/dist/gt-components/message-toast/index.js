import GMessageToast from "./src/message-toast.vue";

/* istanbul ignore next */
GMessageToast.install = function (Vue) {
  Vue.component(GMessageToast.name, GMessageToast);
};

export default GMessageToast;
