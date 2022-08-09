import GDialog from "./src/dialog.vue";

/* istanbul ignore next */
GDialog.install = function (Vue) {
  Vue.component(GDialog.name, GDialog);
};

export default GDialog;
