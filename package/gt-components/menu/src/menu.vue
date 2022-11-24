<script setup>
import { watch, computed, reactive, getCurrentInstance, ref } from "vue";
import { v4 as uuid } from "uuid";

const instance = getCurrentInstance();

const props = defineProps({
  active: {
    type: String,
  },
  activePath: {
    type: String,
    default: "/",
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

const collapsed = computed(() => {
  return props.collapsed;
});

const activePath = computed(() => {
  return props.onlyOneLevel
    ? "/" + props.activePath?.split("/")[1]
    : props.activePath;
});

const rootPath = computed(() => {
  let result = "/" + props.activePath?.split("/")[1];
  return result;
});

const onlyOneLevel = ref(props.onlyOneLevel);

const isCollapsedAndHadOpenedOne = ref(false);

const menu = ref(
  props.menu.map((item, idx) => {
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
  })
);

watch(
  () => props.menu,
  (val) => {
    // console.log(val);
    if (props.menu) {
      menu.value = props.menu.map((item, idx) => {
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
    }
  },
  { deep: true }
);

const findRouteIndexByPath = () => {
  let routerMenuIndex = null;
  let groupIndex = null;
  let activeItemIndex = null;

  menu.value.forEach((item, idx) => {
    if (Array.isArray(item.children)) {
      item.children.forEach((cItem, cIdx) => {
        if (cItem.path === activePath.value) {
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

const result = reactive(findRouteIndexByPath());
const setActiveInfo = () => {
  return {
    menuGroupActiveArr: collapsed.value
      ? []
      : result.routerMenuIndex
      ? [result.groupIndex]
      : [parseInt(props.active?.split("-")[0])],
    menuGroupActive: collapsed.value
      ? []
      : result.groupIndex
      ? result.groupIndex
      : parseInt(props.active?.split("-")[0]),
    menuGroupItemActive: result.activeItemIndex || "",
  };
};
const info = reactive(setActiveInfo());

const menuComputed = computed(() => {
  return menu.value.map((item, idx) => {
    // console.log(info.menuGroupActiveArr);

    return {
      ...item,
      active: info.menuGroupActiveArr.includes(idx + 1) ? true : false,
      children: item.children || [],
    };
  });
});

const handleGroupClick = (item, gIdx) => {
  // console.log('handleGroupClick', onlyOneLevel.value);
  const Router = instance.appContext.config.globalProperties.$router || null;
  let { active, path, children } = item;
  // debugger
  if (path && children.length === 0) {
    if (Router) {
      Router.push(item);
    }
  } else if (onlyOneLevel.value) {
    if (Router) {
      if (Router.currentRoute.value.meta.title != item.label) {
        // console.log(item.children[0].path);
        // console.log(item.children[0].name);

        // instance.refs.layoutTab.current.value = item.children[0].name;
        Router.push(item.children[0]);

        // setTimeout(() => {
        //   instance.appContext.config.globalProperties.handleCurrentlayoutTab(
        //     item.children[0].name
        //   );
        //   instance.appContext.config.globalProperties.handleTabslayoutTab(
        //     item.children
        //   );
        // }, 500);
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

const handleMenuGroupMouseenter = (item, gIdx)=>{
  let { active } = item;
  if(collapsed.value && !active){
    info.menuGroupActive = gIdx + 1;
    info.menuGroupActiveArr = [gIdx + 1];
    isCollapsedAndHadOpenedOne.value = gIdx + 1;
  }
}

const handleMenuGroupMouseleave = (item, gIdx)=>{
  if(collapsed.value ){
    info.menuGroupActive = [];
    info.menuGroupActiveArr = [];
    isCollapsedAndHadOpenedOne.value = false;
  }
}

const handleRouteTo = (path, gIdx, cItemUuid, cItem) => {
  let arr = [...new Set([...info.menuGroupActiveArr, gIdx + 1])];

  info.menuGroupActive = gIdx + 1;
  info.menuGroupItemActive = cItemUuid;
  info.menuGroupActiveArr = arr;
  if (path && instance.appContext.config.globalProperties.$router) {
    instance.appContext.config.globalProperties.$router.push(cItem);
  }
};

defineExpose({
  collapsed,
  onlyOneLevel,
  activePath,
});

const handleChildBoxMouseleave = ()=>{
  if (collapsed.value) {
    handleMenuClose();
  }
}

const handleMenuClose = () => {
  isCollapsedAndHadOpenedOne.value = false;
  info.menuGroupActiveArr = [];
};

watch(
  () => isCollapsedAndHadOpenedOne.value,
  (val) => {
    // console.log('in', val);
    if (val && document.getElementsByTagName("html")[0]) {
      document
        .getElementsByTagName("html")[0]
        .addEventListener("click", handleMenuClose, false);
    } else {
      document
        .getElementsByTagName("html")[0]
        ?.removeEventListener("click", handleMenuClose);
    }
  }
);
watch(
  () => collapsed.value,
  (val) => {
    if (val) {
      info.menuGroupActiveArr = [];
      info.menuGroupActive = [];
    } else {
      Object.assign(result, findRouteIndexByPath());
      Object.assign(info, setActiveInfo());
    }
  }
);
</script>
<script>
export default {
  name: "GMenu",
};
</script>
<template>
  <div class="gt-menus" :class="collapsed ? 'collapsed' : ''">
    <div
      class="gt-menu-group"
      v-for="(item, index) in menuComputed"
      :key="'group' + item.label"
      :class="item.active ? 'active' : ''"
      @click.stop="handleGroupClick(item, index)"
      @mouseleave="handleMenuGroupMouseleave(item, index)"
    >
      <div
        class="menu-text"
        :class="{
          active: activePath
            ? item.path == activePath
              ? true
              : collapsed && !onlyOneLevel && item.path?.startsWith(rootPath)
              ? true
              : false
            : false,
        }"
      >
        <div class="left" @mouseenter="handleMenuGroupMouseenter(item, index)" >
          <div class="iconBox" :class="collapsed ? 'collapesed' : ''">
            <g-icon
              v-if="item.icon || collapsed || item.iconClasses"
              :name="
                item.icon
                  ? item.icon
                  : item.iconClasses
                  ? 'menuIconName'
                  : 'items'
              "
              :classes="item.iconClasses"
              size="md"
            />
          </div>

          <span v-if="!collapsed">{{ item.label }}</span>
        </div>

        <g-icon
          v-if="item.children.length > 0 && !collapsed && !onlyOneLevel"
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
                    ? `${
                        item.children.length * 40 < 45
                          ? '45'
                          : item.children.length * 40
                      }px`
                    : `${
                        item.children.length * 44 + 40 < 85
                          ? '85'
                          : item.children.length * 44 + 40
                      }px`,
                }
              : { height: `0px` }
          "
          :class="
            !collapsed
              ? item.active
                ? 'open'
                : ''
              : info.menuGroupActive == index + 1
              ? 'open tp-aniIn-NoTran'
              : 'tp-aniOut-Notran'
          "
          @click.stop="() => {}"
          @mouseleave="handleChildBoxMouseleave"
        >
          <div v-if="!collapsed" class="line"></div>
          <div
            :key="cItem.uuid"
            v-for="(cItem, cIndex) in item.children"
            class="gt-menu-group-item"
            :class="
              activePath
                ? cItem.path == activePath
                  ? 'active'
                  : ''
                : info.menuGroupItemActive == cItem.uuid
                ? 'active'
                : ''
            "
            @click.stop="
              () => {
                handleRouteTo(cItem.path, index, cItem.uuid, cItem);
              }
            "
          >
            <g-icon
              v-if="cItem.icon || cItem.iconClasses"
              :name="cItem.icon || 'childIconName'"
              :classes="cItem.iconClasses"
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
