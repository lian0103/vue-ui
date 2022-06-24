<script setup>
import { useRouter } from 'vue-router';
import GIcons from './GIcons.vue';
import { computed, reactive, ref } from 'vue';

const Router = useRouter();

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
  if (path && Router) {
    Router.push(path);
  }
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
      <g-icons
        :name="item.active ? 'chevronUp' : 'chevronDown'"
        size="md"
        class="group-icon"
      />

      <template v-if="item.active">
        <div class="childBox" @click.stop="()=>{}">
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
            <g-icons
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

<style lang="scss">
.gt-menus {
  width: 220px;
  margin: auto;
  padding: 10px 0;
  @apply flex flex-col;
  .gt-menu-group {
    width: 100%;
    min-height: 36px;
    padding: 8px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    @apply text-gray1 flex justify-between flex-wrap cursor-pointer;

    &:hover {
      @apply text-main;
      .group-icon {
        color: #32a03d !important;
      }
    }

    .childBox {
      width: 100%;
      .line {
        width: 100%;
        height: 1px;
        @apply bg-color3;
        margin: 20px 0;
      }

      .gt-menu-group-item {
        padding: 6px 0 6px 30px;
        letter-spacing: 0.8px;
        border-radius: 5px;
        margin: 4px 0;
        @apply text-gray1 flex justify-start items-center cursor-pointer;
        .child-icon {
          margin-right: 10px;
        }
        &:hover {
          @apply bg-color1;
        }
        &.active {
          @apply bg-soft text-main;
          .child-icon {
            color: #32a03d !important;
          }
        }
      }
    }
  }
}
</style>
