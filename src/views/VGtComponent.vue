/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据目录下的组件所生成的模块导出，请勿手动修改
 */

<script setup>
import { useRoute } from 'vue-router';
import { computed, shallowRef } from 'vue';

import gtDocTable from '../gtDocTable';
import gtDoc from '../gtDoc';
    
import ADDRESSSELECT from '../../package/gt-components/address-select/docs/demo.vue';
import AVATAR from '../../package/gt-components/avatar/docs/demo.vue';
import BUTTON from '../../package/gt-components/button/docs/demo.vue';
import CHECKBOX from '../../package/gt-components/checkbox/docs/demo.vue';
import COLLAPSECARD from '../../package/gt-components/collapse-card/docs/demo.vue';
import COLLAPSECARDSECTION from '../../package/gt-components/collapse-card-section/docs/demo.vue';
import DIALOG from '../../package/gt-components/dialog/docs/demo.vue';
import DIVIDER from '../../package/gt-components/divider/docs/demo.vue';
import DOWNLOADICON from '../../package/gt-components/download-icon/docs/demo.vue';
import DROPDOWN from '../../package/gt-components/dropdown/docs/demo.vue';
import DROPDOWNITEM from '../../package/gt-components/dropdownitem/docs/demo.vue';
import FILTERCHIPS from '../../package/gt-components/filter-chips/docs/demo.vue';
import FILTERCHIPSGROUP from '../../package/gt-components/filter-chips-group/docs/demo.vue';
import FORM from '../../package/gt-components/form/docs/demo.vue';
import ICON from '../../package/gt-components/icon/docs/demo.vue';
import IMGUPLOAD from '../../package/gt-components/img-upload/docs/demo.vue';
import INPUT from '../../package/gt-components/input/docs/demo.vue';
import INPUTNUMBER from '../../package/gt-components/input-number/docs/demo.vue';
import LAYOUT from '../../package/gt-components/layout/docs/demo.vue';
import LOADING from '../../package/gt-components/loading/docs/demo.vue';
import LOADINGICON from '../../package/gt-components/loading-icon/docs/demo.vue';
import MENU from '../../package/gt-components/menu/docs/demo.vue';
import MESSAGE from '../../package/gt-components/message/docs/demo.vue';
import MESSAGETOAST from '../../package/gt-components/message-toast/docs/demo.vue';
import OPTION from '../../package/gt-components/option/docs/demo.vue';
import PAGINATION from '../../package/gt-components/pagination/docs/demo.vue';
import RADIOBOX from '../../package/gt-components/radiobox/docs/demo.vue';
import SORTLABEL from '../../package/gt-components/sort-label/docs/demo.vue';
import SWITCH from '../../package/gt-components/switch/docs/demo.vue';
import TABLE from '../../package/gt-components/table/docs/demo.vue';
import TABLECOLUMN from '../../package/gt-components/table-column/docs/demo.vue';
import TABS from '../../package/gt-components/tabs/docs/demo.vue';
import TAG from '../../package/gt-components/tag/docs/demo.vue';
import TIMEPICKER from '../../package/gt-components/time-picker/docs/demo.vue';
import TIMELINE from '../../package/gt-components/timeline/docs/demo.vue';
import TIMELINEITEM from '../../package/gt-components/timelineitem/docs/demo.vue';
import TITLE from '../../package/gt-components/title/docs/demo.vue';
import TOOLTIP from '../../package/gt-components/tooltip/docs/demo.vue';
import TREE from '../../package/gt-components/tree/docs/demo.vue';
import UPLOADICON from '../../package/gt-components/upload-icon/docs/demo.vue';

const Route = useRoute();
const docTableRef = shallowRef(null);
const demoRef = shallowRef(null);
const demoSourceRef = shallowRef(null);

const mapObj = {
    'address-select' : ADDRESSSELECT ,
    'avatar' : AVATAR ,
    'button' : BUTTON ,
    'checkbox' : CHECKBOX ,
    'collapse-card' : COLLAPSECARD ,
    'collapse-card-section' : COLLAPSECARDSECTION ,
    'dialog' : DIALOG ,
    'divider' : DIVIDER ,
    'download-icon' : DOWNLOADICON ,
    'dropdown' : DROPDOWN ,
    'dropdownitem' : DROPDOWNITEM ,
    'filter-chips' : FILTERCHIPS ,
    'filter-chips-group' : FILTERCHIPSGROUP ,
    'form' : FORM ,
    'icon' : ICON ,
    'img-upload' : IMGUPLOAD ,
    'input' : INPUT ,
    'input-number' : INPUTNUMBER ,
    'layout' : LAYOUT ,
    'loading' : LOADING ,
    'loading-icon' : LOADINGICON ,
    'menu' : MENU ,
    'message' : MESSAGE ,
    'message-toast' : MESSAGETOAST ,
    'option' : OPTION ,
    'pagination' : PAGINATION ,
    'radiobox' : RADIOBOX ,
    'sort-label' : SORTLABEL ,
    'switch' : SWITCH ,
    'table' : TABLE ,
    'table-column' : TABLECOLUMN ,
    'tabs' : TABS ,
    'tag' : TAG ,
    'time-picker' : TIMEPICKER ,
    'timeline' : TIMELINE ,
    'timelineitem' : TIMELINEITEM ,
    'title' : TITLE ,
    'tooltip' : TOOLTIP ,
    'tree' : TREE ,
    'upload-icon' : UPLOADICON ,
}

const componentName = computed(async () => {
  let compName = Route.params.componentName;
  docTableRef.value = gtDocTable['' + compName];
  demoSourceRef.value = gtDoc['' + compName];
  demoRef.value = mapObj[compName]
  return compName;
});


</script>

<template>
  <div class="innerWrapper">
    <div class="w-full py-4 flex justify-center items-center">
      <div v-if="componentName" class="mb-3 px-2 pt-6 w-full 2xl:w-3/4">
        <template v-if="docTableRef">
          <div class="mb-4" v-for="item in docTableRef.show" :key="item">
            <v-md-editor v-model="docTableRef[item]" mode="preview" />
          </div>
        </template>
        <component :is="demoRef"></component>
        <v-md-editor
          v-if="demoSourceRef"
          v-model="demoSourceRef"
          mode="preview"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.innerWrapper {
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #d9d9d9;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #aaaaaa;
    &:hover {
      background-color: #666666;
    }
  }
}
.scrollbar__view,
.scrollbar__wrap {
  overflow: hidden;
}
</style>
