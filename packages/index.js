//組件
import { GButtonPlugin , GButton } from './GButton';
import { GIconsPlugin , GIcons } from './GIcons';

//組件共用樣式
import './assets/index.scss';
import './assets/tailwindInit.css';

const GtUI = {
  install(app) {
    GButtonPlugin.install?.(app);
    GIconsPlugin.install?.(app);
  },
};

export default {
  install:GtUI.install,
  GButton,
  GIcons
};


