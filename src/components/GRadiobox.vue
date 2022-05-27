<script>
export default {
  name: 'gt-radiobox',
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup>
import { computed, ref } from 'vue';

const { disabled, modelValue, value, parentValue, handleChildClick } =
  defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      default: null,
    },
    value: {
      default: null,
    },
    parentValue: {
      default: null,
    },
    handleChildClick: {
      default: null,
    },
  });
const isChecked = parentValue
  ? computed(() => {
      return value === parentValue.value;
    })
  : ref(modelValue);
const emit = defineEmits(['update:modelValue']);

const onClick = () => {
  if (!disabled && handleChildClick && value) {
    handleChildClick(value);
  }

  if (!disabled && !handleChildClick) {
    let val = !isChecked.value;
    isChecked.value = val;
    emit('update:modelValue', val);
  }
};
</script>

<template>
  <div class="gt-radiobox" @click.prevent="onClick">
    <input type="radio" :checked="isChecked" />
    <div
      class="checkmark"
      :class="(isChecked ? 'checked' : '') + ' ' + (disabled ? 'disabled' : '')"
    >
      <div v-show="isChecked" class="circle"></div>
    </div>
    <span
      class="label"
      v-if="label"
      :class="disabled ? 'label-disabled' : ''"
      >{{ label }}</span
    >
  </div>
</template>

<style lang="scss">
.gt-radiobox {
  padding: 0 10px 0 22px;
  @apply relative block rounded-full cursor-pointer;
  input {
    @apply absolute w-0 h-0 opacity-0 cursor-pointer;
  }
  .checkmark {
    width: 20px;
    height: 20px;
    @apply absolute top-0 left-0;
    @apply rounded-full border-1.5 border-solid border-main bg-color1;
    @apply transition-all duration-300;
  }

  .checked {
    @apply flex justify-center items-center;
    .circle {
      @apply w-1/2 h-1/2 bg-main rounded-full;
    }
  }
  .disabled {
    @apply cursor-not-allowed bg-white border-1.5 border-solid border-gray0;
    .circle {
      @apply w-1/2 h-1/2 rounded-full bg-gray0;
    }
  }
  .label {
    @apply select-none;
    &.label-disabled {
      @apply cursor-not-allowed text-gray0;
    }
  }
}
</style>
