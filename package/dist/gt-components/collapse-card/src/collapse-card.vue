<script setup>
import { ref } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const isOpenRef = ref(props.isOpen);
</script>
<script>
export default {
  name: "GCollapseCard",
};
</script>
<template>
  <div class="gt-collapse-card" :class="isOpenRef ? 'open' : ''">
    <div class="title-row" @click="isOpenRef = !isOpenRef">
      <slot name="title" />
      <div>
        <slot v-if="$slots.icon" name="icon"></slot>
        <g-icon
          v-else
          name="chevron-right"
          :style="{
            transform: `rotate(${isOpenRef ? '90' : '0'}deg)`,
            color: '#55585E',
          }"
        />
      </div>
    </div>
    <g-divider
      v-show="isOpenRef ? true : false"
      :style="'margin: 0px 0px 12px'"
    />

    <div class="content-row" :class="isOpenRef ? 'open' : ''">
      <span> <slot name="content" /></span>
    </div>
  </div>
</template>
