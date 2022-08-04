/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */

import { GIconsPlugin , GIcons } from './GIcons';
import { GLoadingIconPlugin , GLoadingIcon } from './GLoadingIcon';
import { GUploadIconPlugin , GUploadIcon } from './GUploadIcon';
import { GDownloadIconPlugin , GDownloadIcon } from './GDownloadIcon';
import { GImgUploadPlugin , GImgUpload } from './GImgUpload';
import { GTitlePlugin , GTitle } from './GTitle';
import { GLayoutPlugin , GLayout } from './GLayout';
import { GMenuPlugin , GMenu } from './GMenu';
import { GTabsPlugin , GTabs } from './GTabs';
import { GLoadingPlugin , GLoading } from './GLoading';
import { GMessagePlugin , GMessage } from './GMessage';
import { GMessageToastPlugin , GMessageToast } from './GMessageToast';
import { GCheckboxPlugin , GCheckbox } from './GCheckbox';
import { GRadioboxPlugin , GRadiobox } from './GRadiobox';
import { GRadioboxGroupPlugin , GRadioboxGroup } from './GRadioboxGroup';
import { GSwitchPlugin , GSwitch } from './GSwitch';
import { GFormPlugin , GForm } from './GForm';
import { GInputPlugin , GInput } from './GInput';
import { GDropdownPlugin , GDropdown } from './GDropdown';
import { GDropdownItemPlugin , GDropdownItem } from './GDropdownItem';
import { GTimePickerPlugin , GTimePicker } from './GTimePicker';
import { GTagPlugin , GTag } from './GTag';
import { GTablePlugin , GTable } from './GTable';
import { GPaginationPlugin , GPagination } from './GPagination';
import { GSortLabelPlugin , GSortLabel } from './GSortLabel';
import { GFilterOptionPlugin , GFilterOption } from './GFilterOption';
import { GDialogPlugin , GDialog } from './GDialog';
import { GButtonPlugin , GButton } from './GButton';
//組件共用樣式
import './assets/index.scss';
import './assets/tailwindInit.css';

const GtUI = {
  install(app) {
    GIconsPlugin.install?.(app);
    GLoadingIconPlugin.install?.(app);
    GUploadIconPlugin.install?.(app);
    GDownloadIconPlugin.install?.(app);
    GImgUploadPlugin.install?.(app);
    GTitlePlugin.install?.(app);
    GLayoutPlugin.install?.(app);
    GMenuPlugin.install?.(app);
    GTabsPlugin.install?.(app);
    GLoadingPlugin.install?.(app);
    GMessagePlugin.install?.(app);
    GMessageToastPlugin.install?.(app);
    GCheckboxPlugin.install?.(app);
    GRadioboxPlugin.install?.(app);
    GRadioboxGroupPlugin.install?.(app);
    GSwitchPlugin.install?.(app);
    GFormPlugin.install?.(app);
    GInputPlugin.install?.(app);
    GDropdownPlugin.install?.(app);
    GDropdownItemPlugin.install?.(app);
    GTimePickerPlugin.install?.(app);
    GTagPlugin.install?.(app);
    GTablePlugin.install?.(app);
    GPaginationPlugin.install?.(app);
    GSortLabelPlugin.install?.(app);
    GFilterOptionPlugin.install?.(app);
    GDialogPlugin.install?.(app);
    GButtonPlugin.install?.(app);
  },
};

export default {
    install:GtUI.install,
    GIcons,
    GLoadingIcon,
    GUploadIcon,
    GDownloadIcon,
    GImgUpload,
    GTitle,
    GLayout,
    GMenu,
    GTabs,
    GLoading,
    GMessage,
    GMessageToast,
    GCheckbox,
    GRadiobox,
    GRadioboxGroup,
    GSwitch,
    GForm,
    GInput,
    GDropdown,
    GDropdownItem,
    GTimePicker,
    GTag,
    GTable,
    GPagination,
    GSortLabel,
    GFilterOption,
    GDialog,
    GButton,
};

