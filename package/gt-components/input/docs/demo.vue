<script setup>
import { reactive, getCurrentInstance } from 'vue';

const instance = getCurrentInstance();

const inputs = reactive({
    input0: 'hello',
    input2: 123,
    input1: '',
    select: null,
});

const selectOptions = [
    { label: 'aaa', value: 'aaa' },
    { label: 'bbb', value: 'bbb' },
    { label: 'ccc', value: 'ccc' },
];

const handleBlurEvent = (e) => {
    console.log('blur', e);
};

const handleFocusEvent = (e) => {
    console.log('focus', e);
};

const handleFocusInput = () => {
    // console.log(instance.refs.inputA);
    instance.refs.inputA.focus();
};

const handleKeyup = (e) => {
    console.log(e.target.value);
};
</script>

<template>
    <div class="w-full mx-auto mb-6 relative inputDemoBox">
        <g-title :level="2" class="mb-3">input @keyup</g-title>
        <g-input green v-model="inputs.input0" @keyup="handleKeyup" />
        <g-divider />

        <g-title :level="2" class="mb-3">search Select Mode</g-title>
        <div class="fit">
            <g-input
                v-model="inputs.select"
                size="sm"
                green
                clearable
                searchSelectMode
                :selectOptions="selectOptions"
                @keyup="handleKeyup"
            />
        </div>

        <g-divider />

        <g-title :level="2" class="mb-3">input @focus</g-title>
        <div class="flex">
            <g-input ref="inputA" v-model="inputs.input0" size="sm" green />
            <g-button pill @click="handleFocusInput">focus input</g-button>
        </div>

        <g-divider />

        <g-title :level="2" class="mb-3">icon left </g-title>
        <g-input v-model="inputs.input0" size="sm" icon="search" iconPosition="left" green />

        <g-divider />

        <g-title :level="2" class="mb-3">icon right </g-title>
        <div class="fit">
            <g-input v-model="inputs.input0" icon="search" />
        </div>

        <g-divider />

        <g-title :level="2" class="mb-3">clearable</g-title>
        <g-input v-model="inputs.input0" green clearable />

        <g-divider />

        <g-title :level="2" class="mb-3">事件(blur、focus)</g-title>
        <g-input v-model="inputs.input0" @blur="handleBlurEvent" @focus="handleFocusEvent" />

        <g-divider />

        <g-title :level="2" class="mb-3">輸入框-width 200</g-title>
        <g-input v-model="inputs.input0" size="sm" :width="200" />

        <g-divider />

        <g-title :level="2" class="mb-3">輸入框-size</g-title>
        <g-title :level="3" class="mb-3">middle height:43px</g-title>
        <g-input v-model="inputs.input0" size="md" clearable />
        <g-title :level="3" class="mb-3">small height:36px</g-title>
        <g-input v-model="inputs.input0" size="sm" clearable />

        <g-divider />

        <g-title :level="2" class="mb-3">輸入框-type</g-title>
        <g-title :level="3" class="mb-3">number</g-title>
        <g-input v-model="inputs.input2" type="number" label="數字" />
        <g-divider />
        <g-title :level="3" class="mb-3">password</g-title>
        <g-input v-model="inputs.input1" type="password" label="密碼" />
        <g-divider />

        <g-title :level="2" class="mb-3">輸入框-green</g-title>
        <g-input v-model="inputs.input0" green label="欄位" />
    </div>
</template>

<style lang="scss">
.inputDemoBox {
    .gt-input {
        width: 243px;
    }
}
.fit {
    width: fit-content;
}
</style>
