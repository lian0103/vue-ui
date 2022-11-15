<script setup>
import { computed, ref, toRefs, h, useSlots, watch } from "vue";
const emits = defineEmits(["update:modelValue", "change"]);
const slots = ref(useSlots());
const props = defineProps({
  modelValue: {},
  multiple: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  placeholder: {
    type: String,
    default: () => null,
  },
  bindResult: {
    type: String,
    default: () => "index",
  },
});
const { modelValue, multiple, bindResult } = toRefs(props);
const optionList = ref([]);

const showOption = ref(false);
const toggleOption = () => {
  showOption.value = !showOption.value;
};

watch(
  () => {
    return showOption.value;
  },
  (val) => {
    if (val) {
      document.body.addEventListener("click", toggleOption);
    } else {
      document.body.removeEventListener("click", toggleOption);
    }
  }
);

const updateModelValue = (result, idx, option) => {
  let resultModelValue = modelValue.value;
  if (multiple.value) {
    resultModelValue = resultModelValue ?? [];
    if (result === false) {
      resultModelValue.splice(
        resultModelValue.indexOf(option[bindResult.value]),
        1
      );
    } else {
      resultModelValue.push(option[bindResult.value]);
    }
  } else {
    resultModelValue = option[bindResult.value];
  }
  handleChange(resultModelValue);
  emits("update:modelValue", resultModelValue);
};

const list = computed(() => {
  let options = [];
  let result = findAllOption(slots.value.default()).map((child, idx) => {
    let option = {
      index: idx,
      label: child.props.label,
      value: child.props.value,
    };
    options.push(option);
    let selected = false;
    if (multiple.value) {
      selected = modelValue.value?.indexOf(option[bindResult.value]) > -1;
    } else {
      selected = modelValue.value === option[bindResult.value];
    }
    let result = {
      ...child,
      props: {
        ...child.props,
        index: idx,
        selected: selected,
        onToggleOption: multiple.value ? () => {} : toggleOption,
        "onUpdate:selected": updateModelValue,
      },
    };
    return result;
  });
  optionList.value = options;
  return result;
});

const findAllOption = (slots) => {
  let result = [];
  for (let i = 0; i < slots.length; i++) {
    if (slots[i].children?.length !== 0 && slots[i].children instanceof Array) {
      result.push(...findAllOption(slots[i].children));
    } else if (
      slots[i].type instanceof Object &&
      slots[i].type.name === "GOption"
    ) {
      result.push(slots[i]);
    }
  }
  return result;
};
const optionsRender = computed(() => {
  return h("div", { class: "gt-select-option" }, list.value);
});

const inputValue = computed(() => {
  let result = "";
  if (multiple.value) {
    result = (
      optionList.value?.filter((record) => {
        if (modelValue.value?.indexOf(record[bindResult.value]) > -1) {
          return true;
        }
        return false;
      }) ?? []
    ).map((record) => {
      return record.label;
    });
    return result.join(", ");
  } else {
    result = optionList.value?.filter((record) => {
      return record[bindResult.value] === modelValue.value;
    });
    return result[0]?.label;
  }
});

const handleChange = (model) => {
  emits("change", model);
};
</script>
<script>
export default {
  name: "GSelect",
};
</script>
<template>
  <div class="gt-select-wrapper">
    <div class="gt-select-content-wrapper" @click.stop="toggleOption">
      <div class="gt-select-content">
        <div class="gt-select-prefix">
          <slot name="prefix"></slot>
        </div>
        <input
          :placeholder="placeholder"
          :value="inputValue"
          class="gt-select-input"
          :readonly="true"
        />

        <div class="gt-select-suffix">
          <g-icon
            class="gt-icon-rotate-90"
            style="display: contents; width: 24px; height: 24px; color: #55585e"
            name="right"
          />
        </div>
      </div>
    </div>
    <div
      class="gt-select-option-wrapper"
      v-show="showOption"
      :class="{ 'tp-aniIn': showOption, 'tp-aniOut': !showOption }"
    >
      <options-render></options-render>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>