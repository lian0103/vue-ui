<script setup>
import {
  computed,
  ref,
  getCurrentInstance,
  watch,
  onMounted,
  toRefs,
} from "vue";
import { v4 as uuidv4 } from "uuid";

const inputUuid = uuidv4();
const instance = getCurrentInstance();
const TYPES = ["text", "number", "password", "tex-select", "textarea"];
const placeholderDefaultMap = {
  text: "輸入文字內容",
  number: "輸入數字內容",
  password: "輸入密碼",
};

const props = defineProps({
  name: {
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {},
  formParentValue:{},
  handleValChange:{},
  label: {
    type: String,
    default: null,
  },
  width: {
    type: Number,
    default: null,
  },
  type: {
    default: "text",
  },
  rows: {
    default: 3,
  },
  inputStyle: {},
  clearable: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  validResult: {
    default: {},
  },
  handleRulesValid: {
    type: Function,
  },
  size: {
    type: String,
    default: "sm",
  },

  onInput: {
    type: Function,
  },
  onBlur: {
    type: Function,
  },
  onFocus: {
    type: Function,
  },
  onChange: {
    type: Function,
  },

  icon: {
    type: String,
  },
  iconPosition: {
    type: String,
    default: "right",
  },
  searchSelectMode: {
    type: Boolean,
    default: false,
  },
  selectOptions: {
    type: Array,
  },
  selectedOptions: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

const value = ref(props.modelValue || props.formParentValue);

watch(
  () => props.modelValue,
  () => {
    value.value = props.modelValue;
  }
);

const {
  name,
  disabled,
  label,
  width,
  type,
  theme,
  clearable,
  placeholder,
  formParentValue,
  validResult,
  handleRulesValid,
  size,
  icon,
  iconPosition,
} = props;

const rows = computed(() => props.rows);
const inputStyle = ref(props.inputStyle);

const isFocused = ref(false);
// const inputVal = ref(modelValue || parentValue?.value || "");

const emit = defineEmits([
  "update:modelValue",
  "input",
  "focus",
  "blur",
  "change",
]);

const errorMsg = computed(() => {
  return validResult[name]?.message;
});

const classComputed = computed(() => {
  let classStr = [];
  if (theme) {
    classStr.push("gt-input-" + theme);
  }
  if (validResult[name]?.message) {
    classStr.push("gt-input-error");
  }
  if (size === "sm") {
    classStr.push("gt-input-sm");
  }
  if (icon) {
    classStr.push(`icon-${iconPosition}`);
  }

  return classStr;
});

const closeSelectOptions = () => {
  isFocused.value = false;
};
watch(
  [
    () => {
      return isFocused;
    },
  ],
  (newValue) => {
    if (newValue) {
      document.body.addEventListener("click", closeSelectOptions);
    } else {
      document.body.removeEventListener("click", closeSelectOptions);
    }
  },
  { deep: true }
);
const selectModeClassComputed = computed(() => {
  let arr = [];

  arr.push(isFocused.value ? "tp-aniIn" : "tp-aniOut");

  return arr;
});

const selectModeStyleComputed = computed(() => {
  return {
    width: "100%",
    // top: size === "sm" ? "40px" : "48px",
    left: "0px",
  };
});

const selectOptionsComputed = computed(() => {
  if (!props.modelValue) return props.selectOptions;

  return props.selectOptions.filter((item) => {
    return ("" + item.value).includes(props.modelValue);
  });
});

const handleClear = () => {
  handleInput(null, null);
  // debugger
  if (handleRulesValid) {
    handleRulesValid(value.value, name, "blur");
  }
};

const handleInput = (e, val) => {
  value.value = val ?? e?.target.value;

  if(props.handleValChange){
    props.handleValChange(value.value,props.name)
  }else{
    emit("update:modelValue", value.value);
    emit("input", value.value);
  }
};
const handleChange = (e, val) => {
  let temp = val ?? e.target.value;
  value.value = temp;
  emit("update:modelValue", temp);
  // debugger;
  emit("change", temp);
};
const handleSelectedOption = (item) => {
  props.selectedOptions[0] = item;
  handleChange(null, item.label);
  closeSelectOptions();
};
const handleFocus = (e) => {
  isFocused.value = true;
  emit("focus", e);
};
const handleBlur = (e) => {
  if (handleRulesValid && name) {
    handleRulesValid(value.value, name, "blur");
  }
  emit("blur", e);
};

const focusInput = (e) => {
  if (instance.refs[inputUuid]) {
    instance.refs[inputUuid].focus(e);
  }
};
const blurInput = (e) => {
  if (instance.refs[inputUuid]) {
    instance.refs[inputUuid].blur(e);
  }
};

defineExpose({
  focus: focusInput,
  blur: blurInput,
});
</script>
<script>
export default {
  name: "GInput",
};
</script>
<template>
  <div class="gt-input-wrapper">
    <div class="gt-input-label" v-if="label">{{ label }}</div>
    <div class="gt-relative" style="flex-grow: 1" @click.stop="() => {}">
      <input
        :ref="inputUuid"
        :class="classComputed"
        :style="width ? { width: width + 'px' } : {}"
        :placeholder="placeholder || placeholderDefaultMap[type]"
        :type="TYPES.includes(type) ? type : 'text'"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        class="gt-input"
        v-model="value"
        v-if="type !== 'textarea'"
      />
      <textarea
        v-else
        :ref="inputUuid"
        :class="classComputed"
        :style="inputStyle"
        :rows="rows"
        :placeholder="placeholder || placeholderDefaultMap[type]"
        :type="TYPES.includes(type) ? type : 'text'"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        class="gt-input"
        v-model="value"
      ></textarea>
      <!-- @update:modelValue="props.modelValue = $event" -->
      <g-icon
        @click.stop="handleClear"
        class="clear-icon"
        name="x"
        v-if="clearable && !icon"
      />
      <g-icon
        :class="`gt-input-icon-${iconPosition}`"
        :name="icon"
        v-if="icon"
      />
      <div class="gt-input-error-msg" v-if="errorMsg">{{ errorMsg }}</div>
      <div
        v-if="props.searchSelectMode"
        class="gt-input-select-mode"
        :class="selectModeClassComputed"
        :style="selectModeStyleComputed"
      >
        <template
          v-if="!props.selectOptions || props.selectOptions.length == 0"
        >
          無選項
        </template>
        <template v-else>
          <div
            class="gt-input-select-option"
            v-for="(item, idx) in selectOptionsComputed"
            :key="idx"
            @click="
              () => {
                handleSelectedOption(item);
              }
            "
          >
            {{ item.label }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
