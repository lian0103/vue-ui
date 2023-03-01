import GAddressSelect from "./src/address-select.vue";

/* istanbul ignore next */
GAddressSelect.install = function (Vue) {
  Vue.component(GAddressSelect.name, GAddressSelect);
};

export default GAddressSelect;
