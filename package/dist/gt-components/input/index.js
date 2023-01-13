import GInput from "./src/input.vue";

/* istanbul ignore next */
GInput.install = function (Vue) {
  Vue.component(GInput.name, GInput);
};

export default GInput;

import "../icon";