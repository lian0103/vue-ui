import GTable from './src/index.vue';

export const GTablePlugin = {
  install(app) {
    app.component('g-table', GTable);
  },
};

export {
  GTable,
};
