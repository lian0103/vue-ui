<script>
import { h, ref, computed, watch, shallowRef } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import GIcons from 'packages/GIcons/src/index.vue';
import GDropdownItem from 'packages/GDropdownItem/src/index.vue';
import { useElementBounding, useWindowSize } from '@vueuse/core';

export default {
  props: {
    modelValue: {},
    options: { type: Array },
    clicked: { type: Boolean, default: false },
    hover: { type: Boolean, default: false },
    icon: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    // console.log(props);
    const id = uuidv4();
    const rootObj = {
      [id]: shallowRef(),
    };
    const isShow = ref(false);
    const isHover = ref(false);
    const hasSelect = ref(false);

    const {
      height: rootHeight,
      width: rootWidth,
      top: rootTop,
      bottom: rootBottom,
      right: rootRight,
      left: rootLeft,
      update: updateRoot,
    } = useElementBounding(rootObj[id]);
    const { width: winWidth, height: winHeight } = useWindowSize();

    const handleIsShow = (childClick = false) => {
      if (props.clicked && !childClick) {
        let show = !isShow.value;
        isShow.value = show;
        isHover.value = false;
      }
    };

    const handleMouseenter = () => {
      if (props.hover) {
        isHover.value = true;
        isShow.value = true;
      }
    };

    const handleLeave = () => {
      if (props.hover) {
        isHover.value = false;
        isShow.value = false;
      }
    };

    const classHoverComputed = computed(() => {
      return props.hover && isHover.value
        ? 'gt-dropdown gt-dropdown-hover'
        : 'gt-dropdown';
    });

    const classShowComputed = computed(() => {
      return props.clicked && isShow.value
        ? 'gt-dropdown-items show tp-aniIn'
        : 'gt-dropdown-items';
    });

    const labelComputed = computed(() => {
      return props.options &&
        props.options.findIndex((item) => item.value === props.modelValue) != -1
        ? props.options.filter((item) => item.value === props.modelValue)[0]
            .label
        : props.modelValue;
    });

    const maxWidth = ref(0);
    const curSelectWidth = ref(0);

    watch(
      () => props.modelValue,
      (val) => {
        let target = props.options.find((item) => item.value === val);
        curSelectWidth.value =
          target.label.length * 10 >= 235 ? 235 : target.label.length * 10;
      }
    );

    const childs =
      props.options?.map((item) => {
        let itemWidth = item.label.length * 10;
        if (itemWidth > maxWidth.value) {
          maxWidth.value = itemWidth >= 235 ? 235 : itemWidth;
        }
        if (props.modelValue === item.value) {
          curSelectWidth.value = itemWidth >= 235 ? 235 : itemWidth;
        }

        return h(GDropdownItem, {
          option: item,
          label: item.label,
          value: item.value,
          icon: props.icon,
          parentValue: computed(() => props.modelValue),
          handleChildClick: (val) => {
            handleIsShow('childClick');
            hasSelect.value = true;
            emit('update:modelValue', val);
          },
        });
      }) || [];
    // console.log('childs', childs);
    const textClassComputed = computed(() => {
      let arr = [];
      if (props.icon) arr.push('span-text');
      if (hasSelect.value) arr.push('text-main');
      return arr;
    });

    const eventHandle = () => {
      isShow.value = false;
    };

    const popupStyle = ref({});

    watch(
      () => isShow.value,
      (val, oldVal) => {
        if (val && document.getElementsByTagName('html')[0]) {
          document
            .getElementsByTagName('html')[0]
            .addEventListener('click', eventHandle, false);
          // console.log('id', id);
          // console.log('rootTop.value', rootTop.value);
          let rootWidth = parseInt(rootRight.value) - parseInt(rootLeft.value);
          if (rootObj[id]) {
            popupStyle.value = {
              top: parseInt(rootTop.value) + 42 + 'px',
              left: parseInt(rootLeft.value) + 'px',
              width: maxWidth.value + 48 + 'px',
            };
          }
        } else {
          document
            .getElementsByTagName('html')[0]
            ?.removeEventListener('click', eventHandle);
        }
      }
    );

    return () =>
      h(
        'div',
        {
          ref: rootObj[id],
          class: classHoverComputed.value,
          onMouseenter: handleMouseenter,
          onMouseleave: handleLeave,
          style: { width: curSelectWidth.value + 48 + 'px' },
          onClick: (e) => {
            e.stopPropagation();
            handleIsShow();
          },
        },
        [
          h(
            'span',
            {
              class: 'gt-dropdown-span',
            },
            [
              // props.icon ? h(GIcons, { name: 'file',class:'pre-icon' }) : '',
              h('span', { class: textClassComputed.value }, [
                labelComputed.value,
              ]),
            ]
          ),
          h(
            'span',
            {
              class: 'gt-dropdown-icon',
            },
            [h(GIcons, { name: 'chevronDown' })]
          ),
          h(
            'div',
            {
              class: classShowComputed.value,
              onMouseleave: handleLeave,
              style: popupStyle.value,
            },
            childs
          ),
        ]
      );
  },
};
</script>

<style lang="scss">
.gt-dropdown {
  min-width: 92px;
  height: 36px;
  font-size: 14px;
  line-height: 20px;
  padding: 0 34px 0 14px;
  letter-spacing: 0.7px;
  @apply bg-white border border-solid border-gray2 rounded-md select-none;
  @apply flex justify-start items-center relative cursor-pointer;
  .gt-dropdown-span {
    @apply w-full leading-9 overflow-hidden;
    @apply flex justify-start items-center;
    .pre-icon {
      margin-left: 5px;
    }
    svg {
      width: 22px;
    }
    .span-text {
      // margin-left: 5px;
    }
  }

  .gt-dropdown-icon {
    @apply absolute;
    top: 7px;
    right: 0px;
    svg {
      width: 22px;
    }
  }

  .gt-dropdown-items {
    @apply hidden w-full -z-10 opacity-0;
    // @apply absolute top-10 left-0;
    @apply py-1 px-0 bg-gray3 rounded-10;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);

    &.show {
      @apply fixed flex flex-col z-100 opacity-100;
    }
  }
}
.gt-dropdown-hover {
  .gt-dropdown-items {
    @apply z-100 opacity-100;
    @apply fixed flex flex-col;
    &::before {
      content: '';
      height: 50px;
      @apply w-full block bg-transparent absolute left-0 -top-10 z-10;
    }
    animation: tpFadeIn 0.5s forwards;
  }
}
</style>
