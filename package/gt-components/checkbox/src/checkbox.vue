<script setup>
import { computed, ref, toRefs } from 'vue';
import { isBoolean } from '@vueuse/core';

const emit = defineEmits(['change', 'update:modelValue']);

const CheckboxEnum = {
    GREEN: 'box-green',
    WHITE: 'box-white',
};

const props = defineProps({
    name: { default: null },
    formParentValue: { default: null },
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
        default: 'GREEN',
    },
    validResult: {
        default: {},
    },
    handleValChange: {
        type: Function,
    },
    checkedIcon: {
        type: String,
        default: () => 'check',
    },
    controlMode: {
        type: Boolean,
        default: () => false,
    },
});

const {
    name,
    formParentValue,
    disabled,
    label,
    value,
    parentValue,
    handleChildClick,
    type,
    validResult,
    handleValChange,
} = props;
const { modelValue, checkedIcon } = toRefs(props);

const errorMsg = computed(() => {
    return validResult[name]?.message;
});

const isChecked = isBoolean(formParentValue)
    ? ref(formParentValue)
    : parentValue
    ? computed(() => parentValue?.value)
    : computed(() => modelValue.value);

const classComputed = computed(() => {
    let arr = [
        'checkmark',
        CheckboxEnum[type.toUpperCase()] ? CheckboxEnum[type.toUpperCase()] : CheckboxEnum['GREEN'],
    ];
    if (isChecked.value || (props.checkedIcon && props.checkedIcon != 'check')) arr.push('checked');
    if (disabled) arr.push('disabled');
    return arr;
});

const onClick = () => {
    if (!disabled && handleChildClick) {
        handleChildClick(value);
    }
    if (!disabled && !handleChildClick) {
        let val = !isChecked.value;

        emit('update:modelValue', val);
        emit('change', val);

        if (handleValChange) {
            isChecked.value = val;
            handleValChange(val, name);
        }
    }
};
const labelShow = computed(() => {
    if (label instanceof Function) {
        return label();
    } else {
        return label;
    }
});
</script>

<script>
export default {
    name: 'GCheckbox',
};
</script>

<template>
    <div @click.prevent="onClick" class="gt-checkbox">
        <div :class="classComputed">
            <g-icon
                class="icon"
                classes="fas fa-check"
                size="md"
                v-show="(checkedIcon === 'check' && isChecked) || (checkedIcon && checkedIcon !== 'check')"
            />
        </div>
        <span :class="disabled ? 'label-disabled' : ''" class="label select-none" v-if="labelShow">{{
            labelShow
        }}</span>
        <span v-if="errorMsg" class="checkbox-error-msg">{{ errorMsg }}</span>
    </div>
</template>
