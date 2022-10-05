import BarGraph from './gt-components/barGraph/index.js';

const components = [BarGraph];

const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    if (component.name && component.install) {
      console.log(component);
      Vue.component(component.name, component);
    } else {
      Object.values(component).forEach((comp) => {
        Vue.component(comp.name, comp);
      });
    }
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1',
  install,
  BarGraph,
};
