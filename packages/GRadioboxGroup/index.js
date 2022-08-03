import GRadioboxGroup from './src/index.vue';

export const GRadioboxGroupPlugin = {
  install(app) {
    app.component('g-radio-group', GRadioboxGroup);
  },
};

export {
  GRadioboxGroup,
};
