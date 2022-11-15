<script setup>
import { toRefs, defineEmits, defineProps } from "vue";
const emits = defineEmits([
  "update:modelValue",
  "update:selected",
  "toggleOption",
]);
const props = defineProps({
  modelValue: {},
  selected: {
    type: Boolean,
    default: () => false,
  },
  label: {
    type: String,
    default: () => null,
  },
  value: {
    default: () => null,
  },
  index: {
    type: Number,
    default: () => 0,
  },
});
const { selected, label, value, index } = toRefs(props);
const handleClick = () => {
  emits("update:selected", !selected.value, index.value, {
    label: label.value,
    value: value.value,
    index: index.value,
  });
  emits("update:modelValue", !selected.value);
  emits("toggleOption");
};
</script>
<script>
export default {
  name: "GOption",
};
</script>
<template>
  <div class="gt-option-wrapper" :class="{ selected: selected }">
    <div class="gt-option-content-wrapper" @click.stop="handleClick">
      <div class="gt-option-content">
        <div class="gt-option-prefix">
          <g-icon
            :style="{
              display: 'grid',
              'align-content': 'center',
              width: '24px',
              height: '24px',
            }"
            name="check"
          />
        </div>
        <div class="gt-option-label">
          <p>{{ label }}</p>
        </div>
        <div class="gt-option-suffix"></div>
      </div>
    </div>
  </div>
</template>