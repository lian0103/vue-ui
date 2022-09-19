/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */

export default {
    'button': ` \`\`\` html 
<template>
  <div>
    <g-title :level="1" class="mb-3">按鈕</g-title>

    <div class="mb-3 px-2 w-full md:w-3/4">
      <div class="mb-8">
        <g-title :level="2" class="mb-3">loading</g-title>
        <div class="flex justify-between mb-3">
          <g-button pill icon="search" :isLoading="true">按鈕</g-button>
          <g-button pill icon="search" :isLoading="true" type="yellow">按鈕</g-button>
          <g-button pill icon="search" :isLoading="true" type="red">按鈕</g-button>
        </div>
        <g-title :level="2" class="mb-3">icon left</g-title>
        <div class="flex justify-between mb-3">
          <g-button pill icon="search">按鈕</g-button>
          <g-button flat icon="search">按鈕</g-button>
        </div>
        <g-title :level="2" class="mb-3">icon right</g-title>
        <div class="flex justify-between mb-3">
          <g-button pill icon="search" iconPosition="right">按鈕</g-button>
          <g-button flat icon="search" iconPosition="right">按鈕</g-button>
        </div>
      </div>
      <div class="mb-8">
        <g-title :level="2" class="mb-3">width 200</g-title>
        <g-button pill :width="200">按鈕</g-button>
      </div>
      <div class="mb-8">
        <g-title :level="2" class="mb-3">PILL</g-title>
        <div class="flex justify-between mb-3">
          <g-button pill>按鈕</g-button>
          <g-button pill type="green">按鈕</g-button>
          <g-button pill type="yellow">按鈕</g-button>
          <g-button pill type="red">按鈕</g-button>
          <g-button pill type="white">按鈕</g-button>
        </div>
      </div>
      <div class="mb-8">
        <g-title :level="2" class="mb-3">FLAT - 1</g-title>

        <div class="flex justify-between mb-3">
          <g-button flat>按鈕</g-button>
          <g-button flat type="green">按鈕</g-button>
          <g-button flat type="yellow">按鈕</g-button>
          <g-button flat type="red">按鈕</g-button>
          <g-button flat type="white">按鈕</g-button>
        </div>
      </div>

      <div class="mb-8">
        <g-title :level="2" class="mb-3">FLAT - 2</g-title>

        <div class="flex justify-between mb-3">
          <g-button flat><g-icon name="chevron-left" />上一頁</g-button>
          <g-button flat type="green"
            ><g-icon name="chevron-left" />上一頁</g-button
          >
          <g-button flat type="yellow"
            ><g-icon name="chevron-left" />上一頁</g-button
          >
          <g-button flat type="red"
            ><g-icon name="chevron-left" />上一頁</g-button
          >
          <g-button flat type="white"
            ><g-icon name="chevron-left" />上一頁</g-button
          >
        </div>
        <div class="flex justify-between mb-3">
          <g-button flat><g-icon name="chevron-right" />下一頁</g-button>
          <g-button flat type="green"
            ><g-icon name="chevron-right" />下一頁</g-button
          >
          <g-button flat type="yellow"
            ><g-icon name="chevron-right" />下一頁</g-button
          >
          <g-button flat type="red"
            ><g-icon name="chevron-right" />下一頁</g-button
          >
          <g-button flat type="white"
            ><g-icon name="chevron-right" />下一頁</g-button
          >
        </div>
      </div>

      <div class="mb-8">
        <g-title :level="2" class="mb-3">ROUND</g-title>
        <div class="w-full flex justify-between mb-3">
          <g-button round>按鈕</g-button>
          <g-button round type="green">按鈕</g-button>
          <g-button round type="yellow">按鈕</g-button>
          <g-button round type="red">按鈕</g-button>
          <g-button round type="black">按鈕</g-button>
          <g-button round type="white">按鈕</g-button>
        </div>
        <g-title :level="2" class="mb-3">ROUND-ICON</g-title>
        <div class="w-full flex justify-start mb-3 p-4">
          <g-button
            round
            type="black"
            icon="file"
            class="mr-4"
            iconNarrowPadding
          />
        </div>
      </div>
    </div>
  </div>
</template>
  \`\`\`  `,
    'icon': ` \`\`\` html 
<script setup>
const icons = [
  'up',
  'arrow-down',
  'arrow-left',
  'calendar',
  'check',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'circle',
  'down',
  'download',
  'ellipsis',
  'plus',
  'search',
  'sequence',
  'trash',
  'x',
  'distribute',
  'home',
  'info',
  'items',
  'lock',
  'setting',
  'store',
  'tool',
  'user',
  'menu',
];

const customIconClasses = '寫法: <g-icon classes="fa-solid fa-store" />。渲染結果:<i class="gt-icon gt-icon-md fa-solid fa-store"></i>';
</script>

<template>
  <g-title :level="3" class="mb-3 w-full">sm:14px;md:24px;lg:36px;</g-title>
  <div class="mb-3 px-2 w-full md:w-3/4 flex flex-wrap justify-between">
    <span
      class="flex justify-start mb-2 w-1/2"
      v-for="(item, idx) in icons"
      :key="item"
    >
      <div class="flex justify-center items-center leading-4">
        <template v-if="idx % 2 == 0">
          <g-icon :name="item" class="text-purple-600 mr-2" size="sm" />
          <g-icon :name="item" class="text-purple-600 mr-2" size="md" />
          <g-icon :name="item" class="text-purple-600 mr-2" size="lg" />
        </template>
        <template v-else>
          <g-icon :name="item" class="text-blue-600" size="sm" />
          <g-icon :name="item" class="text-blue-600" size="md" />
          <g-icon :name="item" class="text-blue-600" size="lg" />
        </template>
        <span class="text-gray-600 leading-10">
          {{ '<g-icon name="item}" />'}}
        </span>
      </div>
    </span>
  </div>

  <g-title :level="3" class="mb-3 w-full">自定義classes</g-title>
  <g-icon classes="fa-solid fa-store" />
  {{ customIconClasses }}
</template>
  \`\`\`  `,
    'title': ` \`\`\` html 
<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="1" class="mb-4">font-weight 700 / 24 / 標題</g-title>
    <g-title :level="2" class="mb-4">font-weight 500 / 20 / 標題</g-title>
    <g-title :level="3" class="mb-4">font-weight 400 / 18 / 標題</g-title>
    <g-title class="mb-4">font-weight 300 / 16 / 標題</g-title>
  </div>
</template>
  \`\`\`  `,
    'checkbox': ` \`\`\` html 
<script setup>
import { reactive } from 'vue';
const inputs = reactive({
  checked0: true,
  checked1: false,
  checked2: true,
  checked3: false,
  checkedArr: ['2', 22, 2, 8],
});
</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <div class="w-full md:w-3/4 relative">
      <g-title :level="2" class="mb-3">勾選框</g-title>
    </div>
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

    <div class="w-full md:w-3/4 relative">
      <g-title :level="2" class="mb-3">群組勾選框</g-title>
    </div>
    <div class="mb-3 px-2 w-full md:w-3/4">
      <p class="py-2">inputs.checkedArr:{{ inputs.checkedArr }}</p>
      <g-checkbox-group class="mb-3 flex w-full" v-model="inputs.checkedArr">
        <g-checkbox class="mr-4" :value="2" label="選項2" />
        <g-checkbox class="mr-4" :value="4" label="選項4" />
        <g-checkbox class="mr-4" :value="6" label="選項6" disabled />
        <g-checkbox class="mr-4" :value="8" label="選項8" disabled />
      </g-checkbox-group>
    </div>
  </div>
</template>
  \`\`\`  `,
    'radiobox': ` \`\`\` html 
<script setup>
import { reactive } from 'vue';
const inputs = reactive({
  radio0: true,
  radio1: false,
  radio2: true,
  radio3: false,
  radio4: 2,
});
</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <div class="w-full md:w-3/4 relative">
      <g-title :level="2" class="mb-3">圈選</g-title>
    </div>
    <div class="mb-3 flex w-full">
      <g-radiobox class="mr-4" v-model="inputs.radio0" label="A" />
      <g-radiobox class="mr-4" v-model="inputs.radio1" label="B" />
      <g-radiobox class="mr-4" v-model="inputs.radio2" disabled label="C" />
      <g-radiobox class="mr-4" v-model="inputs.radio3" disabled label="D" />
    </div>

    <div class="w-full md:w-3/4 relative">
      <g-title :level="2" class="mb-3">群組單選</g-title>
    </div>
    <p>inputs.radio4:{{ inputs.radio4 }}</p>
    <g-radiobox-group class="mb-3 flex w-full" v-model="inputs.radio4">
      <g-radiobox class="mr-4" :value="2" label="選項2" />
      <g-radiobox class="mr-4" :value="4" label="選項4" />
      <g-radiobox class="mr-4" :value="6" label="選項6" />
      <g-radiobox class="mr-4" :value="8" label="選項8" disabled />
    </g-radiobox-group>
  </div>
</template>
  \`\`\`  `,
    'switch': ` \`\`\` html 
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
    'input': ` \`\`\` html 
<script setup>
import { reactive, getCurrentInstance } from 'vue';

const instance = getCurrentInstance();

const inputs = reactive({
  input0: 'hello',
  input2: 123,
  input1: '',
});

const handleBlurEvent = (e) => {
  console.log('blur', e);
};

const handleFocusEvent = (e) => {
  console.log('focus', e);
};

const handleFocusInput = () => {
  // console.log(instance.refs.inputA);
  instance.refs.inputA.focusInput();
};
</script>

<template>
  <div class="w-full mx-auto mb-6 relative">
    <g-title :level="2" class="mb-3">focus input </g-title>
    <div class="flex">
      <g-input
        ref="inputA"
        v-model="inputs.input0"
        size="md"
        green
        class="mr-4"
      />
      <g-button pill @click="handleFocusInput">focus input</g-button>
    </div>

    <g-title :level="2" class="mb-3">icon left </g-title>
    <g-input
      v-model="inputs.input0"
      size="md"
      icon="search"
      iconPosition="left"
      green
    />

    <g-title :level="2" class="mb-3">icon right </g-title>
    <g-input v-model="inputs.input0" icon="search" />

    <g-title :level="2" class="mb-3">clearable</g-title>
    <g-input v-model="inputs.input0" green clearable />
    <g-input v-model="inputs.input0" size="md" clearable />

    <g-title :level="2" class="mb-3">事件(blur、focus)</g-title>
    <g-input
      v-model="inputs.input0"
      @blur="handleBlurEvent"
      @focus="handleFocusEvent"
    />

    <g-title :level="2" class="mb-3">輸入框-width 200</g-title>
    <g-input v-model="inputs.input0" size="sm" :width="200" />

    <g-title :level="2" class="mb-3">輸入框-size</g-title>
    <g-title :level="3" class="mb-3">middle height:43px</g-title>
    <g-input v-model="inputs.input0" size="md" clearable />
    <g-title :level="3" class="mb-3">small height:36px</g-title>
    <g-input v-model="inputs.input0" size="sm" clearable />

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
    'tag': ` \`\`\` html 
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
    'loading-icon': ` \`\`\` html 
<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="2" class="mb-3">載入中</g-title>
    <g-loading-icon />
  </div>
</template>  \`\`\`  `,
    'upload-icon': ` \`\`\` html 
<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="2" class="mb-3">上傳中</g-title>
    <div class="mb-3 flex w-full">
      <g-upload-icon class="mr-2" />
      <g-upload-icon class="mr-2" :percent="20" />
      <g-upload-icon class="mr-2" :percent="80" />
      <g-upload-icon class="mr-2" :percent="0" auto />
    </div>
  </div>
</template>
  \`\`\`  `,
    'img-upload': ` \`\`\` html 
<script setup>
const handleFile = (file) => {
  // console.log(file);
};
</script>

<template>
  <g-img-upload @file="handleFile" />
</template>
  \`\`\`  `,
    'download-icon': ` \`\`\` html 
<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="2" class="mb-3">下載中</g-title>
    <div class="mb-3 flex w-full">
      <g-download-icon class="mr-2" />
      <g-download-icon class="mr-2" :percent="20" />
      <g-download-icon class="mr-2" :percent="100" />
      <g-download-icon class="mr-2" :percent="0" :auto="true" />
    </div>
  </div>
</template>  \`\`\`  `,
    'layout': ` \`\`\` html 
<script setup>

const RouteTabs = [{ name: 'child-route A' , path:'/icon' }, { name: 'child-route B',path:'/gt/layout' }, { name: 'child-route C',path:'/gt/title' }]

</script>


<template>
  <div class="w-full mx-auto border-2">
    <g-layout class="layout" headText="Great Tree UI" title="hello" :menuTabs="RouteTabs" :onlyOneLevel="true">
      <template #header>
        <div class="w-1/4 flex justify-center items-center px-4">
          <span>v22</span>
        </div>
      </template>
      <template #sidebar> menu </template>
      <template #content> <div class="bg-purple-400 h-64 p-6">content</div> </template>
    </g-layout>
  </div>
</template>
  \`\`\`  `,
    'menu': ` \`\`\` html 
<script setup>
import { getCurrentInstance, ref } from 'vue';
const instance = getCurrentInstance();
const menuRoutes = [
  {
    label: 'group1',
    icon: 'info',
    children: [
      {
        label: 'route1',
        icon: '',
        path: 'doc',
        iconClasses:'fa-solid fa-store'
      },
      {
        label: 'route2',
        icon: '',
        path: '456',
        iconClasses:'fa-solid fa-store'
      },
      {
        label: 'route3',
        icon: '',
        path: '456',
      },
    ],
  },
  {
    label: 'group2',
    icon: 'tool',
    children: [
      {
        label: 'route3',
        icon: 'file',
        path: '456',
      },
      {
        label: 'route4',
        icon: 'file',
        path: '123',
      },
      {
        label: 'route3',
        icon: 'file',
        path: '456',
      },
      {
        label: 'route4',
        icon: 'file',
        path: '123',
      },
      {
        label: 'route3',
        icon: 'file',
        path: '456',
      },
      {
        label: 'route4',
        icon: 'file',
        path: '123',
      },
      {
        label: 'route3',
        icon: 'file',
        path: '456',
      },
      {
        label: 'route4',
        icon: 'file',
        path: '123',
      },
      {
        label: 'route3',
        icon: 'file',
        path: '456',
      },
      {
        label: 'route4',
        icon: 'file',
        path: '123',
      },
    ],
  },
  {
    label: 'link',
    path: 'ccc',
  },
  {
    label: 'group3',
    children: [
      {
        label: 'route3',
        icon: 'file',
        path: '4511116',
      },
      {
        label: 'route466',
        icon: 'file',
        path: '123',
      },
    ],
  },
];

const menuRef = ref(null);

const handleClick = () => {
  // console.log('instance.refs.menuRef', instance.refs.menuRef.collapsed);
  let val = !instance.refs.menuRef.collapsed;
  instance.refs.menuRef.collapsed = val;
};
</script>

<template>
  <div class="w-full box">
    <div class="flex flex-col">
      <g-button @click="handleClick" :width="100">收開</g-button>
      <g-menu ref="menuRef" active="1-2" :menu="menuRoutes" :collapsed="true" />
    </div>

    <g-menu activePath="4511116" :menu="menuRoutes" />
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-around;
  position: relative;
}
</style>
  \`\`\`  `,
    'tabs': ` \`\`\` html 
<script setup>
  const clickFn = (param)=>{
    console.log('in',param)
  }


</script>

<template>
  <g-tabs :tabs="[{ name: 'tab1' }, { name: 'tab2' }]" :clickCallback="clickFn" :currentTab="'tab2'">
    <template v-slot:tab1="context">
      <g-title :level="1" class="mb-3">hello , tab1 </g-title>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis
      assumenda similique possimus ipsam consequatur animi ipsa fugit quia.
      Accusantium.
    </template>
    <template v-slot:tab2="context">
      <g-title :level="1" class="mb-3">hello , tab2</g-title>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias
      earum exercitationem inventore dignissimos velit dolores maiores quod
      accusantium, reiciendis cupiditate modi quia rem at ut laborum vero
      doloribus rerum?
    </template>
  </g-tabs>
</template>
  \`\`\`  `,
    'loading': ` \`\`\` html 
<script setup>
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();
const handleLoading = () => {
  instance.appContext.config.globalProperties.handleLoadingTrigger();
};
</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="2" class="mb-3">頁面載入</g-title>
    <g-button pill @click="handleLoading">顯示</g-button>
    <g-loading />
  </div>
</template>
  \`\`\`  `,
    'message': ` \`\`\` html 
<script setup>
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();

const handleMsg = (type) => {
  instance.appContext.config.globalProperties.handleMessageTrigger({
    type,
    title: 'hello~',
  });
};

</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="2" class="mb-3">通知-樣式RECTANGLE</g-title>
    <div class="flex justify-start mb-3">
      <span class="w-1/2 md:w-1/3"
        ><g-button
          pill
          type="second"
          @click="
            () => {
              handleMsg('info');
            }
          "
          >顯示Message info</g-button
        ></span
      >
      <span class="w-1/2 md:w-1/3"
        ><g-button
          pill
          type="yellow"
          @click="
            () => {
              handleMsg('warning');
            }
          "
          >顯示Message warning</g-button
        ></span
      >
      <span class="w-1/2 md:w-1/3"
        ><g-button
          pill
          type="red"
          @click="
            () => {
              handleMsg('error');
            }
          "
          >顯示Message error</g-button
        ></span
      >
    </div>
  </div>

  <g-message />
</template>
  \`\`\`  `,
    'message-toast': ` \`\`\` html 
<script setup>
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();

const handleMsgToast = () => {
  instance.appContext.config.globalProperties.handleMessageToastTrigger({
    time: 2500,
  });
};


</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="2" class="mb-3">通知-樣式TOAST</g-title>
    <div class="flex justify-start mb-3">
      <span class="w-1/2 md:w-1/3"
        ><g-button
          pill
          type="second"
          @click="
            () => {
              handleMsgToast();
            }
          "
          >顯示Message Toast</g-button
        ></span
      >
    </div>
  </div>

  <g-message-toast text="儲存完成~!" />
</template>
  \`\`\`  `,
    'form': ` \`\`\` html 
<script setup>
import { isNull } from 'lodash';
import { ref , reactive, getCurrentInstance, onMounted } from 'vue';
import GForm from '../index.js';

const instance = getCurrentInstance();

const formRef = ref(null);

const inputs = reactive({
  test: {
    test1: 'hi~',
    test2: 123,
    test3: '',
    radioAA: true,
    radio0: true,
    radio1: false,
    radio2: true,
    radio3: false,
    radio4: 2,
    checked0: true,
    checked1: false,
    checked2: true,
    checked3: false,
    dropdown: null,
  },
});

const formRule = {
  test1: [
    {
      require: true,
      message: '必填',
      trigger: 'blur',
    },
    {
      valid: (val) => ('' + val).length > 3,
      message: '長度大於3',
      trigger: 'blur',
    },
  ],
  test2: [
    {
      valid: (val) => ('' + val).length > 10,
      message: '長度大於10',
    },
  ],
  radio1: [
    {
      valid: (val) => val === true,
      message: 'radio1 必須選~',
    },
  ],
  checked1: [
    {
      valid: (val) => val === true,
      message: 'checked1 必須選~',
    },
  ],
  dropdown: [
    {
      valid: (val) => !isNull(val),
      message: 'dropdown 必須選~',
    },
  ],
};

const handleSubmit = async (e) => {
  e.preventDefault();
  // let result = await instance.appContext.config.globalProperties[
  //   'gForms-form1'
  // ].callValid();
  // console.log(result);

  instance.refs.formRef.callValid();
};

onMounted(() => {
  // console.log('mounted',instance.appContext.config.globalProperties['gForms-form1']);
  console.log(instance.refs.formRef)
});
</script>

<template>
  <div class="w-full mx-auto mb-6 relative">
    <g-title :level="2" class="mb-3">輸入框-驗證</g-title>
    <g-form ref="formRef" v-model="inputs.test" :rules="formRule" name="form1">
      <g-input label="驗證1" name="test1" green clearable />
      <g-input label="驗證2" name="test2" green clearable />
      <g-input label="驗證3" name="test3" green clearable />

      <g-radiobox class="mr-4 mb-3" name="radioAA" label="AA" />

      <div class="mt-3 mb-3 flex w-full">
        <g-radiobox class="mr-4" name="radio0" label="A" />
        <g-radiobox class="mr-4" name="radio1" label="B" />
        <g-radiobox class="mr-4" name="radio2" disabled label="C" />
        <g-radiobox class="mr-4" name="radio3" disabled label="D" />
      </div>

      <div class="mb-3 flex w-full">
        <g-checkbox class="mr-4" name="checked0" label="選項1" />
        <g-checkbox class="mr-4" name="checked1" label="選項2" />
        <g-checkbox class="mr-4" name="checked2" label="選項3" disabled />
        <g-checkbox class="mr-4" name="checked3" label="選項4" disabled />
      </div>

      <g-dropdown
        name="dropdown"
        class="mt-4 mb-4"
        :options="[
          { label: '請選擇', value: null },
          { label: 'Aaaa', value: 1 },
          { label: 'Bbbb', value: 2 },
          { label: 'Ggggwwwwwwwsssswww', value: 3 },
        ]"
        clicked
        icon
      />

      <g-button class="mb-4" @click="handleSubmit">欄位驗證</g-button>
    </g-form>
    <p>inputs.test.test1:{{ inputs.test.test1 }}</p>
    <p>inputs.test.test2:{{ inputs.test.test2 }}</p>
    <p>inputs.test.test3:{{ inputs.test.test3 }}</p>

    <p>inputs.test.radioAA:{{ inputs.test.radioAA }}</p>
    <p>inputs.test.radio0:{{ inputs.test.radio0 }}</p>
    <p>inputs.test.radio1:{{ inputs.test.radio1 }}</p>

    <p>inputs.test.dropdown:{{ inputs.test.dropdown }}</p>

    <p>inputs.test.checked0:{{ inputs.test.checked0 }}</p>
    <p>inputs.test.checked1:{{ inputs.test.checked1 }}</p>
  </div>
</template>
  \`\`\`  `,
    'dropdown': ` \`\`\` html 
<script setup>
import { reactive } from 'vue';

const inputs = reactive({
  dropdown0: 2,
  dropdown1: 3,
});

const options = [
  { label: 'Aaaa', value: 1 },
  { label: 'Bbbb', value: 2 },
  { label: 'Ggggwwwwwwwsssswww', value: 3 },
];
</script>

<template>
  <div class="w-full mx-auto mb-6 relative">
    <g-title :level="2" class="mb-3">下拉選項點擊模式</g-title>
    <g-dropdown class="mr-4" v-model="inputs.dropdown0" :options="options" />

    <g-title :level="2" class="mb-3">下拉選項停留模式</g-title>
    <g-dropdown v-model="inputs.dropdown1" :options="options" icon hover />
  </div>
</template>
  \`\`\`  `,
    'dropdownitem': ` \`\`\` html 
<script setup>
const options = [
  { label: 'Aaaa', value: 1 },
  { label: 'Bbbb', value: 2 },
  { label: 'Ggggwwwwwwwsssswww', value: 3 },
];
</script>

<template>
  <div class="w-full mx-auto mb-6 relative">
    <g-title :level="2" class="mb-3">下拉選項</g-title>
    <div class="w-16">
      <g-dropdown-item :label="options[0].label" :value="options[0].value" />
      <g-dropdown-item :label="options[1].label" :value="options[1].value" />
      <g-dropdown-item :label="options[2].label" :value="options[2].value" />
    </div>
  </div>
</template>
  \`\`\`  `,
    'time-picker': ` \`\`\` html 
<script setup>
import { reactive } from 'vue';

const inputs = reactive({
  time1: '',
});
</script>

<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">日期選擇</g-title>
    <g-time-picker v-model="inputs.time1" format="YYYY-MM-DD" :width="250" />
    <p>inputs.time1:{{ inputs.time1 }}</p>
  </div>
</template>
  \`\`\`  `,
    'table': ` \`\`\` html 
<script setup>
import GMessage from '../../message/index.js';
import { ref , reactive, getCurrentInstance, onMounted, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const instance = getCurrentInstance();

const tableInfo = reactive({
  columns: [
    {
      name: 'id',
      label: 'ID',
      width: 180,
    },
    {
      name: 'product',
      label: '商品名稱',
      sort: false,
      width: 180,
    },
    {
      name: 'price',
      label: '價格',
      width: 180,
      sort: true,
    },
    {
      name: 'storage',
      label: '庫存',
      sort: true,
    },
    {
      name: 'tags',
      width: 220,
      label: '標籤',
    },
    {
      name: 'btns',
      width: 200,
      label: '',
    },
  ],
  data: [
    { product: 'aaa', price: 200, storage: 25, id: uuidv4() },
    { product: 'bbbb', price: 100, storage: 15, id: uuidv4() },
    { product: 'cc', price: 300, storage: 5, id: uuidv4() },
    {
      product: 'dddddddddddddddddddddddd',
      price: 400,
      storage: 65,
      id: uuidv4(),
    },
    { product: 'bbbb', price: 100, storage: 15, id: uuidv4() },
    { product: 'cc', price: 300, storage: 5, id: uuidv4() },
    { product: 'aaa', price: 200, storage: 25, id: uuidv4() },
    { product: 'bbbb', price: 100, storage: 15, id: uuidv4() },
  ],
  filterOtions: {},
  isLoading: false,
});

const handleRowClick = (row, dialogType) => {
  // console.log(row);
  // handleDialog(dialogType);
  dialogInfo['show' + dialogType] = true;
};
const handleTableChecked = () => {
  // let arr =
  //   instance.appContext.config.globalProperties[
  //     'gt-table-products'
  //   ].getCheckedList();

  let arr = instance.refs.tableRef.getCheckedList();
  arr = arr.map((obj) => obj.id);
  instance.appContext.config.globalProperties.handleMessageTrigger({
    type: 'info',
    title: '已選擇',
    msg: 'row ids:arr.join(',')}',
  });
};

const dialogInfo = reactive({
  show1: false,
  show2: false,
});

const showLoading = () => {
  tableInfo.isLoading = true;
  setTimeout(() => {
    tableInfo.isLoading = false;
  }, 3000);
};

</script>
<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">表格</g-title>
    <g-table
      ref="tableRef"
      :columns="tableInfo.columns"
      :data="tableInfo.data"
      :height="450"
      name="products"
      rowClick
      :isLoading="tableInfo.isLoading"
    >
      <template v-slot:tags="{ row }">
        <div class="flex justify-between">
          <g-tag type="warning" border label="上架中" />
          <g-tag type="second" border dot label="可出貨" />
        </div>
      </template>

      <template v-slot:btns="{ row }">
        <div class="flex justify-start">
          <g-button
            flat
            class="mr-4"
            @click.stop="
              () => {
                handleRowClick(row, 1);
              }
            "
            >編輯</g-button
          >
          <g-button
            flat
            type="red"
            @click.stop="
              () => {
                handleRowClick(row, 2);
              }
            "
            >刪除</g-button
          >
        </div>
      </template>
    </g-table>
    <g-dialog :title="dialogInfo.title" v-model="dialogInfo.show1">
      body~~
    </g-dialog>

    <g-dialog v-model="dialogInfo.show2" mode="delete"> 確定刪除嗎? </g-dialog>
    <g-button
      class="mb-4 mt-4"
      @click="
        () => {
          handleTableChecked();
        }
      "
      >當前選擇顯示</g-button
    >
    <g-button
      class="mb-4 mt-4"
      @click="
        () => {
          showLoading();
        }
      "
      >載入中顯示</g-button
    >
  </div>
  <g-message />
</template>
  \`\`\`  `,
    'pagination': ` \`\`\` html 
<script setup>
const handleUpdatePage = (val) => {console.log(val)};
</script>

<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">分頁選擇</g-title>
    <g-pagination
      :pageInfo="{ currentPage: 1, total: 200, perPageNums: 15 }"
      @updatePage="handleUpdatePage"
    />
  </div>
</template>
  \`\`\`  `,
    'sort-label': ` \`\`\` html 
<script setup>
import { reactive } from 'vue';

const inputs = reactive({
  curSortLabelValue: 'ASC',
});
</script>

<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">排序標籤</g-title>
    <g-sort-label
      v-model="inputs.curSortLabelValue"
      labelName="日期"
      :options="[
        {
          label: '遞增',
          value: 'ASC',
        },
        {
          label: '遞減',
          value: 'DESC',
        },
        {
          label: '無',
          value: 'none',
        },
      ]"
    />
  </div>
</template>
  \`\`\`  `,
    'filter-option': ` \`\`\` html 
<script setup>
import { reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const tableInfo = reactive({
  columns: [
    {
      name: 'id',
      label: 'ID',
      width: 180,
    },
    {
      name: 'product',
      label: '商品名稱',
      sort: false,
      width: 180,
    },
    {
      name: 'price',
      label: '價格',
      width: 180,
      sort: true,
    },
    {
      name: 'storage',
      label: '庫存',
      sort: true,
    },
    {
      name: 'tags',
      width: 220,
      label: '標籤',
    },
    {
      name: 'btns',
      width: 200,
      label: '',
    },
  ],
  filterOtions: {},
  isLoading: false,
});
</script>

<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="my-4">篩選選項</g-title>
    <p class="mb-4">tableInfo.filterOtions:{{ tableInfo.filterOtions }}</p>
    <div class="flex">
      <g-filter-option
        v-for="column in tableInfo.columns.filter((item) => item.label)"
        v-model="tableInfo.filterOtions[column.name]"
        :key="column.name"
        :optionName="column.label"
      />
    </div>
  </div>
</template>
  \`\`\`  `,
    'dialog': ` \`\`\` html 
<script setup>
import { reactive } from 'vue';

const dialogInfo = reactive({
  sm1: false,
  sm2: false,
  md1: false,
  md2: false,
  lg1: false,
  lg2: false,
  title: 'Hello',
});

const handleCallback = () => {
  alert(123);
};

const handleDialog = (target = 1, size = 'sm') => {
  // console.log('~~~', '' + size + target);
  switch (target) {
    case 1: {
      dialogInfo['' + size + target] = true;
      break;
    }
    case 2: {
      dialogInfo['' + size + target] = true;
      break;
    }
  }
};
</script>

<template>
  <g-dialog
    :title="dialogInfo.title"
    v-model="dialogInfo.sm1"
    :handleCallback="handleCallback"
    size="sm"
    >body~~</g-dialog
  >
  <g-dialog
    v-model="dialogInfo.sm2"
    mode="delete"
    size="sm"
    :handleCallback="handleCallback"
    >確定刪除嗎?
  </g-dialog>

  <g-dialog
    :title="dialogInfo.title"
    v-model="dialogInfo.md1"
    :handleCallback="handleCallback"
    size="md"
    >body~~</g-dialog
  >
  <g-dialog
    v-model="dialogInfo.md2"
    mode="delete"
    size="md"
    :handleCallback="handleCallback"
    >確定刪除嗎?
  </g-dialog>

  <g-dialog
    :title="dialogInfo.title"
    v-model="dialogInfo.lg1"
    :handleCallback="handleCallback"
    size="lg"
    >body~~small Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
    dolorum reprehenderit dignissimos quaerat! Soluta voluptatibus quidem autem
    dolorum, magnam minus odio aspernatur! Tenetur, possimus et. Incidunt est
    laboriosam veritatis porro.</g-dialog
  >
  <g-dialog
    v-model="dialogInfo.lg2"
    mode="delete"
    size="lg"
    :handleCallback="handleCallback"
    >確定刪除嗎?
  </g-dialog>

  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">DIALOG-Small</g-title>
    <div class="flex justify-start mb-3">
      <g-button
        pill
        type="second"
        :size="dialogInfo.size"
        class="mr-4"
        @click="
          () => {
            handleDialog(1, 'sm');
          }
        "
        >Small & Comfirm</g-button
      >
      <g-button
        pill
        type="red"
        class="mr-4"
        @click="
          () => {
            handleDialog(2, 'sm');
          }
        "
        >Small & Delete</g-button
      >
    </div>
  </div>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="my-4">DIALOG-Middle</g-title>
    <div class="flex justify-start mb-3">
      <g-button
        pill
        type="second"
        class="mr-4"
        :size="dialogInfo.size"
        @click="
          () => {
            handleDialog(1, 'md');
          }
        "
        >middle & Comfirm</g-button
      >
      <g-button
        pill
        type="red"
        class="mr-4"
        @click="
          () => {
            handleDialog(2, 'md');
          }
        "
        >middle & Delete</g-button
      >
    </div>
  </div>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="my-4">DIALOG-LARGE</g-title>
    <div class="flex justify-start mb-3">
      <g-button
        pill
        type="second"
        class="mr-4"
        :size="dialogInfo.size"
        @click="
          () => {
            handleDialog(1, 'lg');
          }
        "
        >Large & Comfirm</g-button
      >
      <g-button
        pill
        type="red"
        class="mr-4"
        @click="
          () => {
            handleDialog(2, 'lg');
          }
        "
        >Large & Delete</g-button
      >
    </div>
  </div>
</template>
  \`\`\`  `,
};

