<script setup>
import { computed, reactive, getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
const { active, menu } = defineProps({
  active: {
    type: String,
    default: '2-1',
  },
  menu: {
    type: Array,
    default: [
      {
        label: 'group1',
        children: [
          {
            label: 'route1',
            icon: '',
            path: '/aaa',
          },
          {
            label: 'route2',
            icon: '',
            path: '/456',
          },
        ],
      },
      {
        label: 'group2',
        children: [
          {
            label: 'route3',
            icon: 'file',
            path: '/456',
          },
          {
            label: 'route4',
            icon: 'file',
            path: '/123',
          },
        ],
      },
    ],
  },
});

const activeInfo = reactive({
  menuGroupActiveArr: [parseInt(active?.split('-')[0])],
  menuGroupActive: parseInt(active?.split('-')[0]),
  menuGroupItemActive: parseInt(active?.split('-')[1]),
});

const menuComputed = computed(() => {
  return menu.map((item, idx) => {
    // console.log(activeInfo.menuGroupActiveArr);
    return {
      ...item,
      active: activeInfo.menuGroupActiveArr.includes(idx + 1) ? true : false,
      children: item.children.map((cItem, cIdx) => {
        return {
          ...cItem,
        };
      }),
    };
  });
});

const handleGroupClick = (active, gIdx) => {
  if (!active) {
    activeInfo.menuGroupActiveArr = [
      ...activeInfo.menuGroupActiveArr,
      gIdx + 1,
    ];
  } else {
    // console.log('in filter');
    activeInfo.menuGroupActiveArr = activeInfo.menuGroupActiveArr.filter(
      (i) => i != gIdx + 1
    );
  }
};

const handleRouteTo = (path, gIdx, cIdx) => {
  let arr = [...new Set([...activeInfo.menuGroupActiveArr, gIdx + 1])];

  activeInfo.menuGroupActive = gIdx + 1;
  activeInfo.menuGroupItemActive = cIdx + 1;
  activeInfo.menuGroupActiveArr = arr;
  if (path && instance.appContext.config.globalProperties.$router) {
    instance.appContext.config.globalProperties.$router.push(path);
  }
};
</script>
<script>
export default {
  name: 'GMenu',
};
</script>
<template>
  <div class="gt-menus">
    <div
      class="gt-menu-group"
      v-for="(item, index) in menuComputed"
      :key="'group' + item.label"
      :class="item.active ? 'active' : ''"
      @click="handleGroupClick(item.active, index)"
    >
      <div>{{ item.label }}</div>
      <g-icon
        :name="item.active ? 'chevronUp' : 'chevronDown'"
        size="md"
        class="group-icon"
      />

      <template v-if="item.active">
        <div
          class="childBox"
          :class="item.active ? 'tp-aniIn' : ''"
          @click.stop="() => {}"
        >
          <div class="line"></div>
          <div
            class="gt-menu-group-item"
            :class="
              activeInfo.menuGroupItemActive == cIndex + 1 &&
              activeInfo.menuGroupActive == index + 1
                ? 'active'
                : ''
            "
            :key="`c-${index}-${cIndex}`"
            v-for="(cItem, cIndex) in item.children"
            @click.stop="
              () => {
                handleRouteTo(cItem.path, index, cIndex);
              }
            "
          >
            <g-icon
              v-if="cItem.icon"
              :name="cItem.icon"
              size="md"
              class="child-icon"
            />
            {{ cItem.label }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
