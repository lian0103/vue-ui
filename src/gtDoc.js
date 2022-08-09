/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */

export default {
    button: ` \`\`\` html 
<template>
  <div>
    <g-title :level="1" class="mb-3">按鈕</g-title>

    <div class="mb-3 px-2 w-full md:w-3/4">
      <div class="mb-8">
        <g-title :level="2" class="mb-3">PILL</g-title>
        <div class="flex justify-between mb-3">
          <g-button pill>按鈕</g-button>
          <g-button pill type="yellow">按鈕</g-button>
          <g-button pill type="red">按鈕</g-button>
          <g-button pill type="white">按鈕</g-button>
        </div>
      </div>
      <div class="mb-8">
        <g-title :level="2" class="mb-3">FLAT - 1</g-title>

        <div class="flex justify-between mb-3">
          <g-button flat>按鈕</g-button>
          <g-button flat type="yellow">按鈕</g-button>
          <g-button flat type="red">按鈕</g-button>
          <g-button flat type="white">按鈕</g-button>
        </div>
      </div>

      <div class="mb-8">
        <g-title :level="2" class="mb-3">FLAT - 2</g-title>

        <div class="flex justify-between mb-3">
          <g-button flat><g-icons name="chevronLeft" />上一頁</g-button>
          <g-button flat type="yellow"
            ><g-icons name="chevronLeft" />上一頁</g-button
          >
          <g-button flat type="red"
            ><g-icons name="chevronLeft" />上一頁</g-button
          >
          <g-button flat type="white"
            ><g-icons name="chevronLeft" />上一頁</g-button
          >
        </div>
        <div class="flex justify-between mb-3">
          <g-button flat><g-icons name="chevronRight" />下一頁</g-button>
          <g-button flat type="yellow"
            ><g-icons name="chevronRight" />下一頁</g-button
          >
          <g-button flat type="red"
            ><g-icons name="chevronRight" />下一頁</g-button
          >
          <g-button flat type="white"
            ><g-icons name="chevronRight" />下一頁</g-button
          >
        </div>
      </div>

      <div class="mb-8">
        <g-title :level="2" class="mb-3">ROUND</g-title>
        <div class="w-full flex justify-between mb-3">
          <g-button round>按鈕</g-button>
          <g-button round type="yellow">按鈕</g-button>
          <g-button round type="red">按鈕</g-button>
          <g-button round type="black">按鈕</g-button>
          <g-button round type="white">按鈕</g-button>
        </div>
        <g-title :level="2" class="mb-3">ROUND-ICON</g-title>
        <div class="w-full flex justify-start mb-3 p-4">
          <g-button round type="black" icon="file" class="mr-4" />
          <g-button-close />
        </div>
      </div>
    </div>
  </div>
</template>
  \`\`\`  `,
    icon: ` \`\`\` html 
<script setup>
const icons = [
  'up',
  'arrowDown',
  'arrowLeft',
  'calendar',
  'check',
  'chevronDown',
  'chevronLeft',
  'chevronRight',
  'chevronUp',
  'circle',
  'down',
  'download',
  'ellipsis',
  'plus',
  'search',
  'sequence',
  'trash',
  'x',
];
</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="3" class="mb-3">sm:14px;md:24px;lg:36px;</g-title>
    <span
      class="flex justify-start mb-2"
      v-for="(item, idx) in icons"
      :key="item"
    >
      <template v-if="idx % 2 == 0">
        <div class="flex justify-center items-center leading-8 h-16">
          <g-icons :name="item" class="text-main" size="sm" />
          <g-icons :name="item" class="text-main" size="md" />
          <g-icons :name="item" class="text-main" size="lg" />
          <span class="text-gray-600 leading-10">
            {{ '<g-icons name="item}" size="sm | md | lg" />'}}
          </span>
        </div>
      </template>
      <template v-else>
        <div class="flex justify-center items-center leading-8 h-16">
          <g-icons :name="item" class="text-second" size="sm" />
          <g-icons :name="item" class="text-second" size="md" />
          <g-icons :name="item" class="text-second" size="lg" />
          <span class="text-gray-600 leading-10">
            {{ '<g-icons name="item}" size="sm | md | lg" />'}}
          </span>
        </div>
      </template>
    </span>
  </div>
</template>
  \`\`\`  `,
    title: ` \`\`\` html 
<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="1" class="mb-4">font-weight 700 / 24 / 標題</g-title>
    <g-title :level="2" class="mb-4">font-weight 500 / 20 / 標題</g-title>
    <g-title :level="3" class="mb-4">font-weight 400 / 18 / 標題</g-title>
    <g-title class="mb-4">font-weight 300 / 16 / 標題</g-title>
  </div>
</template>
  \`\`\`  `,
    checkbox: ` \`\`\` html 
<script setup>
import { reactive } from 'vue';
const inputs = reactive({
  checked0: true,
  checked1: false,
  checked2: true,
  checked3: false,
});
</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <div class="mb-3 flex w-full">
      <g-checkbox class="mr-4" v-model="inputs.checked0" label="選項1" />
      <g-checkbox class="mr-4" v-model="inputs.checked3" label="選項2" />
      <g-checkbox
        class="mr-4"
        v-model="inputs.checked1"
        label="選項3"
        disabled
      />
      <g-checkbox
        class="mr-4"
        v-model="inputs.checked2"
        label="選項4"
        disabled
      />
    </div>
  </div>
</template>
  \`\`\`  `,
    radiobox: ` \`\`\` html 
<script setup>
import { reactive } from 'vue';
const inputs = reactive({
  radio0: true,
  radio1: false,
  radio2: true,
  radio3: false,
});
</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <div class="mb-3 flex w-full">
      <g-radiobox class="mr-4" v-model="inputs.radio0" label="A" />
      <g-radiobox class="mr-4" v-model="inputs.radio1" label="B" />
      <g-radiobox class="mr-4" v-model="inputs.radio2" disabled label="C" />
      <g-radiobox class="mr-4" v-model="inputs.radio3" disabled label="D" />
    </div>
  </div>
</template>
  \`\`\`  `,
    switch: ` \`\`\` html 
<script setup>
import { reactive } from 'vue';
const inputs = reactive({
  switch0: false,
  switch1: true,
  switch2: false,
  switch3: true,
});
</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <div class="mb-3 flex w-full">
      <g-switch class="mr-4" v-model="inputs.switch0" />
      <g-switch class="mr-4" v-model="inputs.switch1" />
      <g-switch class="mr-4" v-model="inputs.switch2" statusLabel />
      <g-switch class="mr-4" v-model="inputs.switch3" statusLabel />
    </div>
  </div>
</template>
  \`\`\`  `,
    input: ` \`\`\` html 
<script setup>
import { reactive } from 'vue';

const inputs = reactive({
  input0: 'hello',
  input2: 123,
  input1: '',
});
</script>

<template>
  <div class="w-full mx-auto mb-6 relative">
    <g-title :level="2" class="mb-3">輸入框-size</g-title>
    <g-title :level="3" class="mb-3">middle height:43px</g-title>
    <g-input v-model="inputs.input0" size="md" />
    <g-title :level="3" class="mb-3">small height:36px</g-title>
    <g-input v-model="inputs.input0" size="sm" />

    <g-title :level="2" class="mb-3">輸入框-type</g-title>
    <g-title :level="3" class="mb-3">number</g-title>
    <g-input v-model="inputs.input2" type="number" label="數字" />
    <g-title :level="3" class="mb-3">password</g-title>
    <g-input v-model="inputs.input1" type="password" label="密碼" />

    <g-title :level="2" class="mb-3">輸入框-green</g-title>
    <g-input v-model="inputs.input0" green label="欄位" />
  </div>
</template>
  \`\`\`  `,
    tag: ` \`\`\` html 
<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">BORDER</g-title>
    <div class="w-1/2 flex justify-between mb-3">
      <g-tag type="default" border />
      <g-tag type="second" border />
      <g-tag type="warning" border />
      <g-tag type="danger" border />
    </div>

    <g-title :level="2" class="mb-3">NO BORDER</g-title>
    <div class="w-1/2 flex justify-between mb-3">
      <g-tag type="default" />
      <g-tag type="second" />
      <g-tag type="warning" />
      <g-tag type="danger" />
    </div>

    <g-title :level="2" class="mb-3">DOT</g-title>
    <div class="w-1/2 flex justify-between mb-3">
      <g-tag type="default" dot />
      <g-tag type="second" dot />
      <g-tag type="warning" dot />
      <g-tag type="danger" dot />
    </div>
    <g-title :level="2" class="mb-3">LABEL</g-title>
    <div class="w-1/2 flex justify-between mb-3">
      <g-tag type="default" dot label="訂單" />
      <g-tag type="second" border dot label="出貨" />
      <g-tag type="warning" dot label="警告" />
      <g-tag type="danger" border dot label="錯誤" />
    </div>

    <g-title :level="2" class="mb-3">OTHERS</g-title>
    <div class="w-1/2 flex justify-between mb-3">
      <g-tag type="activity" border />
    </div>
  </div>
</template>
  \`\`\`  `,
};

