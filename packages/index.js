/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */

import { GButtonPlugin } from './GButton';
import { GIconsPlugin } from './GIcons';
import { GImgUploadPlugin } from './GImgUpload';
import { GImgUpload2Plugin } from './GImgUpload2';

const Plugin = {
  install(app) {
    GButtonPlugin.install?.(app);
    GIconsPlugin.install?.(app);
    GImgUploadPlugin.install?.(app);
    GImgUpload2Plugin.install?.(app);
  },
};

export default Plugin;

export * from './GButton'
export * from './GIcons'
export * from './GImgUpload'
export * from './GImgUpload2'