import GTable from "./src/table.vue";
import '../loading-icon'
/* istanbul ignore next */
GTable.install = function (Vue) {
  Vue.component(GTable.name, GTable);
};

export default GTable;
