import GButton from "./src/button.vue";
import '../icon';
/* istanbul ignore next */
GButton.install = function (Vue) {
  Vue.component(GButton.name, GButton);
};

export default GButton;

