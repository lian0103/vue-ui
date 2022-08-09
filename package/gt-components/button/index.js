import GButton from "./src/button.vue";

/* istanbul ignore next */
GButton.install = function (Vue) {
  Vue.component(GButton.name, GButton);
};

export default GButton;

import '../icon'