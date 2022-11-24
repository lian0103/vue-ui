<script>
import { h, ref, computed, watch, shallowRef } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import GDropdownItem from '../../dropdownitem/src/dropdownitem.vue';
import GIcon from '../../icon';

export default {
    name: 'GDropdown',
    props: {
        name: { default: null },
        modelValue: {},
        formParentValue: { default: null },
        options: { type: Array },
        clicked: { type: Boolean, default: true },
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
        // console.log(slots.valueOf())
        const id = uuidv4();
        const rootObj = {
            [id]: shallowRef(),
        };
        const isShow = ref(false);
        const isHover = ref(false);
        const hasSelect = ref(false);
        const valRef = props.formParentValue ? ref(props.formParentValue) : ref(props.modelValue);
        const errorMsg = computed(() => {
            return props.validResult[props.name]?.message;
        });
        const slotOption = ref([]);

        const handleIsShow = () => {
            if (props.clicked) {
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
            return props.hover && isHover.value ? 'gt-dropdown gt-dropdown-hover' : 'gt-dropdown';
        });

        const classShowComputed = computed(() => {
            // console.log('classShowComputed', classShowComputed.value);
            let hadOpend = classShowComputed.value && classShowComputed.value.includes('tp-aniIn');
            return props.clicked && isShow.value
                ? 'gt-dropdown-items tp-aniIn'
                : hadOpend
                ? 'gt-dropdown-items tp-aniOut'
                : 'gt-dropdown-items';
        });

        const labelComputed = computed(() => {
            return props.options && props.options.findIndex((item) => item.value === valRef.value) != -1
                ? props.options.filter((item) => item.value === valRef.value)[0].label
                : slotOption.value.findIndex((item) => item.value === valRef.value) != -1
                ? slotOption.value.filter((item) => item.value === valRef.value)[0].label
                : valRef.value;
        });

        const genNodeTree = (item) => {
            if (item.type.name === 'GDropdownItem') {
                slotOption.value.push({
                    label: item.props.label,
                    value: item.props.value,
                });
            }

            return item.type.name === 'GDropdownItem'
                ? {
                      ...item,
                      props: {
                          ...item.props,
                          icon: props.icon,
                          parentValue: computed(() => valRef.value),
                          handleChildClick: (val) => {
                              hasSelect.value = true;
                              emit('update:modelValue', val);
                              if (props.handleValChange) {
                                  props.handleValChange(val, props.name);
                              }
                              valRef.value = val;
                          },
                      },
                  }
                : {
                      ...item,
                      children: Array.isArray(item.children)
                          ? item.children.map((cItem) => genNodeTree(cItem))
                          : item.children,
                  };
        };

        const childs = computed(() => {
            let childArr = props.options
                ? props.options?.map((item) => {
                      return h(GDropdownItem, {
                          option: item,
                          label: item.label,
                          value: item.value,
                          icon: props.icon,
                          parentValue: computed(() => valRef.value),
                          handleChildClick: (val) => {
                              hasSelect.value = true;
                              emit('update:modelValue', val);
                              if (props.handleValChange) {
                                  props.handleValChange(val, props.name);
                              }
                              valRef.value = val;
                          },
                      });
                  })
                : slots?.default()?.map((item) => genNodeTree(item)) || [];
            return childArr;
        });
        // console.log('childs',childs)

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
                    document.getElementsByTagName('html')[0].addEventListener('click', eventHandle, false);

                    if (rootObj[id]) {
                        popupStyle.value = {
                            position: 'absolute',
                            top: '45px',
                            left: '0px',
                        };
                    }
                } else {
                    document.getElementsByTagName('html')[0]?.removeEventListener('click', eventHandle);
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
                        [h('span', { class: textClassComputed.value }, [labelComputed.value])]
                    ),
                    h(
                        'span',
                        {
                            class: 'gt-dropdown-icon',
                        },
                        [h(GIcon, { name: 'down' })]
                    ),

                    h(
                        'div',
                        {
                            class: classShowComputed.value,
                            onMouseleave: handleLeave,
                            style: popupStyle.value,
                        },
                        childs.value
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
