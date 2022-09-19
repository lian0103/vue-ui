<script setup>
import {
  watch,
  computed,
  reactive,
  getCurrentInstance,
  onMounted,
  ref,
} from 'vue';
import { v4 as uuid } from 'uuid';

const instance = getCurrentInstance();
const {
  active,
  menu: menuFromParent,
  activePath,
  collapsed: collapsedFromParent,
  onlyOneLevel,
} = defineProps({
  active: {
    type: String,
  },
  activePath: {
    type: String,
  },
  menu: {
    type: Array,
    default: [],
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
  onlyOneLevel: {
    type: Boolean,
    default: false,
  },
});

const collapsed = ref(collapsedFromParent);

const isCollapsedAndHadOpenedOne = ref(false);

const menu = menuFromParent.map((item, idx) => {
  // console.log(info.menuGroupActiveArr);
  return {
    ...item,
    children: item.children
      ? item.children.map((cItem, cIdx) => {
          return {
            ...cItem,
            uuid: uuid(),
          };
        })
      : [],
  };
});

const findRouteIndexByPath = () => {
  let routerMenuIndex = null;
  let groupIndex = null;
  let activeItemIndex = null;

  menu.forEach((item, idx) => {
    if (Array.isArray(item.children)) {
      item.children.forEach((cItem, cIdx) => {
        if (cItem.path === activePath) {
          groupIndex = idx + 1;
          activeItemIndex = cItem.uuid;
          routerMenuIndex = `${idx + 1}-${cIdx + 1}`;
        }
      });
    }
  });

  return {
    routerMenuIndex,
    groupIndex,
    activeItemIndex,
  };
};

const result = findRouteIndexByPath();

const info = reactive({
  menuGroupActiveArr: collapsed.value
    ? []
    : result.routerMenuIndex
    ? [result.groupIndex]
    : [parseInt(active?.split('-')[0])],
  menuGroupActive: collapsed.value
    ? []
    : result.groupIndex
    ? result.groupIndex
    : parseInt(active?.split('-')[0]),
  menuGroupItemActive: result.activeItemIndex || '',
});

const menuComputed = computed(() => {
  return menu.map((item, idx) => {
    // console.log(info.menuGroupActiveArr);
    return {
      ...item,
      active: info.menuGroupActiveArr.includes(idx + 1) ? true : false,
      children: item.children || [],
    };
  });
});

const handleGroupClick = (item, gIdx) => {
  // console.log(collapsed.value);
  const Router = instance.appContext.config.globalProperties.$router || null;
  let { active, path } = item;
  if (path) {
    if (Router) {
      Router.push(path);
    }
  } else if (onlyOneLevel) {
    if (Router) {
      if (Router.currentRoute.value.meta.title != item.label) {
        // console.log(item.children[0].path);
        // console.log(item.children[0].name);
        instance.appContext.config.globalProperties.handleCurrentlayoutTab(
          item.children[0].name
        );
        instance.appContext.config.globalProperties.handleTabslayoutTab(
          item.children
        );

        // instance.refs.layoutTab.current.value = item.children[0].name;
        Router.push(item.children[0].path);
      }
    }
  } else if (!active) {
    info.menuGroupActive = gIdx + 1;
    info.menuGroupActiveArr = collapsed.value
      ? [gIdx + 1]
      : [...info.menuGroupActiveArr, gIdx + 1];

    isCollapsedAndHadOpenedOne.value = collapsed.value ? gIdx + 1 : false;
  } else {
    info.menuGroupActiveArr = info.menuGroupActiveArr.filter(
      (i) => i != gIdx + 1
    );
    isCollapsedAndHadOpenedOne.value = false;
  }
  // console.log(info);
};

const handleRouteTo = (path, gIdx, cItemUuid) => {
  let arr = [...new Set([...info.menuGroupActiveArr, gIdx + 1])];

  info.menuGroupActive = gIdx + 1;
  info.menuGroupItemActive = cItemUuid;
  info.menuGroupActiveArr = arr;
  if (path && instance.appContext.config.globalProperties.$router) {
    instance.appContext.config.globalProperties.$router.push(path);
  }
};

defineExpose({
  collapsed,
});

watch(
  () => collapsed.value,
  (val) => {
    if (val) {
      info.menuGroupActiveArr = [];
      info.menuGroupActive = [];
    }
  }
);

watch(
  () => isCollapsedAndHadOpenedOne.value,
  (val) => {
    let dom = document.getElementsByClassName('gt-sidebar');
    if (val && collapsed.value) {
      dom[0].classList.add('fix-area');
    } else {
      dom[0].classList.remove('fix-area');
    }
  }
);
</script>
<script>
export default {
  name: 'GMenu',
};
</script>
<template>
  <div class="gt-menus" :class="collapsed ? 'collapsed' : ''">
    <div
      class="gt-menu-group"
      v-for="(item, index) in menuComputed"
      :key="'group' + item.label"
      :class="item.active ? 'active' : ''"
      @click="handleGroupClick(item, index)"
    >
      <div class="menu-text">
        <div class="left">
          <div class="iconBox" :class="collapsed ? 'collapesed' : ''">
            <g-icon
              v-if="item.icon || collapsed"
              :name="item.icon || 'items'"
              size="md"
            />
          </div>

          <span v-if="!collapsed">{{ item.label }}</span>
        </div>

        <g-icon
          v-if="!item.path && !collapsed && !onlyOneLevel"
          name="chevron-up"
          :style="item.active ? {} : { transform: 'rotate(180deg)' }"
          size="md"
          class="group-icon"
        />
      </div>

      <template v-if="item.children.length > 0 && !onlyOneLevel">
        <div
          class="childBox"
          :style="
            item.active
              ? {
                  height: collapsed
                    ? `${item.children.length * 40}px`
                    : `${item.children.length * 44 + 25}px`,
                }
              : { height: `0px` }
          "
          :class="
            !collapsed
              ? item.active
                ? 'open'
                : ''
              : info.menuGroupActive == index + 1
              ? 'open'
              : ''
          "
          @click.stop="() => {}"
        >
          <div v-if="!collapsed" class="line"></div>
          <div
            :key="cItem.uuid"
            v-for="(cItem, cIndex) in item.children"
            class="gt-menu-group-item"
            :class="info.menuGroupItemActive == cItem.uuid ? 'active' : ''"
            @click.stop="
              () => {
                handleRouteTo(cItem.path, index, cItem.uuid);
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
