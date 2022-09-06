<script>
import { h, ref, computed, watch, shallowRef } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import GDropdownItem from './dropdownItem.vue';
import GIcon from '../../icon';
import { useElementBounding } from '@vueuse/core';

const unitLength = 10;
const calcCharLength = (text) => {
  return text.replace(/[^\x00-\xff]/g, 'aa').length;
};

export default {
  name: 'GDropdown',
  props: {
    name: { default: null },
    modelValue: {},
    formParentValue: { default: null },
    options: { type: Array },
    clicked: { type: Boolean, default: false },
    hover: { type: Boolean, default: false },
    icon: { type: Boolean, default: false },
    validResult: {
      default: {},
    },
    handleValChange: {
      type: Function,
    },
    handleRulesValid: {
      type: Function,
    },
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
    const valRef = props.formParentValue
      ? ref(props.formParentValue?.value)
      : ref(props.modelValue);
    const errorMsg = computed(() => {
      return props.validResult[props.name]?.message;
    });

    const {
      height: rootHeight,
      width: rootWidth,
      top: rootTop,
      bottom: rootBottom,
      right: rootRight,
      left: rootLeft,
      update: updateRoot,
    } = useElementBounding(rootObj[id]);

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
        props.options.findIndex((item) => item.value === valRef.value) != -1
        ? props.options.filter((item) => item.value === valRef.value)[0].label
        : valRef.value;
    });

    const maxWidth = ref(0);
    const curSelectWidth = ref(0);

    watch(
      () => valRef.value,
      (val) => {
        let target = props.options.find((item) => item.value == val);

        curSelectWidth.value =
          calcCharLength(target.label) * unitLength >= 235
            ? 235
            : calcCharLength(target.label) * unitLength;
      }
    );

    const childs =
      props.options?.map((item) => {
        let itemWidth = calcCharLength(item.label) * unitLength;
        if (itemWidth > maxWidth.value) {
          maxWidth.value = itemWidth >= 235 ? 235 : itemWidth;
        }
        if (valRef.value === item.value) {
          curSelectWidth.value = itemWidth >= 235 ? 235 : itemWidth;
        }

        return h(GDropdownItem, {
          option: item,
          label: item.label,
          value: item.value,
          icon: props.icon,
          parentValue: computed(() => valRef.value),
          handleChildClick: (val) => {
            handleIsShow('childClick');
            hasSelect.value = true;
            emit('update:modelValue', val);
            if (props.formParentValue && props.handleValChange) {
              props.handleValChange(val, props.name);
            }
            valRef.value = val;
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
            [h(GIcon, { name: 'chevronDown' })]
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
          errorMsg.value
            ? h('span', {
                class: 'dropdown-error-msg',
                innerHTML: errorMsg.value,
              })
            : [],
        ]
      );
  },
};
</script>
