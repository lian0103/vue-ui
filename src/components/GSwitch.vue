<script setup>
import { computed, ref } from 'vue';

const { modelValue, statusLabel } = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  statusLabel: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);
const isChecked = ref(modelValue);
const onClick = () => {
    let val = !isChecked.value;
    // console.log('val', val);
    isChecked.value = val;
    emit('update:modelValue', val);
};
</script>

<template>
  <div class="gt-switch-input" @click.prevent="onClick">
    <div class="relative">
      <input type="checkbox" :checked="modelValue" />
      <div class="bar" :class="modelValue ? 'bg-open' : 'bg-close'"></div>
      <div class="dot" :class="modelValue ? 'checked' : ''"></div>
    </div>
    <div class="label-text">
      {{ statusLabel ? (modelValue ? '開啟' : '關閉') : '' }}
    </div>
  </div>
</template>

<style lang="scss">
.gt-switch-input {
  @apply flex items-center cursor-pointer;
  input {
    @apply absolute w-0 h-0 opacity-0 cursor-pointer;
  }
  .bar {
    @apply block w-10 h-5 rounded-full bg-gray-300;

    &.bg-close {
      @apply bg-gray-300;
    }
    &.bg-open {
      @apply bg-main;
    }
  }

  .dot {
    @apply absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition;
    &.checked {
      transform: translateX(120%);
    }
  }
  .label-text {
    margin: 0 10px;
    letter-spacing: 0.8px;
    @apply text-gray0 select-none font-normal leading-4 text-base;
  }
}
</style>
