import {{ compName }} from './src/index.vue';

export const {{ compName }}Plugin = {
  install(app) {
    app.component('g-{{ compClassName }}', {{ compName }});
  },
};

export {
  {{ compName }},
};
