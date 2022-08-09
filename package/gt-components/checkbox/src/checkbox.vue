
<script setup>
import { computed, ref } from "vue";

const CheckboxEnum = {
  GREEN: "box-green",
  WHITE: "box-white",
};

const {
  disabled,
  modelValue,
  label,
  value,
  parentValue,
  handleChildClick,
  type,
} = defineProps({
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
  type: {
    type: String,
    default: "GREEN",
  },
});

const isChecked = parentValue
  ? computed(() => parentValue?.value?.includes(value))
  : ref(modelValue);

const emit = defineEmits(["update:modelValue"]);

const classComputed = computed(() => {
  let arr = [
    "checkmark",
    CheckboxEnum[type.toUpperCase()]
      ? CheckboxEnum[type.toUpperCase()]
      : CheckboxEnum["GREEN"],
  ];
  if (isChecked.value) arr.push("checked");
  if (disabled) arr.push("disabled");
  return arr;
});

const onClick = () => {
  if (!disabled && handleChildClick) {
    handleChildClick(value);
  }
  if (!disabled && !handleChildClick) {
    let val = !isChecked.value;
    // console.log('val', val);
    isChecked.value = val;
    emit("update:modelValue", val);
  }
};
</script>

<script>
export default {
  name: "GCheckbox",
};
</script>

<template>
  <div
    @click.prevent='onClick'
    class='gt-checkbox'
  >
    <input
      :checked='isChecked'
      type='checkbox'
    />
    <div :class='classComputed'>
      <g-icon
        class='icon'
        name='check'
        size='md'
        v-show='isChecked'
      />
    </div>
    <span
      :class='disabled ? "label-disabled" : ""'
      class='label select-none'
      v-if='label'
    >{{ label }}</span>
  </div>
</template>