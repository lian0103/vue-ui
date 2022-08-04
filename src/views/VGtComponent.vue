<script setup>
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import packagesList from '../../packages/list.json';
import gtDoc from '../assets/gtDoc';

const Route = useRoute();
const readmeRef = ref(null);
const demoSourceRef = ref(null);

const componentName = computed(async () => {
  // console.log('componentName', Route.params.componentName);
  let compName = Route.params.componentName;
  try {
    let path = '/' + compName + '/';
    readmeRef.value = await import('../../packages' + path + 'docs/demo.vue');
    demoSourceRef.value = gtDoc['' + compName];
    console.log(compName);
  } catch (error) {
    readmeRef.value = null;
  }
  return compName;
});
</script>

<template>
  <div class="innerWrapper">
    <div class="w-full py-4 flex justify-center items-center">
      <div v-if="componentName" class="mb-3 px-2 pt-6 w-full md:w-3/4">
        <component :is="readmeRef?.default"></component>

        <h2>{{ Route.params.componentName }}</h2>
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
.scrollbar__view , .scrollbar__wrap{
  overflow: hidden;
}
</style>
