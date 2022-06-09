<script>
import { h, ref, computed, watch } from 'vue';
import GIcons from './GIcons.vue';
import GDropdownItem from './GDropdownItem.vue';

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
    const isShow = ref(false);
    const isHover = ref(false);
    const hasSelect = ref(false);
    const handleIsShow = (childClick = false) => {
      // console.log('childClick', childClick);
      if (props.clicked || childClick) {
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
        ? 'gt-dropdown-items show'
        : 'gt-dropdown-items';
    });

    const labelComputed = computed(() => {
      return props.options &&
        props.options.findIndex((item) => item.value === props.modelValue) != -1
        ? props.options.filter((item) => item.value === props.modelValue)[0]
            .label
        : props.modelValue;
    });

    const childs =
      props.options?.map((item) => {
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
      // console.log(arr);
      return arr;
    });

    return () =>
      h(
        'div',
        {
          class: classHoverComputed.value,
          onMouseenter: handleMouseenter,
          onMouseleave: handleLeave,
        },
        [
          h(
            'span',
            { class: 'gt-dropdown-span', onClick: () => handleIsShow() },
            [
              props.icon ? h(GIcons, { name: 'file' }) : '',
              h('span', { class: textClassComputed.value }, [
                labelComputed.value,
              ]),
            ]
          ),
          h(
            'span',
            { class: 'gt-dropdown-icon', onClick: () => handleIsShow() },
            [h(GIcons, { name: 'chevronDown' })]
          ),
          h(
            'div',
            {
              class: classShowComputed.value,
              onMouseleave: handleLeave,
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
  max-width: 140px;
  height: 36px;
  padding: 0 30px 0 12px;
  letter-spacing: 0.7px;
  @apply w-full bg-white border border-solid border-gray2 rounded-md select-none;
  @apply flex justify-start items-center relative cursor-pointer;
  .gt-dropdown-span {
    height: 36px;
    @apply w-full leading-9 overflow-hidden;
    @apply flex justify-start items-center;
    svg {
      width: 22px;
    }
    .span-text {
      margin-left: 5px;
    }
  }

  .gt-dropdown-icon {
    @apply absolute;
    right: 8px;
    svg {
      width: 22px;
    }
  }

  .gt-dropdown-items {
    @apply hidden w-full -z-10 opacity-0;
    @apply absolute top-10 left-0;
    @apply py-1 px-0 bg-gray3 rounded-10;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);

    &.show {
      @apply flex flex-col z-100 opacity-100;
    }
  }
}
.gt-dropdown-hover {
  .gt-dropdown-items {
    @apply z-100 opacity-100;
    @apply flex flex-col;
    &::before {
      content: '';
      height: 50px;
      @apply w-full block bg-transparent absolute left-0 -top-10 z-10;
    }
  }
}
</style>
