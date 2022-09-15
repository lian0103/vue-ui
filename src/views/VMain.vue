<script setup>
import { onMounted, onBeforeUpdate, computed , ref } from 'vue';
import VMenu from './VMenu.vue';
import appInfo from '../stores';
import { useRouter } from 'vue-router';
import gsap from 'gsap';

const Router = useRouter();

const nameComputed = computed(()=>{
  let cName = Router.currentRoute.value.params?.componentName || null;
  return cName ? `GT元件-${cName}` : 'GT元件'
})

onMounted(() => {
  const timeline = gsap.timeline({ defaults: { duration: 1 } });
  timeline
    .from('.gt-e-menu', { x: '-100%', ease: 'power1.in' })
    .from('.gt-header', { y: '-100%' })
    .fromTo('.gt-content', { opacity: 0 }, { opacity: 1 });
});

onBeforeUpdate(() => {
  const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
  timeline
    .to('.gt-content', { opacity: 0 })
    // .from('.gt-header', { y: '-100%' })
    .fromTo('.gt-content', { opacity: 0 }, { opacity: 1, ease: 'power1.in' });
});

const handleCollapsed = (val)=>{
  // console.log('handleCollapsed',val)
  appInfo.value.isCollapsed = val;
}

</script>

<template>
  <g-layout
    class="layout"
    headText="Great Tree UI"
    :title="nameComputed"
    @collapsed="handleCollapsed"
  >
    <template #sidebar>
      <v-menu class="gt-e-menu" />
    </template>
    <template #header>
      <div class="w-1/4 flex justify-center items-center px-4">
        <span>v0.0.23</span>
      </div>
    </template>
    <template #content>
      <router-view name="mainView"></router-view>
    </template>
  </g-layout>
</template>
