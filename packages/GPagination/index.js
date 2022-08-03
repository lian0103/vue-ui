import GPagination from './src/index.vue';

export const GPaginationPlugin = {
  install(app) {
    app.component('g-pagination', GPagination);
  },
};

export {
  GPagination,
};
