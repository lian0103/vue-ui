import GTag from "./src/tag.vue";

/* istanbul ignore next */
GTag.install = function (Vue) {
  Vue.component(GTag.name, GTag);
};

export default GTag;

import '../icon'