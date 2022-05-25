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
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    console.log(props);
    const isShow = ref(false);
    const isHover = ref(false);
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

    // console.log('props', props);
    const childs =
      props.options?.map((item) => {
        return h(GDropdownItem, {
          option: item,
          label: item.label,
          value: item.value,
          parentValue: computed(() => props.modelValue),
          handleChildClick: (val) => {
            handleIsShow('childClick');
            emit('update:modelValue', val);
          },
        });
      }) || [];
    // console.log('childs', childs);

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
            [h(GIcons, { name: 'calendar' }), labelComputed.value]
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
  width: 100%;
  max-width: 140px;
  height: 36px;
  padding: 0 22px 0 12px;
  letter-spacing: 0.7px;
  background: #ffffff;
  border: 1px solid #dbe9d8;
  border-radius: 6px;
  user-select: none;
  @apply flex justify-start items-center relative cursor-pointer;
  .gt-dropdown-span {
    width: 100%;
    height: 36px;
    line-height: 36px;
    overflow: hidden;
    @apply flex justify-start items-center;
    svg {
      width: 22px;
    }
  }

  .gt-dropdown-icon {
    @apply absolute right-0;
    svg {
      width: 22px;
    }
  }

  .gt-dropdown-items {
    display: none;
    width: 100%;
    z-index: -1;
    opacity: 0;
    @apply absolute top-10 left-0;
    padding: 4px 0;
    background-color: #fbfbf9;
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    &.show {
      @apply flex flex-col;
      z-index: 100;
      opacity: 1;
    }
  }
}
.gt-dropdown-hover {
  .gt-dropdown-items {
    z-index: 100 !important;
    opacity: 1 !important;
    @apply flex flex-col;
    &::before {
      content: '';
      display: block;
      background: transparent;
      width: 100%;
      height: 50px;
      position: absolute;
      left: 0px;
      top: -2.55rem;
      z-index: 1;
    }
  }
}
</style>
