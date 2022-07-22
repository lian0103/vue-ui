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
    <div
      class="checkmark"
      :class="(isChecked ? 'checked' : '') + ' ' + (disabled ? 'disabled-outline' : '')"
    >
      <div class="circle" :class="isChecked?'show':''"></div>
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
  width: fit-content;
  padding: 0 15px 0 0px;
  line-height: 20px;
  height: 20px;
  min-width: 20px;
  @apply relative cursor-pointer flex justify-start;

  .checkmark {
    width: 16px;
    height: 16px;
    @apply relative;
    left: 0px;
    top: 0px;
    margin-right: 10px;
    @apply rounded-full bg-color1;
    @apply outline-2 outline-main outline;
    @apply transition-all duration-300;
    @apply flex justify-center items-center;
  }

  .checked {
    .circle {
      width: 10px;
      height: 10px;
      background-image: url('../assets/icons/dot-green.svg');
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0;
      &.show{
        opacity: 1;
      }
    }
  }
  .disabled-outline {
    @apply cursor-not-allowed bg-white;
    @apply outline-2 outline-gray0 outline;
    .circle {
      background-image: url('../assets/icons/dot-gray.svg');
      background-repeat: no-repeat;
      background-size: cover;
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
