import GSortLabel from "./src/sort-label.vue";
import '../icon'
/* istanbul ignore next */
GSortLabel.install = function (Vue) {
  Vue.component(GSortLabel.name, GSortLabel);
};

export default GSortLabel;
