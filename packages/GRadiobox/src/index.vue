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
  <div
    class="gt-radiobox"
    :class="disabled ? 'disabled' : ''"
    @click.prevent="onClick"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="19"
        height="19"
        rx="9.5"
        :fill="
          disabled
            ? isChecked
              ? '#AAAAAA'
              : ''
            : isChecked
            ? '#32A03D'
            : '#EEF5EB'
        "
      />
      <circle
        :class="isChecked ? 'circle show' : 'circle'"
        cx="10"
        cy="10"
        r="5.25"
        :fill="
          disabled
            ? isChecked
              ? '#AAAAAA'
              : ''
            : isChecked
            ? '#32A03D'
            : '#EEF5EB'
        "
      />
      <path
        v-show="isChecked"
        d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM4.75173 10C4.75173 12.8985 7.10146 15.2483 10 15.2483C12.8985 15.2483 15.2483 12.8985 15.2483 10C15.2483 7.10146 12.8985 4.75173 10 4.75173C7.10146 4.75173 4.75173 7.10146 4.75173 10Z"
        fill="white"
      />
      <rect
        x="0.5"
        y="0.5"
        width="19"
        height="19"
        rx="9.5"
        :stroke="disabled ? '#AAA' : '#32A03D'"
      />
    </svg>

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
  
  &.disabled {
    @apply cursor-not-allowed;
  }

  svg {
    margin-right: 10px;
  }

  .circle {
    display: none;
    @apply transition-all duration-300;
    &.show {
      display: block;
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
