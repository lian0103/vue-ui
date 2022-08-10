import GForm from "./src/form.vue";
import '../input'
/* istanbul ignore next */
GForm.install = function (Vue) {
  Vue.component('GForm', GForm);
};

export default GForm;
