import GTimePicker from "./src/time-picker.vue";
import '../icon'
/* istanbul ignore next */
GTimePicker.install = function (Vue) {
  Vue.component(GTimePicker.name, GTimePicker);
};

export default GTimePicker;
