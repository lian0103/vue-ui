import GTimePicker from './src/index.vue';

export const GTimePickerPlugin = {
  install(app) {
    app.component('g-time-picker', GTimePicker);
  },
};

export {
  GTimePicker,
};
