/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */

export default {
    'avatar': ` \`\`\` html 
<script setup>
import { ref } from 'vue';
const imgs = [
  'https://i.imgur.com/m6NInWZ.jpg',
  'https://i.imgur.com/hmYWWE7.jpg',
];

const img = ref(imgs[0]);
const index = ref(0);

const toggleImg = () => {
  // console.log('toggleImg', index.value);
  if (index.value == 0) {
    img.value = imgs[1];
    index.value = 1;
  } else {
    img.value = imgs[0];
    index.value = 0;
  }
};
</script>
<template>
  <div>
    <g-title :level="1" class="mb-3">頭像</g-title>
    <g-button @click="toggleImg" :width="100">資料改動</g-button>
    <div class="mb-3 px-2 w-full md:w-3/4 flex">
      <g-avatar class="m-2" :imgUrl="img" />
      <g-avatar class="m-2" />
    </div>
  </div>
</template>
  \`\`\`  `,
    'button': ` \`\`\` html 
<template>
  <div>
    <g-title :level="1" class="mb-3">按鈕</g-title>

    <div class="mb-3 px-2 w-full">
      <g-title :level="2" class="mb-3"
        >自定義icon按鈕 ex: font-awesome v5.15.4 (fas fa-user)</g-title
      >
      <g-button pill iconClasses="fas fa-user iconWidth">按鈕</g-button>
      <g-divider />
      <g-title :level="2" class="mb-3">loading</g-title>
      <div class="flex justify-between mb-3">
        <g-button pill icon="search" :isLoading="true">按鈕</g-button>
        <g-button pill icon="search" :isLoading="true" type="yellow"
          >按鈕</g-button
        >
        <g-button pill icon="search" :isLoading="true" type="red"
          >按鈕</g-button
        >
      </div>
      <g-divider />
      <g-title :level="2" class="mb-3">icon left</g-title>
      <div class="flex justify-between mb-3">
        <g-button pill icon="search">按鈕</g-button>
        <g-button flat icon="search">按鈕</g-button>
      </div>
      <g-divider />
      <g-title :level="2" class="mb-3">icon right</g-title>
      <div class="flex justify-between mb-3">
        <g-button pill icon="search" iconPosition="right">按鈕</g-button>
        <g-button flat icon="search" iconPosition="right">按鈕</g-button>
      </div>

      <g-divider />
      <g-title :level="2" class="mb-3">width 200</g-title>
      <g-button pill :width="200">按鈕</g-button>
      <g-divider />

      <g-title :level="2" class="mb-3">PILL</g-title>
      <div class="flex justify-between mb-3">
        <g-button pill>按鈕</g-button>
        <g-button pill type="green">按鈕</g-button>
        <g-button pill type="yellow">按鈕</g-button>
        <g-button pill type="red">按鈕</g-button>
        <g-button pill type="white">按鈕</g-button>
      </div>
      <g-divider />
      <g-title :level="2" class="mb-3">FLAT</g-title>

      <div class="flex justify-between mb-3">
        <g-button flat>按鈕</g-button>
        <g-button flat type="green">按鈕</g-button>
        <g-button flat type="yellow">按鈕</g-button>
        <g-button flat type="red">按鈕</g-button>
        <g-button flat type="white">按鈕</g-button>
      </div>
      <g-divider />
      <g-title :level="2" class="mb-3">FLAT - no hover</g-title>

      <div class="flex justify-between mb-3">
        <g-button flat :flatHover="false">按鈕</g-button>
        <g-button flat type="green" :flatHover="false">按鈕</g-button>
        <g-button flat type="yellow" :flatHover="false">按鈕</g-button>
        <g-button flat type="red" :flatHover="false">按鈕</g-button>
        <g-button flat type="white" :flatHover="false">按鈕</g-button>
      </div>
      <g-divider />
      <g-title :level="2" class="mb-3">FLAT with icon</g-title>

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

    <g-divider />
    <g-title :level="2" class="mb-3">ROUND</g-title>
    <div class="flex justify-between">
      <g-button round>按鈕</g-button>
      <g-button round type="green">按鈕</g-button>
      <g-button round type="yellow">按鈕</g-button>
      <g-button round type="red">按鈕</g-button>
      <g-button round type="black">按鈕</g-button>
      <g-button round type="white">按鈕</g-button>
    </div>
    <g-divider />
    <g-title :level="2" class="mb-3">ROUND-ICON</g-title>
    <div class="w-full flex justify-start mb-3 p-4">
      <g-button round type="black" icon="file" class="mr-4" iconNarrowPadding />
    </div>
  </div>
</template>

<style lang="scss">
.iconWidth {
  width: 12px !important;
  margin-right: 4px;
}
</style>
>
  \`\`\`  `,
    'checkbox': ` \`\`\` html 
<script setup>
import { reactive } from 'vue';
const inputs = reactive({
    checked0: true,
    checked1: false,
    checked2: true,
    checked3: false,
    checkedArr: [2, 4, 6, '8'],
});
</script>

<template>
    <div class="mb-3 px-2 w-full md:w-3/4">
        <g-title :level="2">勾選框 白底</g-title>
        <div class="mb-3 flex w-full" >
            <g-checkbox class="mr-4" v-model="inputs.checked1" type="white" label="選項1" />
        </div>

        <!-- inputs:{{ inputs }} -->
        <g-title :level="2">勾選框</g-title>
        <div class="mb-3 flex w-full">
            <g-checkbox class="mr-4" v-model="inputs.checked0" label="選項1" />
            <g-checkbox class="mr-4" v-model="inputs.checked3" label="選項2" />
            <g-checkbox class="mr-4" v-model="inputs.checked1" label="選項3" disabled />
            <g-checkbox class="mr-4" v-model="inputs.checked2" label="選項4" disabled />
        </div>

        <g-title :level="2">群組勾選框</g-title>
        <div class="mb-3 w-full md:w-3/4">
            <p class="mb-3">inputs.checkedArr:{{ inputs.checkedArr }}</p>
            <g-checkbox-group class="mb-3 flex w-full" v-model="inputs.checkedArr">
              <div>
                <g-checkbox class="mr-4" :value="2" label="選項2" />
                <g-checkbox class="mr-4" :value="4" label="選項4" />
                <g-checkbox class="mr-4" :value="6" label="選項6" disabled />
                <g-checkbox class="mr-4" :value="8" label="選項8" disabled />
              </div>
            </g-checkbox-group>
        </div>
    </div>
</template>
  \`\`\`  `,
    'collapse-card': ` \`\`\` html 
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
    <g-title :level="2"> item mode</g-title>
    <g-collapse-card class="mb-4">
        <template #title>hello</template>
        <template #content>
            <g-dropdown class="mr-4" v-model="inputs.dropdown0" :options="options" icon /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illum, praesentium.
        </template>
    </g-collapse-card>

    <g-collapse-card class="mb-4">
        <template #title>hello</template>
        <template #content> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, praesentium. </template>
    </g-collapse-card>
    <g-divider />
    <g-title :level="2"> section mode</g-title>
    <g-collapse-card-section>
        <g-collapse-card class="mb-4">
            <template #title>hello</template>
            <template #content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, praesentium. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Dolor, non iure? Facilis, ea! Fugiat molestiae nesciunt doloremque
                consequuntur corrupti autem.
            </template>
        </g-collapse-card>
        <g-collapse-card class="mb-4">
            <template #title>hello</template>
            <template #content> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, praesentium. </template>
        </g-collapse-card>
    </g-collapse-card-section>
</template>

<style lang="scss"></style>
  \`\`\`  `,
    'collapse-card-section': ` \`\`\` html 
<script setup>
</script>
<template>
</template>  \`\`\`  `,
    'dialog': ` \`\`\` html 
<script setup>
import { reactive } from 'vue';

const dialogInfo = reactive({
  cus: false,
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
    case 0: {
      dialogInfo.cus = true;
      break;
    }
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
    v-model="dialogInfo.cus"
    :handleCallback="handleCallback"
    :width="600"
    :height="400"
    >hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos corporis repellat, aliquam magnam velit perspiciatis libero assumenda accusamus, fuga in a aperiam qui ex! Ratione ea, sapiente repudiandae quasi vel minima necessitatibus ut hic, debitis non blanditiis beatae, odit odio cupiditate obcaecati impedit earum aperiam natus dolore eius itaque fuga harum! Quam officiis accusamus dignissimos enim ea, porro nesciunt natus totam consectetur illum dolor modi, suscipit aliquid nam quae. Explicabo assumenda quod autem unde voluptas repudiandae nisi vitae nemo blanditiis corporis consequatur, eaque expedita accusantium ullam, non, fuga dignissimos laboriosam odit ipsa provident saepe at commodi! Natus, sequi officia fugiat dicta incidunt nam culpa, qui tempora recusandae tenetur ad. Quos accusantium repudiandae voluptas. Reprehenderit dignissimos sunt repellat quae dolorum, nihil voluptate perferendis? Illo ipsam modi aliquid sunt magnam quasi eum quia qui ducimus, voluptatibus, labore praesentium inventore. Minima modi voluptate facere consectetur quam similique iste iusto voluptas, aliquid numquam dignissimos sunt tempore sapiente esse? Quod ab similique aperiam nesciunt hic odio incidunt eveniet commodi eum, perspiciatis deleniti pariatur. Magnam consequuntur delectus nihil nam laborum beatae in, veritatis voluptatem saepe nemo. Praesentium architecto nesciunt quis? Hic, corporis! Dignissimos sunt eligendi quasi. Officiis quae aliquid praesentium nobis sequi neque, maiores molestias similique placeat voluptate itaque maxime amet reiciendis exercitationem nisi quia laudantium adipisci, incidunt dolorum optio quas cupiditate. Similique reiciendis sapiente illum aspernatur adipisci et odit quae iste praesentium possimus! Veritatis similique ullam dolorem! Id sapiente accusamus tempora illum error a nostrum consequatur in animi voluptates quisquam praesentium, quae, neque officia fugiat quidem ratione eveniet. Amet nulla sint repellendus? Porro ullam nam, quis velit earum omnis molestiae distinctio, accusamus nesciunt ex eaque temporibus sint ea sit nobis! Nobis, id fuga reiciendis dolore totam ipsa officia at earum, perspiciatis ut eius esse natus laborum corrupti eaque laboriosam aliquam commodi? Mollitia totam modi, eius odit aperiam consequatur vero corporis ipsam minus numquam, voluptates atque officia commodi rerum excepturi maxime ad ipsum reprehenderit. Illum aspernatur nisi quos amet temporibus sit mollitia ea. Voluptatum atque rerum, quaerat vitae corporis odio. Recusandae laudantium amet earum ad quibusdam odio distinctio, excepturi adipisci reiciendis nobis et possimus, eveniet sint nisi facere quaerat unde hic tenetur laboriosam assumenda placeat, eum repudiandae. Labore architecto ut natus maxime quos. Soluta voluptatibus deserunt assumenda ut distinctio rem laborum reiciendis magnam repellendus incidunt neque esse eos consequatur qui, eveniet harum molestias debitis iste voluptate iure et perferendis excepturi? Nam praesentium obcaecati quis unde!</g-dialog
  >


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
    <g-title :level="2" class="mb-3">自定義寬高</g-title>
    <g-button
        pill
        type="second"
        class="mr-4"
        @click="
          () => {
            handleDialog(0);
          }
        "
        >600x400</g-button
      >
    <g-divider />

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

    <g-divider />

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

    <g-divider />
    
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
    'divider': ` \`\`\` html 
<script setup>
const arr = new Array(3);
</script>
<template>
  <div class="mb-3 px-2 w-full">
    <g-title :level="2" class="mb-3"> horizontal </g-title>
    <div class="flex flex-col w-1/3 mx-auto">
      <template v-for="(item, idx) in arr" :key="idx">
        <div class="w-full h-24 bg-red-300"></div>
        <g-divider v-if="idx != arr.length - 1" />
      </template>
    </div>
  </div>
  <div class="mb-3 px-2 w-full">
    <g-title :level="2" class="mb-3"> vertical height 100%</g-title>
    <div class="flex h-24  w-1/3  mx-auto">
      <template v-for="(item, idx) in arr" :key="idx">
        <div class="w-24 h-24 bg-green-300"></div>
        <g-divider v-if="idx != arr.length - 1" vertical />
      </template>
    </div>
  </div>
  <div class="mb-3 px-2 w-full">
    <g-title :level="2" class="mb-3"> vertical height 60%</g-title>
    <div class="flex h-24  w-1/3  mx-auto">
      <template v-for="(item, idx) in arr" :key="idx">
        <div class="w-24 h-24 bg-blue-300"></div>
        <g-divider v-if="idx != arr.length - 1" vertical height="60%" />
      </template>
    </div>
  </div>
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

        <g-divider />

        <g-title :level="2" class="mb-3">下拉選項停留模式</g-title>
        <g-dropdown v-model="inputs.dropdown1" :options="options" icon hover />

        <g-divider />
        <g-title :level="2" class="mb-3">width 180</g-title>
        <div class="w180">
            <g-dropdown v-model="inputs.dropdown1" :options="options" icon hover />
        </div>

    </div>
</template>

<style lang="scss">
.w180{
    width: 180px;
}
</style>
  \`\`\`  `,
    'dropdownitem': ` \`\`\` html 
<script setup>
const options = [
  { label: 'Aaaa', value: 1 },
  { label: 'Bbbb', value: 2 },
  { label: 'Ggggwwwwwwwsssswww', value: 3 },
];

const handleClick = (e) => {
  console.log('click', e);
};
</script>

<template>
  <div class="w-full mx-auto mb-6 relative">
    <g-title :level="2" class="mb-3">下拉選項</g-title>
    <div>
      <g-dropdown-item
        :label="options[0].label"
        :value="options[0].value"
        @itemClick="handleClick"
      />
      <g-dropdown-item
        :label="options[1].label"
        :value="options[1].value"
        @itemClick="handleClick"
      />
      <g-dropdown-item
        :label="options[2].label"
        :value="options[2].value"
        @itemClick="handleClick"
      />
    </div>
  </div>
</template>
  \`\`\`  `,
    'filter-chips': ` \`\`\` html 
<script setup>
import { reactive } from 'vue';

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
  ],
  filterOtions: {},
  filterOtions2: {
    id: '',
    product: true,
    price: '',
    storage: '',
    tags: '',
  },
  isLoading: false,
});
</script>

<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="my-4">篩選選項</g-title>
    <p class="mb-4">tableInfo.filterOtions:{{ tableInfo.filterOtions }}</p>
    <div class="flex">
      <g-filter-chips
        v-for="column in tableInfo.columns"
        v-model="tableInfo.filterOtions[column.name]"
        :key="column.name"
        :label="column.label"
      />
    </div>

    <g-title :level="2" class="my-4">篩選選項-單選模式</g-title>
    <p class="mb-4">tableInfo.filterOtions2:{{ tableInfo.filterOtions2 }}</p>
    <p>暫不支援迴圈渲染slot內容</p>
    <g-filter-chips-group class="flex" v-model="tableInfo.filterOtions2">
      <g-filter-chips name="id" label="ID" />
      <g-filter-chips name="product" label="商品名稱" />
      <g-filter-chips name="price" label="價格" />
      <g-filter-chips name="storage" label="庫存" />
      <g-filter-chips name="tags" label="標籤" />
    </g-filter-chips-group>
  </div>
</template>
  \`\`\`  `,
    'filter-chips-group': ` \`\`\` html 
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
  ],
  filterOtions: {},
  filterOtions2: {
    id: '',
    product: true,
    price: '',
    storage: '',
    tags: '',
  },
  isLoading: false,
});
</script>

<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="my-4">篩選選項</g-title>
    <p class="mb-4">tableInfo.filterOtions:{{ tableInfo.filterOtions }}</p>
    <div class="flex">
      <g-filter-option
        v-for="column in tableInfo.columns"
        v-model="tableInfo.filterOtions[column.name]"
        :key="column.name"
        :optionName="column.label"
      />
    </div>

    <g-title :level="2" class="my-4">篩選選項-單選模式</g-title>
    <p class="mb-4">tableInfo.filterOtions2:{{ tableInfo.filterOtions2 }}</p>
    <p>暫不支援迴圈渲染slot內容</p>
    <g-filter-option-group class="flex" v-model="tableInfo.filterOtions2">
      <g-filter-option name="id" label="ID" />
      <g-filter-option name="product" label="商品名稱" />
      <g-filter-option name="price" label="價格" />
      <g-filter-option name="storage" label="庫存" />
      <g-filter-option name="tags" label="標籤" />
    </g-filter-option-group>
  </div>
</template>
  \`\`\`  `,
    'form': ` \`\`\` html 
<script setup>
import { isNull } from 'lodash';
import { ref, reactive, getCurrentInstance } from 'vue';

const instance = getCurrentInstance();

const formRef = ref(null);

const inputs = reactive({
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
    instance.refs.formRef.callValid();
};
</script>

<template>
    <div class="w-full mx-auto mb-6 relative">
        <g-title :level="2" class="mb-3">輸入框-驗證</g-title>
        <g-form class="fit" ref="formRef" v-model="inputs" :rules="formRule" name="form1">
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
        <p>inputs.test1:{{ inputs.test1 }}</p>
        <p>inputs.test2:{{ inputs.test2 }}</p>
        <p>inputs.test3:{{ inputs.test3 }}</p>

        <p>inputs.radioAA:{{ inputs.radioAA }}</p>
        <p>inputs.radio0:{{ inputs.radio0 }}</p>
        <p>inputs.radio1:{{ inputs.radio1 }}</p>

        <p>inputs.dropdown:{{ inputs.dropdown }}</p>

        <p>inputs.checked0:{{ inputs.checked0 }}</p>
        <p>inputs.checked1:{{ inputs.checked1 }}</p>
    </div>
</template>

<style lang="scss">
.gt-form > div {
    margin-bottom: 25px;
}
</style>
  \`\`\`  `,
    'icon': ` \`\`\` html 
<script setup>
import { ref } from 'vue';
const icons = [
  'up',
  'arrow-down',
  'arrow-left',
  'arrows-rotate',
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
  'export',
  'import',
  'truck',
  'google-circles-extended',
  'plus',
  'search',
  'sequence',
  'trash',
  'x',
  'distribute',
  'home',
  'lock',
  'setting',
  'store',
  'tool',
  'user',
  'menu',
  'file',
  'information'
];

const customIconClasses = '寫法: <g-icon classes="fas fa-vote-yea" />。渲染結果:<i class="fas fa-vote-yea"></i>';

const classArr = ['fas fa-vote-yea', 'fas fa-user' , 'far fa-file-code'];
const classRef = ref(classArr[0]);

const handleIconClassChange = () => {
  let index = classArr.findIndex((item) => item == classRef.value);
  // console.log(index);
  classRef.value =
    index + 1 <= classArr.length - 1 ? classArr[index + 1] : classArr[0];
};
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

  <g-title :level="2" class="mt-3 w-full">自定義classes</g-title>

  <g-button @click="handleIconClassChange" :width="100" class="mt-3"
    >資料更換</g-button
  >
  <div class="my-2">:classes = {{ classRef }}</div>
  <div class="my-2">
    <g-icon :classes="classRef" name="name" />
  </div>
  <div class="text-red-600 my-2"> {{ customIconClasses }} </div>
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
    'input': ` \`\`\` html 
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
        <g-title :level="2" class="mb-3">box</g-title>
        <div class="testBox">
            <g-input green v-model="inputs.input0" />
        </div>
        <div class="testBox2">
            <g-input green v-model="inputs.input0" />
        </div>

        <g-title :level="2" class="mb-3">disabled</g-title>
        <g-input green v-model="inputs.input0" :disabled="true" />
        <g-divider />


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

        <g-title :level="2" class="mb-3">輸入框-white</g-title>
        <g-input v-model="inputs.input0" theme="white" />
    </div>
</template>

<style lang="scss">
.inputDemoBox {
    .gt-input-wrapper {
        width: 243px;
    }
}
.fit {
    width: fit-content;
}

.testBox{
    @apply p-0 m-2 outline-1 outline outline-purple-400;
}
.testBox2{
    @apply p-1 m-2 outline-1 outline outline-purple-400;
}
</style>
  \`\`\`  `,
    'input-number': ` \`\`\` html 
<script setup>
import { ref } from 'vue';

const number1 = ref(1);
const number2 = ref(10);
const number3 = ref(3);
</script>
<template>
  <g-title :level="2"> default </g-title>
  <g-input-number v-model="number1" />
  <g-divider />
  <g-title :level="2"> :unit="2" </g-title>
  <g-input-number v-model="number2" :unit="2" />
  <g-divider />
  <g-title :level="2"> :min="2" :max="6" </g-title>
  <g-input-number v-model="number3" :min="2" :max="6" />
  <g-divider />
</template>
  \`\`\`  `,
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
    'loading-icon': ` \`\`\` html 
<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="2" class="mb-3">載入中</g-title>
    <g-loading-icon />
  </div>
</template>  \`\`\`  `,
    'menu': ` \`\`\` html 
<script setup>
import { getCurrentInstance, ref } from 'vue';
const instance = getCurrentInstance();

const menuRoutes = [
  {
    label: 'group1',
    iconClasses: 'far fa-file-code',
    children: [
      {
        label: 'route1',
        icon: '',
        path: 'doc',
        iconClasses: 'fas fa-vote-yea ',
      },
      {
        label: 'route2',
        icon: '',
        path: '456',
        iconClasses: 'fas fa-user ',
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
    iconClasses: 'far fa-file-code',
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
    iconClasses: 'fas fa-vote-yea',
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

const menuRoutes2 = [
  {
    label: '群組1',
    iconClasses: 'far fa-file-code',
    children: [
      {
        label: '路由1',
        icon: '',
        path: 'doc',
        iconClasses: 'fas fa-vote-yea ',
      },
      {
        label: '路由2',
        icon: '',
        path: '456',
        iconClasses: 'fas fa-user ',
      },
      {
        label: '路由3',
        icon: '',
        path: '456',
      },
    ],
  },
  {
    label: '群組2',
    iconClasses: 'far fa-file-code',
    children: [
      {
        label: '路由1',
        icon: '',
        path: 'doc',
        iconClasses: 'fas fa-vote-yea ',
      },
    ],
  },
];

const menuRef = ref(null);
const menuRoutesRefIndex = ref(1);
const menuRoutesRef = ref([...menuRoutes]);

const isCollapsedRef = ref(true);

const handleClick = () => {
  // console.log('instance.refs.menuRef', instance.refs.menuRef.collapsed);
  let val = !isCollapsedRef.value;
  isCollapsedRef.value = val;
};

const handleRouteChange = () => {
  // menuRoutesRef.value = menuRoutesRefIndex.value == 1 ? [...menuRoutes2] : [...menuRoutes];
  menuRoutesRef.value[0].label =
    menuRoutesRefIndex.value == 1 ? 'change!' : 'group1';
  menuRoutesRefIndex.value = menuRoutesRefIndex.value == 1 ? 2 : 1;
};
</script>

<template>
  <div class="w-full box">
    <div class="flex flex-col">
      <g-button @click="handleClick" :width="100">收開</g-button>
      <g-menu
        ref="menuRef"
        active="1-2"
        :menu="menuRoutes"
        :collapsed="isCollapsedRef"
      />
    </div>

    <div class="flex flex-col">
      <g-button @click="handleRouteChange" :width="100">資料更換</g-button>
      <g-menu activePath="4511116" :menu="menuRoutesRef" />
    </div>
  </div>
</template>

<style lang="scss">
.box {
  display: flex;
  justify-content: space-around;
  position: relative;
  .iconBox svg {
    font-size: 14px;
  }
}
</style>
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
    'option': ` \`\`\` html 
<script setup>
</script>
<template>
</template>  \`\`\`  `,
    'pagination': ` \`\`\` html 
<script setup>
const handleUpdatePage = (val) => {
    console.log(val);
};
</script>

<template>
    <div class="w-full mx-auto mb-6">
        <g-title :level="2" class="mb-3">分頁選擇</g-title>
        <g-pagination :pageInfo="{ currentPage: 2, total: 600, perPageNums: 100 }" @updatePage="handleUpdatePage" />
        <g-divider />
        <g-title :level="2"> underline </g-title>
        <g-pagination
            :pageInfo="{ currentPage: 1, total: 60, perPageNums: 15 }"
            @updatePage="handleUpdatePage"
            :underline="true"
        />

        <g-divider />
        <g-title :level="2"> gap 10</g-title>
        <g-pagination
            :pageInfo="{ currentPage: 20, total: 6000, perPageNums: 40 }"
            @updatePage="handleUpdatePage"
            :gap="10"
        />
    </div>
</template>
  \`\`\`  `,
    'pagination2': ` \`\`\` html 
<script setup>
</script>
<template>
</template>  \`\`\`  `,
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
    'select': ` \`\`\` html 
<script setup>
import { ref } from 'vue';
const val = ref(0);
const val2 = ref([0]);
const val3 = ref(['1']);
const val4 = ref('123');
</script>
<template>
    <div class="w64box">
    <g-title :level="2" class="mb-3">bindResult index</g-title>
    current:{{ val }}
    <g-select v-model="val">
        <g-option label="123" value="1" />
        <g-option label="456" value="2" />
    </g-select>
    <g-divider />
    <g-title :level="2" class="mb-3">bindResult index & multiple</g-title>
    current:{{ val2 }}
    <g-select v-model="val2" multiple>
        <g-option label="123" value="1" />
        <g-option label="456" value="2" />
        <g-option label="789" value="3" />
    </g-select>
    <g-divider />
    <g-title :level="2" class="mb-3">bindResult value & multiple</g-title>
    current:{{ val3 }}
    <g-select v-model="val3" multiple bindResult="value">
        <g-option label="123" value="1" />
        <g-option label="456" value="2" />
        <g-option label="789" value="3" />
    </g-select>
    <g-divider />
    <g-title :level="2" class="mb-3">bindResult label</g-title>
    current:{{ val4 }}
    <g-select v-model="val4" bindResult="label">
        <g-option label="123" value="1" />
        <g-option label="456" value="2" />
        <g-option label="789" value="3" />
    </g-select>
</div>
</template>

<style lang="scss">
.w64box{
    @apply w-64;
}
</style>  \`\`\`  `,
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
    'table': ` \`\`\` html 
<script setup>
import { reactive, getCurrentInstance, onMounted, ref } from 'vue';
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
            handleSortCallback: function () {
                alert('custom sort callback');
            },
            width: 480,
        },
        {
            name: 'price',
            label: '價格',
            width: 380,
            sort: true,
        },
        {
            name: 'storage',
            label: '庫存',
            sort: true,
        },
        {
            name: 'tags',
            width: 620,
            label: '標籤',
        },
        {
            name: 'btns',
            width: 200,
            label: '',
        },
    ],
    columns2: [
        {
            name: 'product',
            label: '商品名稱',
            sort: false,
            handleSortCallback: function () {
                alert('custom sort callback');
            },
            width: 480,
        },
        {
            name: 'price',
            label: '價格',
            width: 380,
            sort: true,
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
    data2: [
        { product: 'aaa', price: 200, storage: 25, id: uuidv4() },
        { product: 'bbbb', price: 100, storage: 15, id: uuidv4() },
        { product: 'cc', price: 300, storage: 5, id: uuidv4() },
    ],
    filterOtions: {},
    isLoading: false,
});

const tableInfo2 = reactive({
    columns: [
        {
            name: 'product',
            label: '商品名稱',
            sort: false,
        },
        {
            name: 'price',
            label: '價格',
            sort: true,
        },
    ],
    data: [
        { product: 'aaa', price: 200, id: uuidv4() },
        { product: 'bbbb', price: 100, id: uuidv4() },
    ],
    filterOtions: {},
    isLoading: false,
});

const tableInfo3 = reactive({
    columns: [
        {
            name: 'selection',
            type: 'selection',
        },
        {
            name: 'product',
            label: '商品名稱',
            sort: false,
        },
        {
            name: 'price',
            label: '價格',
            sort: true,
        },
    ],
    data: [
        { product: 'aaa', price: 200, id: uuidv4() },
        { product: 'bbbb', price: 100, id: uuidv4() },
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
    let arr = instance.refs.tableRef.getCheckedList();
    // console.log('arr',arr)
    arr = arr.map((obj) => obj.product);
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

const tableDemoData = ref({
    data: tableInfo.data,
    columns: tableInfo.columns,
});

const switchData = () => {
    tableDemoData.value =
        tableDemoData.value.data.length === tableInfo.data.length
            ? {
                  data: tableInfo.data2,
                  columns: tableInfo.columns2,
              }
            : {
                  data: tableInfo.data,
                  columns: tableInfo.columns,
              };
};

const showLoading = () => {
    tableInfo.isLoading = true;
    setTimeout(() => {
        tableInfo.isLoading = false;
    }, 3000);
};
</script>
<template>
    <div class="w-full mx-auto mb-6">
        <g-title :level="2" class="tw-m3">表格 資料->tableInfo3</g-title>
        支援欄位資料為selection時,也顯示checkbox。 --temp
        <g-table :columns="tableInfo3.columns" :data="tableInfo3.data" />

        <g-title :level="2" class="tw-m3">表格 固定高度</g-title>
        <g-table :columns="tableInfo2.columns" :data="tableInfo2.data" :height="350" underline />

        <g-divider />

        <g-title :level="2" class="tw-m3">表格 固定寬度</g-title>
        <g-table :columns="tableInfo2.columns" :data="tableInfo2.data" :isCheckbox="true" :width="500" />

        <g-divider />

        <g-title :level="2" class="tw-m3">表格 寬高卷軸</g-title>
        <g-table
            ref="tableRef"
            :columns="tableDemoData.columns"
            :data="tableDemoData.data"
            :height="500"
            :isCheckbox="true"
            name="products"
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
        <g-dialog :title="dialogInfo.title" v-model="dialogInfo.show1"> body~~ </g-dialog>

        <g-dialog v-model="dialogInfo.show2" mode="delete"> 確定刪除嗎? </g-dialog>

        <g-button
            class="mb-4 mt-4"
            @click="
                () => {
                    switchData();
                }
            "
            >切換資料</g-button
        >
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

<style lang="scss">
.tw-m3{
  @apply m-3;
}


</style>  \`\`\`  `,
    'table-column': ` \`\`\` html 
<script setup>
</script>
<template>
</template>  \`\`\`  `,
    'table2': ` \`\`\` html 
<script setup>
import { reactive, getCurrentInstance, onMounted, ref } from 'vue';
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
      handleSortCallback: function () {
        alert('custom sort callback');
      },
      width: 480,
    },
    {
      name: 'price',
      label: '價格',
      width: 380,
      sort: true,
    },
    {
      name: 'storage',
      label: '庫存',
      sort: true,
    },
    {
      name: 'tags',
      width: 620,
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

const tableInfo2 = reactive({
  columns: [
    {
      name: 'product',
      label: '商品名稱',
      sort: false,
    },
    {
      name: 'price',
      label: '價格',
      sort: true,
    },
  ],
  data: [
    { product: 'aaa', price: 200, id: uuidv4() },
    { product: 'bbbb', price: 100, id: uuidv4() },
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
      :columns="tableInfo2.columns"
      :data="tableInfo2.data"
      :isCheckBox="false"
      :height="350"
      underline
    />

    <g-divider />

    <g-title :level="2" class="mb-3">表格</g-title>
    <g-table
      :columns="tableInfo2.columns"
      :data="tableInfo2.data"
      :width="500"
    />

    <g-divider />

    <g-title :level="2" class="mb-3">表格</g-title>
    <g-table
      ref="tableRef"
      :columns="tableInfo.columns"
      :data="tableInfo.data"
      :height="450"
      name="products"
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
    'tabs': ` \`\`\` html 
<script setup>
import { ref, getCurrentInstance } from 'vue';
const instance = getCurrentInstance();

const clickFn = (param) => {
  // console.log('in', param);
};

const target = {
  group1: [{ name: 'tab1' }, { name: 'tab2' }],
  group2: [{ name: 'tab3' }, { name: 'tab4' }],
};

const tabs = ref(target.group1);
const tabIndex = ref(0);

const toggleGroup = () => {
  // console.log('instance.refs.demoTab',instance.refs.demoTab)
  if (tabIndex.value == 0) {
    tabs.value = target.group2;
    tabIndex.value = 1;
    instance.refs.demoTab.current = 'tab3';
  } else {
    tabs.value = target.group1;
    tabIndex.value = 0;
    instance.refs.demoTab.current = 'tab1';
  }
};
</script>

<template>
  <g-button @click="toggleGroup" :width="100">tab資料改動</g-button>

  <g-tabs
    ref="demoTab"
    :tabs="tabs"
    :clickCallback="clickFn"
  >
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
    'time-picker': ` \`\`\` html 
<script setup>
import { reactive } from 'vue';

const inputs = reactive({
  time1: new Date(),
  time2: '',
});
</script>

<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">日期選擇</g-title>
    <g-time-picker v-model="inputs.time1" :width="250" />
    <p>inputs.time1:{{ inputs.time1 }}</p>
    <g-title :level="2" class="mb-3">日期範圍選擇</g-title>
    <g-time-picker v-model="inputs.time2" rangeSelectMode :width="250" />
    <p>inputs.time2:{{ inputs.time2 }}</p>
  </div>
</template>
  \`\`\`  `,
    'timeline': ` \`\`\` html 
<template>
  <g-timeline class="w-1/2">
    <g-timeline-item>
      <div>123</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ea!
    </g-timeline-item>
    <g-timeline-item>
      <div>456</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ea!
    </g-timeline-item>
    <g-timeline-item :isEnd="true">
      <div>789</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
      reprehenderit voluptates quos unde porro debitis odit nisi eius? Eveniet,
      mollitia.
    </g-timeline-item>
    <g-timeline-item>
      <div>AAA</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ea!
    </g-timeline-item>
  </g-timeline>
</template>
  \`\`\`  `,
    'timelineitem': ` \`\`\` html 
<script setup>
</script>
<template>
</template>  \`\`\`  `,
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
    'tooltip': ` \`\`\` html 
<script setup></script>
<template>
    <g-title :level="2" class="mb-4">position:right</g-title>
    <div class="tip-demo">
        <g-tooltip position="right">
            <g-button pill iconClasses="fas fa-user iconWidth">按鈕</g-button>
            <template #content>
                <div class="tipbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ipsum?</div>
            </template>
        </g-tooltip>
        <g-tooltip position="right">
            <g-title :level="1">hello</g-title>
            <template #content>
                <div class="tipbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ipsum?</div>
            </template>
        </g-tooltip>
    </div>

    <g-divider />

    <g-title :level="2" class="mb-4">position:left</g-title>
    <div class="tip-demo">
        <g-tooltip position="left">
            <g-button pill iconClasses="fas fa-user iconWidth">按鈕</g-button>
            <template #content> 123 </template>
        </g-tooltip>

        <g-tooltip position="left">
            <g-title :level="1">hello</g-title>
            <template #content>
                <div class="tipbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ipsum?</div>
            </template>
        </g-tooltip>
    </div>

    <g-divider />
    <g-title :level="2" class="mb-4">position:top</g-title>

    <div class="tip-demo">
        <g-tooltip position="top">
            <g-button pill iconClasses="fas fa-user iconWidth">按鈕</g-button>
            <template #content> 123 </template>
        </g-tooltip>

        <g-tooltip position="top">
            <g-title :level="1">hello</g-title>
            <template #content>
                <div class="tipbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ipsum?</div>
            </template>
        </g-tooltip>
    </div>

    <g-divider />
    <g-title :level="2" class="mb-4">position:bottom</g-title>
    <div class="tip-demo">
        <g-tooltip position="bottom">
            <g-button pill iconClasses="fas fa-user iconWidth">按鈕</g-button>
            <template #content> 123 </template>
        </g-tooltip>

        <g-tooltip position="bottom">
            <g-title :level="1">hello</g-title>
            <template #content>
                <div class="tipbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ipsum?</div>
            </template>
        </g-tooltip>
    </div>

    <g-divider />
</template>

<style lang="scss">
.tip-demo {
    @apply w-full flex justify-around;
}

.tipbox {
    width: 200px;
}
</style>
  \`\`\`  `,
    'tree': ` \`\`\` html 
<script setup>
import { ref, getCurrentInstance } from 'vue';

const instance = getCurrentInstance();

const treeRef = ref(null);

const demoData = ref([
  {
    label: 'tree1',
    value: false,
    children: [
      {
        label: '1-1',
        value: false,
        clickCallBack: () => {
          alert('label1-1 click');
        },
      },
      {
        label: '1-2',
        value: true,
        children: [
          {
            label: '1-2-1',
            value: false,
            children: [
              { label: 'hello!', value: false, disabled: true },
              { label: 'world', value: false },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'tree2',
    value: false,
    children: [
      {
        label: '2-1',
        value: false,
        children: [
          { label: '2-1-1', value: false },
          { label: '2-1-2', value: true },
        ],
      },
      { label: '2-2', value: true },
    ],
  },
  {
    label: 'tree3',
    value: false,
  },
]);

const getData = () => {
  // console.log('in click');
  // console.log(instance.refs.treeRef.data);
  demoData.value = instance.refs.treeRef.data;
};
</script>
<template>
  <g-tree ref="treeRef" :data="demoData" />
  <g-button pill @click="getData">取得當前資料</g-button>
  demoData: <br />
  {{ demoData }}
</template>
  \`\`\`  `,
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
};

