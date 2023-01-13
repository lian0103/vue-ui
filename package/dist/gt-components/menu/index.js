import GMenu from "./src/menu.vue";
import '../icon'
/* istanbul ignore next */
GMenu.install = function (Vue) {
  Vue.component(GMenu.name, GMenu);
};

export default GMenu;
