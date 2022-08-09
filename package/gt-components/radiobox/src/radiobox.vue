
<script setup>
import { computed, ref } from "vue";

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
const emit = defineEmits(["update:modelValue"]);

const onClick = () => {
  if (!disabled && handleChildClick && value) {
    handleChildClick(value);
  }

  if (!disabled && !handleChildClick) {
    let val = !isChecked.value;
    isChecked.value = val;
    emit("update:modelValue", val);
  }
};
</script>

<script>
export default {
  name: "GRadiobox",
};
</script>
<template>
  <div
    :class='disabled ? "disabled" : ""'
    @click.prevent='onClick'
    class='gt-radiobox'
  >
    <svg
      fill='none'
      height='20'
      viewBox='0 0 20 20'
      width='20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        :fill='
          disabled
            ? isChecked
              ? "#AAAAAA"
              : ""
            : isChecked
            ? "#32A03D"
            : "#EEF5EB"
        '
        height='19'
        rx='9.5'
        width='19'
        x='0.5'
        y='0.5'
      />
      <circle
        :class='isChecked ? "circle show" : "circle"'
        :fill='
          disabled
            ? isChecked
              ? "#AAAAAA"
              : ""
            : isChecked
            ? "#32A03D"
            : "#EEF5EB"
        '
        cx='10'
        cy='10'
        r='5.25'
      />
      <path
        d='M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM4.75173 10C4.75173 12.8985 7.10146 15.2483 10 15.2483C12.8985 15.2483 15.2483 12.8985 15.2483 10C15.2483 7.10146 12.8985 4.75173 10 4.75173C7.10146 4.75173 4.75173 7.10146 4.75173 10Z'
        fill='white'
        v-show='isChecked'
      />
      <rect
        :stroke='disabled ? "#AAA" : "#32A03D"'
        height='19'
        rx='9.5'
        width='19'
        x='0.5'
        y='0.5'
      />
    </svg>

    <span
      :class='disabled ? "label-disabled" : ""'
      class='label'
      v-if='label'
    >{{ label }}</span>
  </div>
</template>