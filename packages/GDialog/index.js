import GDialog from './src/index.vue';

export const GDialogPlugin = {
  install(app) {
    app.component('g-dialog', GDialog);
  },
};

export {
  GDialog,
};
