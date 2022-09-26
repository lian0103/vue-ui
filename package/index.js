/* Automatically generated by 'build/bin/gen-pkg-index.cjs' */

import Avatar from './gt-components/avatar/index.js';
import Button from './gt-components/button/index.js';
import Icon from './gt-components/icon/index.js';
import Title from './gt-components/title/index.js';
import Checkbox from './gt-components/checkbox/index.js';
import Radiobox from './gt-components/radiobox/index.js';
import Switch from './gt-components/switch/index.js';
import Input from './gt-components/input/index.js';
import Tag from './gt-components/tag/index.js';
import LoadingIcon from './gt-components/loading-icon/index.js';
import UploadIcon from './gt-components/upload-icon/index.js';
import ImgUpload from './gt-components/img-upload/index.js';
import DownloadIcon from './gt-components/download-icon/index.js';
import Layout from './gt-components/layout/index.js';
import Menu from './gt-components/menu/index.js';
import Tabs from './gt-components/tabs/index.js';
import Loading from './gt-components/loading/index.js';
import Message from './gt-components/message/index.js';
import MessageToast from './gt-components/message-toast/index.js';
import Form from './gt-components/form/index.js';
import Dropdown from './gt-components/dropdown/index.js';
import Dropdownitem from './gt-components/dropdownitem/index.js';
import TimePicker from './gt-components/time-picker/index.js';
import Table from './gt-components/table/index.js';
import Pagination from './gt-components/pagination/index.js';
import SortLabel from './gt-components/sort-label/index.js';
import FilterOption from './gt-components/filter-option/index.js';
import Dialog from './gt-components/dialog/index.js';
import Divider from './gt-components/divider/index.js';

const components = [
  Avatar,
  Button,
  Icon,
  Title,
  Checkbox,
  Radiobox,
  Switch,
  Input,
  Tag,
  LoadingIcon,
  UploadIcon,
  ImgUpload,
  DownloadIcon,
  Layout,
  Menu,
  Tabs,
  Loading,
  Message,
  MessageToast,
  Form,
  Dropdown,
  Dropdownitem,
  TimePicker,
  Table,
  Pagination,
  SortLabel,
  FilterOption,
  Dialog,
  Divider
];

const install = function(Vue, opts = {}) {

  components.forEach((component) => {
    if (component.name && component.install) {
      Vue.component(component.name, component);
    } else {
      Object.values(component).forEach((comp) => {
        Vue.component(comp.name, comp);
      });
    }
  });

  // Vue.prototype.$ELEMENT = {
  //   size: opts.size || '',
  //   zIndex: opts.zIndex || 2000
  // };

  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.3.2',
  install,
  Avatar,
  Button,
  Icon,
  Title,
  Checkbox,
  Radiobox,
  Switch,
  Input,
  Tag,
  LoadingIcon,
  UploadIcon,
  ImgUpload,
  DownloadIcon,
  Layout,
  Menu,
  Tabs,
  Loading,
  Message,
  MessageToast,
  Form,
  Dropdown,
  Dropdownitem,
  TimePicker,
  Table,
  Pagination,
  SortLabel,
  FilterOption,
  Dialog,
  Divider
};
