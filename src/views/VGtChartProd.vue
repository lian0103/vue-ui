/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据目录下的组件所生成的模块导出，请勿手动修改
 */

<script setup>
import { useRoute } from 'vue-router';
import { computed, shallowRef } from 'vue';

import gtDocTable from '../gtDocChartTable';
import gtDoc from '../gtDocChart';
    
import BARGRAPH from '../../docs/barGraph/demo.vue';

const Route = useRoute();
const docTableRef = shallowRef(null);
const demoRef = shallowRef(null);
const demoSourceRef = shallowRef(null);

const mapObj = {
    'barGraph' : BARGRAPH ,
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
