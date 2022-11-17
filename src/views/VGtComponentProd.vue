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
    
import AVATAR from '../../docs/avatar/demo.vue';
import BUTTON from '../../docs/button/demo.vue';
import CHECKBOX from '../../docs/checkbox/demo.vue';
import COLLAPSECARD from '../../docs/collapse-card/demo.vue';
import COLLAPSECARDSECTION from '../../docs/collapse-card-section/demo.vue';
import DIALOG from '../../docs/dialog/demo.vue';
import DIVIDER from '../../docs/divider/demo.vue';
import DOWNLOADICON from '../../docs/download-icon/demo.vue';
import DROPDOWN from '../../docs/dropdown/demo.vue';
import DROPDOWNITEM from '../../docs/dropdownitem/demo.vue';
import FILTERCHIPS from '../../docs/filter-chips/demo.vue';
import FILTERCHIPSGROUP from '../../docs/filter-chips-group/demo.vue';
import FORM from '../../docs/form/demo.vue';
import ICON from '../../docs/icon/demo.vue';
import IMGUPLOAD from '../../docs/img-upload/demo.vue';
import INPUT from '../../docs/input/demo.vue';
import INPUTNUMBER from '../../docs/input-number/demo.vue';
import LAYOUT from '../../docs/layout/demo.vue';
import LOADING from '../../docs/loading/demo.vue';
import LOADINGICON from '../../docs/loading-icon/demo.vue';
import MENU from '../../docs/menu/demo.vue';
import MESSAGE from '../../docs/message/demo.vue';
import MESSAGETOAST from '../../docs/message-toast/demo.vue';
import OPTION from '../../docs/option/demo.vue';
import PAGINATION from '../../docs/pagination/demo.vue';
import PAGINATION2 from '../../docs/pagination2/demo.vue';
import RADIOBOX from '../../docs/radiobox/demo.vue';
import SELECT from '../../docs/select/demo.vue';
import SORTLABEL from '../../docs/sort-label/demo.vue';
import SWITCH from '../../docs/switch/demo.vue';
import TABLE from '../../docs/table/demo.vue';
import TABLECOLUMN from '../../docs/table-column/demo.vue';
import TABLE2 from '../../docs/table2/demo.vue';
import TABS from '../../docs/tabs/demo.vue';
import TAG from '../../docs/tag/demo.vue';
import TIMEPICKER from '../../docs/time-picker/demo.vue';
import TIMELINE from '../../docs/timeline/demo.vue';
import TIMELINEITEM from '../../docs/timelineitem/demo.vue';
import TITLE from '../../docs/title/demo.vue';
import TOOLTIP from '../../docs/tooltip/demo.vue';
import TREE from '../../docs/tree/demo.vue';
import UPLOADICON from '../../docs/upload-icon/demo.vue';

const Route = useRoute();
const docTableRef = shallowRef(null);
const demoRef = shallowRef(null);
const demoSourceRef = shallowRef(null);

const mapObj = {
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
    'pagination2' : PAGINATION2 ,
    'radiobox' : RADIOBOX ,
    'select' : SELECT ,
    'sort-label' : SORTLABEL ,
    'switch' : SWITCH ,
    'table' : TABLE ,
    'table-column' : TABLECOLUMN ,
    'table2' : TABLE2 ,
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
