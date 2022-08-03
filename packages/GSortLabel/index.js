import GSortLabel from './src/index.vue';

export const GSortLabelPlugin = {
  install(app) {
    app.component('g-sort-label', GSortLabel);
  },
};

export {
  GSortLabel,
};
