<script setup>
import { computed, ref } from 'vue';
import GIcons from './GIcons.vue';

const { disabled, modelValue } = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const isChecked = ref(modelValue);
const emit = defineEmits(['update:modelValue']);
const onClick = () => {
  if (!disabled) {
    isChecked.value = !isChecked.value;
    //   console.log('!modelValue', !isChecked.value);
    emit('update:modelValue', !isChecked.value);
  }
};
</script>

<template>
  <div class="gt-checkobx" @click.prevent="onClick">
    <input type="checkbox" :checked="modelValue" />
    <div
      class="checkmark"
      :class="
        (modelValue ? 'checked' : '') + ' ' + (disabled ? 'disabled' : '')
      "
    >
      <g-icons v-show="modelValue" class="icon" name="check" />
    </div>
  </div>
</template>

<style lang="scss">
.gt-checkobx {
  width: 18px;
  height: 18px;
  @apply relative block;
  cursor: pointer;
  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2px;
    width: 18px;
    height: 18px;
    border: 1.5px solid #32a03d;
    background: #eef5eb;
    @apply transition-all duration-300;
  }

  .checked {
    background: #32a03d;
    .icon {
      color: #fff;
    }
  }
  .disabled {
    border: 1.5px solid #aaaaaa !important;
    background-color: #ffffff !important;
    @apply cursor-not-allowed;
    .icon {
      color: #aaaaaa;
    }
  }
}
</style>
