import GTableColumn from "./src/table-column.vue";

/* istanbul ignore next */
GTableColumn.install = function (Vue) {
  Vue.component(GTableColumn.name, GTableColumn);
};

export default GTableColumn;
