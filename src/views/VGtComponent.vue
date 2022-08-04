/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */

<script setup>
import { useRoute } from 'vue-router';
import { computed, ref, markRaw } from 'vue';
import packagesList from '../../packages/list.json';
import gtDoc from '../assets/gtDoc';
import GButtonDemo from '../../packages/GButton/docs/demo.vue';
import GIconsDemo from '../../packages/GIcons/docs/demo.vue';
import GLoadingIconDemo from '../../packages/GLoadingIcon/docs/demo.vue';
import GUploadIconDemo from '../../packages/GUploadIcon/docs/demo.vue';
import GDownloadIconDemo from '../../packages/GDownloadIcon/docs/demo.vue';
import GImgUploadDemo from '../../packages/GImgUpload/docs/demo.vue';
import GTitleDemo from '../../packages/GTitle/docs/demo.vue';
import GLayoutDemo from '../../packages/GLayout/docs/demo.vue';
import GMenuDemo from '../../packages/GMenu/docs/demo.vue';
import GTabsDemo from '../../packages/GTabs/docs/demo.vue';
import GLoadingDemo from '../../packages/GLoading/docs/demo.vue';
import GMessageDemo from '../../packages/GMessage/docs/demo.vue';
import GMessageToastDemo from '../../packages/GMessageToast/docs/demo.vue';
import GCheckboxDemo from '../../packages/GCheckbox/docs/demo.vue';
import GRadioboxDemo from '../../packages/GRadiobox/docs/demo.vue';
import GRadioboxGroupDemo from '../../packages/GRadioboxGroup/docs/demo.vue';
import GSwitchDemo from '../../packages/GSwitch/docs/demo.vue';
import GFormDemo from '../../packages/GForm/docs/demo.vue';
import GInputDemo from '../../packages/GInput/docs/demo.vue';
import GDropdownDemo from '../../packages/GDropdown/docs/demo.vue';
import GDropdownItemDemo from '../../packages/GDropdownItem/docs/demo.vue';
import GTimePickerDemo from '../../packages/GTimePicker/docs/demo.vue';
import GTagDemo from '../../packages/GTag/docs/demo.vue';
import GTableDemo from '../../packages/GTable/docs/demo.vue';
import GPaginationDemo from '../../packages/GPagination/docs/demo.vue';
import GSortLabelDemo from '../../packages/GSortLabel/docs/demo.vue';
import GFilterOptionDemo from '../../packages/GFilterOption/docs/demo.vue';
import GDialogDemo from '../../packages/GDialog/docs/demo.vue';

const Route = useRoute();
const demoRef = ref(null);
const demoSourceRef = ref(null);

const mapObj = {
    GButton : GButtonDemo ,
    GIcons : GIconsDemo ,
    GLoadingIcon : GLoadingIconDemo ,
    GUploadIcon : GUploadIconDemo ,
    GDownloadIcon : GDownloadIconDemo ,
    GImgUpload : GImgUploadDemo ,
    GTitle : GTitleDemo ,
    GLayout : GLayoutDemo ,
    GMenu : GMenuDemo ,
    GTabs : GTabsDemo ,
    GLoading : GLoadingDemo ,
    GMessage : GMessageDemo ,
    GMessageToast : GMessageToastDemo ,
    GCheckbox : GCheckboxDemo ,
    GRadiobox : GRadioboxDemo ,
    GRadioboxGroup : GRadioboxGroupDemo ,
    GSwitch : GSwitchDemo ,
    GForm : GFormDemo ,
    GInput : GInputDemo ,
    GDropdown : GDropdownDemo ,
    GDropdownItem : GDropdownItemDemo ,
    GTimePicker : GTimePickerDemo ,
    GTag : GTagDemo ,
    GTable : GTableDemo ,
    GPagination : GPaginationDemo ,
    GSortLabel : GSortLabelDemo ,
    GFilterOption : GFilterOptionDemo ,
    GDialog : GDialogDemo ,
}

const componentName = computed(async () => {
  let compName = Route.params.componentName;
  demoSourceRef.value = gtDoc['' + compName];
  demoRef.value = mapObj[compName]
  return compName;
});


</script>

<template>
  <div class="innerWrapper">
    <div class="w-full py-4 flex justify-center items-center">
      <div v-if="componentName" class="mb-3 px-2 pt-6 w-full md:w-3/4">
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
