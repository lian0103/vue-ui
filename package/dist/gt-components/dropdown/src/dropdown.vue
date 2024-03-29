<script>
import { h, ref, computed, watch, shallowRef } from "vue";
import { v4 as uuidv4 } from "uuid";
import GDropdownItem from "../../dropdownitem/src/dropdownitem.vue";
import GIcon from "../../icon";
import { useElementBounding } from "@vueuse/core";

const unitLength = 10;
const calcCharLength = (text) => {
  return text.replace(/[^\x00-\xff]/g, "aa").length;
};

export default {
  name: "GDropdown",
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
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    // console.log(props);
    const id = uuidv4();
    const spanContent = ref();
    const rootObj = {
      [id]: shallowRef(),
    };
    const isShow = ref(false);
    const isHover = ref(false);
    const hasSelect = ref(false);
    const valRef = props.formParentValue
      ? ref(props.formParentValue)
      : ref(props.modelValue);
    const errorMsg = computed(() => {
      return props.validResult[props.name]?.message;
    });

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
        ? "gt-dropdown gt-dropdown-hover"
        : "gt-dropdown";
    });

    const classShowComputed = computed(() => {
      // console.log('classShowComputed', classShowComputed.value);
      let hadOpend =
        classShowComputed.value && classShowComputed.value.includes("tp-aniIn");
      return props.clicked && isShow.value
        ? "gt-dropdown-items tp-aniIn"
        : hadOpend
        ? "gt-dropdown-items tp-aniOut"
        : "gt-dropdown-items";
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
          withGDropdown: true,
          parentValue: computed(() => valRef.value),
          handleChildClick: (val) => {
            handleIsShow();
            // handleIsShow("childClick");
            hasSelect.value = true;
            emit("update:modelValue", val);
            if (props.handleValChange) {
              props.handleValChange(val, props.name);
            }
            valRef.value = val;
          },
        });
      }) || [];
    const spanSlotList = computed(() => {
      return slots.default
        ? slots.default().filter((VNode) => {
            return true;
          })
        : null;
    });
    const spanUseSlot =
      spanSlotList.value !== null && spanSlotList.value.length > 0;
    const textClassComputed = computed(() => {
      let arr = [];
      if (props.icon) arr.push("span-text");
      if (hasSelect.value) arr.push("text-main");
      return arr;
    });

    const eventHandle = () => {
      isShow.value = false;
    };

    const popupStyle = ref({});

    watch(
      () => isShow.value,
      (val, oldVal) => {
        if (val && document.getElementsByTagName("html")[0]) {
          document
            .getElementsByTagName("html")[0]
            .addEventListener("click", eventHandle, false);
          // console.log('id', id);
          // console.log('rootTop.value', rootTop.value);
          if (rootObj[id]) {
            popupStyle.value = {
              top: spanContent.value.offsetHeight + 10 + "px",
              left: "0px",
              width: maxWidth.value + 48 + "px",
            };
          }
        } else {
          document
            .getElementsByTagName("html")[0]
            ?.removeEventListener("click", eventHandle);
        }
      }
    );

    return () =>
      h(
        "div",
        {
          ref: rootObj[id],
          class: classHoverComputed.value,
          onMouseenter: handleMouseenter,
          onMouseleave: handleLeave,
          // style: {
          //   width: spanUseSlot ? "auto" : curSelectWidth.value + 48 + "px",
          // },
          onClick: (e) => {
            e.stopPropagation();
            handleIsShow();
          },
        },
        [
          h(
            "span",
            {
              class: "gt-dropdown-span-content",
            },
            [
              h(
                "span",
                {
                  ref: (el) => {
                    spanContent.value = el;
                  },
                  class: spanUseSlot ? "" : "gt-dropdown-span",
                },
                spanUseSlot
                  ? spanSlotList.value
                  : [
                      // props.icon ? h(GIcons, { name: 'file',class:'pre-icon' }) : '',
                      h("span", { class: textClassComputed.value }, [
                        labelComputed.value,
                      ]),
                    ]
              ),
            ]
          ),
          h(
            "span",
            {
              class: "gt-dropdown-icon",
            },
            [h(GIcon, { name: "chevronDown" })]
          ),
          h(
            "div",
            {
              class: classShowComputed.value,
              onMouseleave: handleLeave,
              style: popupStyle.value,
            },
            childs
          ),
          errorMsg.value
            ? h("span", {
                class: "dropdown-error-msg",

                innerHTML: errorMsg.value,
              })
            : [],
        ]
      );
  },
};
</script>
