<script>
import { useQuasar } from 'quasar'
import { defineComponent, defineAsyncComponent , ref , computed , onBeforeUnmount} from 'vue'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat',align: 'center', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
]

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const $q = useQuasar()
    let timer

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })

    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 5
    })

    const inputRef = ref(null)

    return {
      showLoading () {
        $q.loading.show({
          message: '載入中'
        })

        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 5000)
      },

      triggerNegative (position) {
        $q.notify({
          timeout:'2000',
          position,
          type: 'negative',
          message: 'This is a "negative" type notification.'
        })
      },

      triggerWarning (position) {
        $q.notify({
          timeout:'2000',
          position,
          type: 'warning',
          message: 'This is a "warning" type notification.'
        })
      },

      triggerInfo (position) {
        $q.notify({
          timeout:'2000',
          position,
          type: 'info',
          message: 'This is a "info" type notification.'
        })
      },

      triggerDefault (position) {
        $q.notify({
          timeout:'2000',
          position,
          message: 'This is a "Default" type notification.'
        })
      },
      model: ref(''),
      inputRef,
      text:ref(''),
      buttonClick:ref(false),
      shape: ref('line1'),
      valCheckbox1: ref(true),
      valCheckbox2: ref(false),
      valCheckbox3: ref(false),
      value: ref(true),
      current: ref(1),
      tab: ref('mails'),
      model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      prompt:ref(false),
      font_weight:['100','200','300','400','500','600','700','bold','bolder','lighter','normal'],
      
      selected : ref([]),

      pagination,
      columns,
      rows,

      pagesNumber: computed(() => Math.ceil(rows.length / pagination.value.rowsPerPage))
    }
  }
})
</script>

<template>
  <div class="py-12 flex justify-center items-center flex-col">
    <!-- 文字定義 -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">文字定義</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li v-for="n in 6">
        <div>
          <h1 :class='`gt-h${n}`'>{{`h${ n }`}} / 文字樣式</h1>
        </div>
        <div>
          {{`<h${n} `}}
          <span class="text-red">class="gt-h{{`${n}`}}"</span>
          {{`
          > h${n} / 文字樣式</h${n}>`}}
        </div>
      </li>
      <li v-for="i in 24" v-show="i >= 12">
        <div>
          <p :class='`gt-font-size-${i} q-pa-none q-ma-none`'>font-size-{{`${i}`}} / 文字樣式</p>
        </div>
        <div>
          {{ `<p class=' `}}
          <span class="text-red">gt-font-size-{{`${i}`}}</span>
          {{` q-pa-none q-ma-none'>font-size-${i} / 文字樣式</p>` }}
        </div>
      </li>
      <li v-for="item in font_weight" :key="item">
        <div>
          <p :class='`gt-font-weight-${item} q-pa-none q-ma-none`'>font-weight:{{item}}</p>
        </div>
        <div>
          {{ `<p class=' `}}
          <span class="text-red">gt-font-weight-{{`${item}`}}</span>
          {{` q-pa-none q-ma-none'>font-weight:${item}</p>` }}
        </div>
      </li>
    </ul>
    <!-- END // 文字定義 -->
    
    <!-- button -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-button</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-btn class="gt-q-button" icon='add' label="預設按紐" />
        </div>
        <div>
          {{`<q-btn `}} <span class="text-red">class="gt-q-button"</span> {{`label="預設按紐" />`}}
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-q-button" color="primary" label="主要按紐" />
        </div>
        <div>
          {{`<q-btn `}} <span class="text-red">class="gt-q-button"</span> {{`color="primary" label="主要按紐" />`}}
        </div>
      </li>
      <!-- <li>
        <div>
          <q-btn class="gt-q-button" color="positive" label="成功按紐" />
        </div>
        <div>
          {{`<q-btn class="gt-q-button" color="positive" label="成功按紐" />`}}
        </div>
      </li> -->
      <li>
        <div>
          <q-btn class="gt-q-button" color="warning" label="警告按紐" />
        </div>
        <div>
          {{`<q-btn class="gt-q-button" color="warning" label="警告按紐" />`}}
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-q-button" color="negative" label="危險按紐" />
        </div>
        <div>
          {{`<q-btn class="gt-q-button" color="negative" label="危險按紐" />`}}
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-q-button" color="gray" label="灰色按紐" />
        </div>
        <div>
          {{`<q-btn class="gt-q-button" color="gray" label="灰色按紐" />`}}
        </div>
      </li>
      <!-- <li>
        <div>
          <q-btn class='gt-q-button' rounded label="圓角預設按紐" />
        </div>
        <div>
          {{ `<q-btn class="gt-q-button" rounded label="圓角預設按紐" />` }}
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-q-button" rounded color="primary" label="圓角按紐" />
        </div>
        <div>
          {{ `<q-btn class="gt-q-button" rounded color="primary" label="圓角按紐" />` }}
        </div>
      </li> -->
      <li>
        <div>
          <q-btn class="gt-q-text-button" label="文字按紐" />
        </div>
        <div>
          {{`<q-btn `}} <span class="text-red">class="gt-q-text-button"</span> {{`label="文字按紐" />`}}
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-q-text-button" color="success"  label="文字按紐" />
        </div>
        <div>
          {{`<q-btn `}} <span class="text-red">class="gt-q-text-button"</span> {{`color="success" label="文字按紐" />`}}
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-q-text-button" color="danger"  label="文字按紐" />
        </div>
        <div>
          {{`<q-btn `}} <span class="text-red">class="gt-q-text-button"</span> {{`color="danger" label="文字按紐" />`}}
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-q-text-button" color="primary"  label="文字按紐" />
        </div>
        <div>
          {{`<q-btn `}} <span class="text-red">class="gt-q-text-button"</span> {{`color="primary" label="文字按紐" />`}}
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-q-text-button" color="warning"  label="文字按紐" />
        </div>
        <div>
          {{`<q-btn `}} <span class="text-red">class="gt-q-text-button"</span> {{`color="warning" label="文字按紐" />`}}
        </div>
      </li>
    </ul>
    <!-- END // button -->

    <!-- filter -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">filter</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-btn class='gt-q-filter' outline rounded @click="buttonClick = !buttonClick" :color="buttonClick == true ? 'primary' :''" label="圓角預設按紐" />
        </div>
        <div>
          {{ `<q-btn `}}
          <span class="text-red">class="gt-q-filter"</span>
          {{`outline rounded label="圓角預設按紐" />` }}
        </div>
      </li>
    </ul>
    <!-- END // filter -->

    <!-- a -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">a</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <a href="https://www.google.com.tw/" class="gt-q-link primary" target="_blank">超連結</a>
        </div>
        <div>
          {{`<a `}} <span class="text-red">class="gt-q-link primary"</span> {{` href="https://www.google.com.tw/" target="_blank">超連結</a>`}}
        </div>
      </li>
      <li>
        <div>
          <a href="https://www.google.com.tw/" class="gt-q-disable-link primary" target="_blank">超連結</a>
        </div>
        <div>
          {{`<a href="https://www.google.com.tw/"`}} <span class="text-red">class="gt-q-disable-link primary"</span>  {{`target="_blank">超連結</a>`}}
        </div>
      </li>
    </ul>
    <!-- END // a -->

    <!-- radio -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">radio</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-radio class="gt-q-radio q-mr-sm" v-model="shape" val="line1" label="選項1" />
          <q-radio class="gt-q-radio" v-model="shape" val="line2" label="選項2" />
        </div>
        <div>
          {{`<q-radio `}}
          <span class="text-red">class="gt-q-radio"</span>
          {{`v-model="shape" val="line1" label="選項1" />`}}
        </div>
      </li>
    </ul>
    <!-- END // radio -->

    <!-- q-checkbox -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-checkbox</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-checkbox class="gt-q-checkbox q-mr-sm" v-model="valCheckbox1" label="複選框 A" />
          <q-checkbox class="gt-q-checkbox q-mr-sm" v-model="valCheckbox2" label="複選框 B" />
          <q-checkbox class="gt-q-checkbox" v-model="valCheckbox3" label="複選框 C" />
        </div>
        <div>
          {{`<q-checkbox `}}
          <span class="text-red">class="gt-q-checkbox"</span>
          {{` v-model="valCheckbox1" label="複選框 A" />`}}
        </div>
      </li>
    </ul>
    <!-- END // q-checkbox -->

    <!-- q-toggle -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-toggle</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-toggle class="gt-q-toggle" v-model="value" />
        </div>
        <div>
          {{`<q-toggle `}}
          <span class="text-red">class="gt-q-toggle"</span>
          {{` v-model="value" />`}}
        </div>
      </li>
    </ul>
    <!-- END // q-toggle -->

    <!-- q-pagination -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-pagination</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-pagination
            class="gt-q-pagination"
            rounded 
            v-model="current"
            :max="5"
            direction-links
          />
        </div>
        <div>
          {{`<q-pagination
          `}}
            <span class="text-red">class="gt-q-pagination"</span>
          {{`
            rounded 
            v-model="current"
            :max="5"
            direction-links
          />`}}
        </div>
      </li>
    </ul>
    <!-- END // q-pagination -->

    <!-- tabs -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">tabs</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <!-- <el-card> -->
            <q-tabs
              class="gt-q-tabs"
              v-model="tab"
            >
              <q-tab name="mails" label="內容1" />
              <q-tab name="alarms" label="內容2" />
            </q-tabs>

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                內容1
              </q-tab-panel>

              <q-tab-panel name="alarms">
                內容2
              </q-tab-panel>
            </q-tab-panels>
          <!-- </el-card> -->
        </div>
        <div>
          {{`
            <q-tabs
          `}}
            <span class="text-red">class="gt-q-tabs"</span>
          {{`
              v-model="tab"
            >
              <q-tab name="mails" label="內容1" />
              <q-tab name="alarms" label="內容2" />
            </q-tabs>

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                內容1
              </q-tab-panel>

              <q-tab-panel name="alarms">
                內容2
              </q-tab-panel>
            </q-tab-panels>`}}
        </div>
      </li>
    </ul>
    <!-- END // tabs -->

    <!-- Dialog -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">Dialog</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-btn label="打開Dialog" class="gt-q-button" @click="prompt = true" />

          <q-dialog class="gt-q-dialog" v-model="prompt" persistent>
            <q-card style="width: 380px">
              <q-card-section class="card-header row items-center q-pb-none">
                <div>TITLE</div>
                <q-btn class="gt-q-close" icon="close" flat round dense v-close-popup />
              </q-card-section>
              <q-card-section class="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-card-section>
              <q-card-actions class="card-footer" align="right">
                <q-btn flat label="取消" v-close-popup />
                <q-btn class="gt-q-button" label="確認" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

        </div>
        <div>
          {{`<q-dialog `}}
          <span class="text-red">class="gt-q-dialog"</span>
          {{`v-model="prompt" persistent>
            <q-card style="width: 380px">
              <q-card-section class="`}}
              <span class="text-red">card-header</span>
              {{` row items-center q-pb-none">
                <div class="text-h6">TITLE</div>
                <q-btn class="`}}
                <span class="text-red">gt-q-close</span>{{`" icon="close" flat round dense v-close-popup />
              </q-card-section>
              <q-card-section class="`}}<span class="text-red">card-body</span>{{`">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-card-section>
              <q-card-actions class="`}}<span class="text-red">card-footer</span> {{`" align="right">
                <q-btn flat label="取消" v-close-popup />
                <q-btn `}}<span class="text-red">class="gt-q-button"</span>{{`color="positive" label="確認" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>`}}
        </div>
      </li>
    </ul>
    <!-- END // Dialog -->

    <!-- Loading -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">Loading</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-btn class="gt-q-button" @click="showLoading" label="Show Loading" />
        </div>
        <div>
          須配合<br>
          {{`<q-btn class="gt-q-button" @click="showLoading" label="Show Loading" />`}}
          <br>
          {{
            `showLoading () {
        $q.loading.show({
          message: '載入中'
        })

        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 5000)
      }`
          }}
        </div>
      </li>
    </ul>
    <!-- END // Loading -->

    <!-- Notify -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">Notify</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-btn class="gt-q-button" color="negative" @click="triggerNegative('top')" label="Trigger 'negative'" /> <br><br>
          <q-btn class="gt-q-button" color="warning" text-color="dark" @click="triggerWarning('top')" label="Trigger 'warning'" /><br><br>
          <q-btn class="gt-q-button" @click="triggerInfo('top')" label="Trigger 'info'" /> <br><br>
          <q-btn class="gt-q-button" @click="triggerDefault('top')" label="Trigger 'Default'" />
        </div>
        <div>
          {{`<q-btn class="gt-q-button" color="negative" @click="triggerNegative('top')" label="Trigger 'negative'" />`}} <br>
          <br>需搭配 <br><br>
          {{`triggerNegative (position) {
            $q.notify({
              timeout:'5000',
              position,
              type: 'negative',
              message: 'This is a "negative" type notification.'
            })
          },`}}
          <br><br><hr><br>
          {{`<q-btn class="gt-q-button" color="warning" text-color="dark" @click="triggerWarning('top')" label="Trigger 'warning'" />`}}
          <br>需搭配 <br><br>
          {{`
          triggerWarning (position) {
            $q.notify({
              timeout:'2000',
              position,
              type: 'warning',
              message: 'This is a "warning" type notification.'
            })
          },
          `}}
         <br><br><hr><br>
          {{`<q-btn class="gt-q-button" @click="triggerInfo('top')" label="Trigger 'info'" />`}}
          <br>需搭配 <br><br>
          {{`triggerInfo (position) {
            $q.notify({
              timeout:'2000',
              position,
              type: 'info',
              message: 'This is a "info" type notification.'
            })
          },`}}
          <br><br><hr><br>
          {{`<q-btn class="gt-q-button" @click="triggerDefault('top')" label="Trigger 'Default'" />`}}
          <br>需搭配 <br><br>
          {{`
            triggerDefault (position) {
              $q.notify({
                timeout:'2000',
                position,
                message: 'This is a "Default" type notification.'
              })
            },
          `}}
        </div>
      </li>
    </ul>
    <!-- END // Notify -->

    <!-- q-table -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-table</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li style="width:100%;">
        <div style="width:100%;">

          <q-table
            class="gt-q-table"
            :rows="rows"
            :columns="columns"
            row-key="name"
            selection="multiple"
            v-model:selected="selected"
            v-model:pagination="pagination"
            hide-bottom
            hide-pagination
          />
          <!-- <div class="row justify-center q-mt-md">
            <q-pagination
              class="gt-q-pagination"
              rounded
              direction-links
              v-model="pagination.page"
              :max="pagesNumber"
            />
          </div> -->

        </div>
      </li>
      <li>
        <div>
          {{`<q-table `}}
            <span class="text-red">class="gt-q-table"</span>
          {{`
            :rows="rows"
            :columns="columns"
            row-key="name"
            selection="multiple"
            v-model:selected="selected"
            v-model:pagination="pagination"
            hide-bottom
            hide-pagination
          />
          `}}
        </div>
      </li>
    </ul>
    <!-- END // q-table -->

    <!-- q-btn-dropdown -->
    <!-- <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-btn-dropdown</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-btn-dropdown label="Dropdown Button" class="gt-q-dropdown">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Videos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Articles</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <div>

        </div>
      </li>
    </ul> -->
    <!-- END // q-btn-dropdown -->

    <!-- q-input -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-input</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <div class="row">
            <p>一般:</p>
            <q-input class="gt-q-input" outlined v-model="text"/>
          </div>
          <br>
          <div class="row">
            <p>值只能少於3個:</p>
            <q-input
              class="gt-q-input"
              ref="inputRef"
              outlined
              v-model="model"
              :rules="[ val => val.length <= 3 || 'Please use maximum 3 characters']"
            />
          </div>
        </div>
        <div>
          {{`<q-input `}} 
          <span class="text-red">class="gt-q-input"</span>
          {{`outlined v-model="text"/>`}}
        </div>
      </li>
    </ul>
    <!-- END // q-input -->

    <!--  -->
    <!-- <div class="paragraphHead">
      <g-title :level="1" class="mb-4"></g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>

        </div>
        <div>

        </div>
      </li>
    </ul> -->
    <!-- END //  -->

  </div>
</template>

<style lang="scss" scoped>
ul.ui-flex{
  li{
    display: flex;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #00000026;
    > div{
      width: 50%;
      &:nth-child(1){
        margin: auto;
      }
    }
  }
}
</style>