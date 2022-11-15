<script setup>
import { computed, ref } from "vue";

const { modelValue, statusLabel } = defineProps({
  modelValue: {
    // type: Boolean,
    default: false,
  },
  statusLabel: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);
const isChecked = ref(modelValue);
const onClick = () => {
  let val = !isChecked.value;
  // console.log('val', val);
  isChecked.value = val;
  emit("update:modelValue", val);
};
</script>
<script>
export default {
  name: "GSwitch",
};
</script>
<template>
  <div
    @click.prevent='onClick'
    class='gt-switch-input'
  >
    <div class='gt-relative'>
      <input
        :checked='modelValue'
        type='checkbox'
      />
      <div
        :class='modelValue ? "bg-open" : "bg-close"'
        class='bar'
      ></div>
      <div
        :class='modelValue ? "checked" : ""'
        class='dot'
      ></div>
    </div>
    <div class='label-text'>{{ statusLabel ? (modelValue ? '開啟' : '關閉') : '' }}</div>
  </div>
</template>