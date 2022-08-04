<script setup>
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';

const Route = useRoute();
const readmeRef = ref(null);
const isDev = import.meta.env.MODE === 'development';
const componentName = computed(async () => {
    // console.log('componentName', Route.params.componentName);
  let compName = Route.params.componentName;
  try {
    let path = isDev ? '/'+compName+'/' : import.meta.env.BASE_URL + 'packages/'+compName+'/docs/README.md';
    readmeRef.value = isDev ? await import("../../packages"+path+"docs/README.md") : await fetch(path).then(res=>res.body);
    console.log('readmeRef.value',readmeRef.value)
  } catch (error) {
    readmeRef.value = null;
  }
  return compName;
});



</script>

<template>
  <div class="innerWrapper"> 
    <div class="w-full py-4 flex justify-center items-center">
      <div v-if="componentName" class="mb-3 px-2 pt-6 w-full md:w-3/4 ">
        <template v-if="isDev">
          <component :is="readmeRef?.default"></component>
        </template>
        <template v-else>
          <component :is="readmeRef"></component>
        </template>
      </div>
    </div>
  </div>



</template>

<style lang="scss" scoped>
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
</style>
