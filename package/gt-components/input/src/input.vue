<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue";

const TYPES = ["text", "number", "password"];
const placeholderDefaultMap = {
  text: "輸入文字內容",
  number: "輸入數字內容",
  password: "輸入密碼",
};

const {
  name,
  disabled,
  modelValue,
  label,
  value,
  type,
  green,
  clearable,
  parentValue,
  parentvalue,
  placeholder,
  validResult,
  handleValChange,
  handleRulesValid,
  size,
} = defineProps({
  name: {
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {},
  label: {
    default: null,
  },
  value: {
    default: null,
  },
  type: {
    default: "text",
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  green: {
    type: Boolean,
    default: false,
  },
  parentValue: {
    default: null,
  },
  parentvalue: {
    default: null,
  },
  placeholder: {
    default: null,
  },
  validResult: {
    default: {},
  },

  handleValChange: {
    default: () => {},
  },
  handleRulesValid: {
    default: async () => {},
  },
  size: {
    type: String,
    default: "sm",
  },
});

const emit = defineEmits(["update:modelValue"]);

const errorMsg = computed(() => {
  return validResult[name]?.message;
});

const classComputed = computed(() => {
  let classStr = [];
  if (green) {
    classStr.push("gt-input-green");
  }
  if (validResult[name]?.message) {
    classStr.push("gt-input-error");
  }
  if (size === "sm") {
    classStr.push("gt-input-sm");
  }

  return classStr;
});

const inputVal = ref(modelValue || parentValue?.value || "");

const handleInput = (evt) => {
  if (parentValue) {
    // console.log('~~~', inputVal.value);
    handleValChange(inputVal.value, name);
  } else {
    emit("update:modelValue", inputVal.value);
  }
};

const handleBlur = async () => {
  //   console.log('in handleBlur~~', inputVal.value);
  if (handleRulesValid && name) {
    handleRulesValid(inputVal.value, name, "blur");
  }
};

const handleClear = () => {
  inputVal.value = "";
  handleValChange("", name);
  handleRulesValid(inputVal.value, name, "blur");
};
</script>
<script>
export default {
  name: "GInput",
};
</script>
<template>
  <div class='gt-input-wrapper'>
    <div
      class='gt-input-label'
      v-if='label'
    >{{ label }}</div>
    <div class='gt-relative'>
      <input
        :class='classComputed'
        :placeholder='placeholder || placeholderDefaultMap[type]'
        :type='TYPES.includes(type) ? type : "text"'
        @blur='handleBlur'
        @change='handleInput'
        class='gt-input'
        v-model='inputVal'
      />
      <g-icon
        @click.stop='handleClear'
        class='clear-icon'
        name='x'
        v-if='clearable'
      />
      <div
        class='gt-input-error-msg'
        v-if='errorMsg'
      >{{ errorMsg }}</div>
    </div>
  </div>
</template>