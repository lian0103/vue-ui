import GTable2 from "./src/table2.vue";
import "../loading-icon";
import "../table-column";
/* istanbul ignore next */
GTable2.install = function (Vue) {
  Vue.component(GTable2.name, GTable2);
};

export default GTable2;
