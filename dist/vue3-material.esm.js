import { defineComponent, ref, onMounted, pushScopeId, popScopeId, openBlock, createBlock, createVNode, withScopeId, renderSlot, computed, toDisplayString, Fragment, renderList, resolveComponent, Teleport, createCommentVNode } from 'vue';

// vue
var script = defineComponent({
  props: {
    type: {
      type: String,
      default: 'button'
    },
    background: {
      type: String,
      default: '#3ca354'
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    elevation: {
      type: Number,
      default: 1
    },
    icon: {
      type: String,
      default: 'fal fa-coffee'
    },
    isSmall: {
      type: Boolean,
      default: false
    }
  },

  // eslint-disable-next-line
  setup(props) {
    // refs
    const btnRipple = ref(null); // methods

    const createRipple = event => {
      const button = event.currentTarget;

      if (button) {
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        const buttonElement = button.getBoundingClientRect();
        circle.style.left = `
                    ${event.clientX - buttonElement.left - radius}px
                `;
        circle.style.top = `
                    ${event.clientY - buttonElement.top - radius}px
                `;
        circle.classList.add('ripple');
        const ripple = button.getElementsByClassName('ripple')[0];

        if (ripple) {
          ripple.remove();
        }

        button.appendChild(circle);
      }
    }; // lifecycle hooks


    onMounted(() => {
      btnRipple.value?.style.setProperty('--background', props.background);
      const elevationShadowColor = props.elevation * 0.5;
      btnRipple.value?.style.setProperty('--elevation-shadow', `0 2px 4px rgba(0, 0, 0, ${elevationShadowColor})`);
      btnRipple.value?.style.setProperty('--color', props.color);
    });
    return {
      props,
      createRipple,
      btnRipple
    };
  }

});

const _withId = /*#__PURE__*/withScopeId("data-v-61b715d0");

pushScopeId("data-v-61b715d0");

const _hoisted_1 = /*#__PURE__*/createVNode("div", {
  class: "btn-overlay"
}, null, -1);

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("button", {
    class: ["btn-ripple", {
      small: _ctx.isSmall
    }],
    onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.createRipple && _ctx.createRipple(...args)),
    type: _ctx.type,
    ref: "btnRipple"
  }, [_hoisted_1, createVNode("i", {
    class: _ctx.props.icon
  }, null, 2)], 42, ["type"]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.btn-ripple[data-v-61b715d0] {\n    --size: 45px;\n    width: var(--size);\n    height: var(--size);\n    min-width: var(--size);\n    min-height: var(--size);\n    max-width: var(--size);\n    max-height: var(--size);\n    user-select: none;\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    transition: background 400ms;\n    color: var(--color);\n    background: var(--background);\n    font-size: 1.6rem;\n    outline: 0;\n    border: 0;\n    border-radius: calc(var(--size) / 2);\n    box-shadow: var(--elevation-shadow);\n    cursor: pointer;\n}\n.btn-ripple:hover .btn-overlay[data-v-61b715d0] {\n    background: rgba(255, 255, 255, 0.05);\n}\n.btn-ripple:focus .btn-overlay[data-v-61b715d0] {\n    background: rgba(255, 255, 255, 0.1);\n}\n.small[data-v-61b715d0] {\n    --size: 35px;\n    font-size: 1.4rem;\n}\n.btn-overlay[data-v-61b715d0] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0);\n    transition-duration: 0.1s;\n}\n";
styleInject(css_248z);

var css_248z$1 = "\nspan.ripple {\n    display: flex;\n    position: absolute;\n    border-radius: 50%;\n    transform: scale(0);\n    animation: ripple 600ms linear;\n    background: rgba(255, 255, 255, 0.7);\n    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.7);\n}\n@keyframes ripple {\nto {\n        transform: scale(4);\n        opacity: 0;\n}\n}\n";
styleInject(css_248z$1);

script.render = render;
script.__scopeId = "data-v-61b715d0";

// vue
var script$1 = defineComponent({
  setup() {
    return {};
  }

});

const _withId$1 = /*#__PURE__*/withScopeId("data-v-44424a77");

pushScopeId("data-v-44424a77");

const _hoisted_1$1 = {
  class: "app-bar"
};

popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$1, [renderSlot(_ctx.$slots, "default")]);
});

var css_248z$2 = "\n.app-bar[data-v-44424a77] {\n    display: flex;\n    background: #212121;\n    overflow: hidden;\n}\n";
styleInject(css_248z$2);

script$1.render = render$1;
script$1.__scopeId = "data-v-44424a77";

// vue
var script$2 = defineComponent({
  props: {
    type: {
      type: String,
      default: 'button'
    },
    background: {
      type: String,
      default: '#3ca354'
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    elevation: {
      type: Number,
      default: 1
    }
  },

  // eslint-disable-next-line
  setup(props) {
    // refs
    const btnRipple = ref(null); // lifecycle hooks

    onMounted(() => {
      btnRipple.value?.style.setProperty('--background', props.background);
      const elevationShadowColor = props.elevation * 0.5;
      btnRipple.value?.style.setProperty('--elevation-shadow', `0 2px 4px rgba(0, 0, 0, ${elevationShadowColor})`);
      btnRipple.value?.style.setProperty('--color', props.color);
    }); // methods

    const createRipple = event => {
      const button = event.currentTarget;

      if (button) {
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        const buttonElement = button.getBoundingClientRect();
        circle.style.left = `
                    ${event.clientX - buttonElement.left - radius}px
                `;
        circle.style.top = `
                    ${event.clientY - buttonElement.top - radius}px
                `;
        circle.classList.add('ripple');
        const ripple = button.getElementsByClassName('ripple')[0];

        if (ripple) {
          ripple.remove();
        }

        button.appendChild(circle);
      }
    };

    return {
      props,
      createRipple,
      btnRipple
    };
  }

});

const _withId$2 = /*#__PURE__*/withScopeId("data-v-c7724544");

pushScopeId("data-v-c7724544");

const _hoisted_1$2 = /*#__PURE__*/createVNode("div", {
  class: "btn-overlay"
}, null, -1);

popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("button", {
    class: "btn-ripple",
    onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.createRipple && _ctx.createRipple(...args)),
    type: _ctx.type,
    ref: "btnRipple"
  }, [_hoisted_1$2, renderSlot(_ctx.$slots, "default")], 40, ["type"]);
});

var css_248z$3 = "\n.btn-ripple[data-v-c7724544] {\n    user-select: none;\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    overflow: hidden;\n    transition: background 400ms;\n    color: var(--color);\n    background: var(--background);\n    padding: 10px 16px;\n    font-size: 0.88rem;\n    outline: 0;\n    border: 0;\n    border-radius: 4px;\n    box-shadow: var(--elevation-shadow);\n    cursor: pointer;\n    white-space: nowrap;\n}\n.btn-ripple:hover .btn-overlay[data-v-c7724544] {\n    background: rgba(255, 255, 255, 0.05);\n}\n.btn-ripple:focus .btn-overlay[data-v-c7724544] {\n    background: rgba(255, 255, 255, 0.1);\n}\n.btn-overlay[data-v-c7724544] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0);\n    transition-duration: 0.1s;\n}\n";
styleInject(css_248z$3);

var css_248z$4 = "\nspan.ripple {\n    display: flex;\n    position: absolute;\n    border-radius: 50%;\n    transform: scale(0);\n    animation: ripple 600ms linear;\n    background: rgba(255, 255, 255, 0.7);\n    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.7);\n}\n@keyframes ripple {\nto {\n        transform: scale(4);\n        opacity: 0;\n}\n}\n";
styleInject(css_248z$4);

script$2.render = render$2;
script$2.__scopeId = "data-v-c7724544";

// vue
var script$3 = defineComponent({
  setup() {
    return {};
  }

});

const _withId$3 = /*#__PURE__*/withScopeId("data-v-433f7fc0");

pushScopeId("data-v-433f7fc0");

const _hoisted_1$3 = {
  class: "container"
};
const _hoisted_2 = {
  class: "content"
};

popScopeId();

const render$3 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$3, [createVNode("div", _hoisted_2, [renderSlot(_ctx.$slots, "default")])]);
});

var css_248z$5 = "\n.container[data-v-433f7fc0] {\n    display: flex;\n    justify-content: center;\n    padding: 0 calc(var(--default-margin) * 2);\n}\n.content[data-v-433f7fc0] {\n    flex: 1;\n    max-width: 1200px;\n    width: 100%;\n}\n";
styleInject(css_248z$5);

script$3.render = render$3;
script$3.__scopeId = "data-v-433f7fc0";

// vue
var script$4 = defineComponent({
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: 'Default'
    },
    placeholder: {
      type: String,
      default: 'Select an option'
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    value: {
      type: String,
      default: 'id'
    },
    title: {
      type: String,
      default: 'title'
    },
    sort: {
      type: Function,
      default: () => {
        return true;
      }
    }
  },

  // eslint-disable-next-line
  setup(props, context) {
    // refs
    const dropdownField = ref(null); // computed

    const isInputFilled = computed(() => {
      return props.modelValue > 0;
    });
    const sortedOptions = computed(() => {
      const tmpArray = [...props.options];
      return tmpArray.sort(props.sort);
    }); // methods

    const updateValue = e => {
      const val = parseInt(e.target.value);
      context.emit('update:modelValue', val);
    };

    return {
      props,
      sortedOptions,
      isInputFilled,
      dropdownField,
      updateValue
    };
  }

});

const _withId$4 = /*#__PURE__*/withScopeId("data-v-15f27a7b");

pushScopeId("data-v-15f27a7b");

const _hoisted_1$4 = {
  class: "dropdown"
};
const _hoisted_2$1 = {
  class: "default-option-text",
  value: 0
};

const _hoisted_3 = /*#__PURE__*/createVNode("div", {
  class: "dropdown-left"
}, null, -1);

const _hoisted_4 = {
  class: "dropdown-notch"
};
const _hoisted_5 = {
  class: "dropdown-label"
};

const _hoisted_6 = /*#__PURE__*/createVNode("div", {
  class: "dropdown-right"
}, null, -1);

popScopeId();

const render$4 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$4, [createVNode("select", {
    class: ["dropdown-field", {
      'default-option': !_ctx.isInputFilled
    }],
    ref: "dropdownField",
    value: _ctx.modelValue,
    onInput: _cache[1] || (_cache[1] = (...args) => _ctx.updateValue && _ctx.updateValue(...args))
  }, [createVNode("option", _hoisted_2$1, toDisplayString(_ctx.props.placeholder), 1), (openBlock(true), createBlock(Fragment, null, renderList(_ctx.sortedOptions, (option, i) => {
    return openBlock(), createBlock("option", {
      key: i,
      value: option[_ctx.props.value]
    }, toDisplayString(option[_ctx.props.title]), 9, ["value"]);
  }), 128))], 42, ["value"]), _hoisted_3, createVNode("div", _hoisted_4, [createVNode("div", _hoisted_5, toDisplayString(_ctx.props.label), 1)]), _hoisted_6]);
});

var css_248z$6 = "\n.dropdown[data-v-15f27a7b] {\n    --font-size: 1.1rem;\n    --label-padding: 6px;\n    --horizontal-padding: 16px;\n    --vertical-padding: 16px;\n    --border: 1px solid rgba(255, 255, 255, 0.3);\n    --height: calc(var(--font-size) + (var(--vertical-padding) * 2) + 2px);\n    display: flex;\n    width: 100%;\n    font-size: 1.1rem;\n    border-radius: 4px;\n    background: rgba(255, 255, 255, 0);\n    position: relative;\n    color: #fff;\n}\n.dropdown-left[data-v-15f27a7b],\n.dropdown-notch[data-v-15f27a7b],\n.dropdown-right[data-v-15f27a7b] {\n    min-height: var(--height);\n    max-height: var(--height);\n    padding: var(--vertical-padding) 0;\n}\n.dropdown-left[data-v-15f27a7b] {\n    padding-left: calc(var(--horizontal-padding) - var(--label-padding));\n    border: var(--border);\n    border-right: none;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n.dropdown-notch[data-v-15f27a7b] {\n    display: flex;\n    align-items: center;\n    padding: var(--vertical-padding) 0;\n    border-bottom: var(--border);\n}\n.dropdown-right[data-v-15f27a7b] {\n    width: 100%;\n    border: var(--border);\n    border-left: none;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n.dropdown-field[data-v-15f27a7b] {\n    flex: 1;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    font-size: 1.1rem;\n    border: none;\n    padding: 0 calc(var(--horizontal-padding) - 4px);\n    background: rgba(255, 255, 255, 0);\n    color: #fff;\n    margin-right: var(--horizontal-padding);\n}\n.dropdown-label[data-v-15f27a7b] {\n    flex: 1;\n    padding: 0 6px;\n    color: #aaa;\n    transition-duration: 0.2s;\n    transform: translateY(calc((-1 / 2) * var(--height)));\n    font-size: 0.8rem;\n    white-space: nowrap;\n}\n.dropdown-field option[data-v-15f27a7b] {\n    color: #000;\n}\n.default-option[data-v-15f27a7b] {\n    color: #aaa;\n}\n.dropdown-field option.default-option-text[data-v-15f27a7b] {\n    color: #777;\n}\n.dropdown-field:focus ~ .dropdown-left[data-v-15f27a7b],\n.dropdown-field:focus ~ .dropdown-notch[data-v-15f27a7b],\n.dropdown-field:focus ~ .dropdown-right[data-v-15f27a7b] {\n    border-color: #2c60d1;\n}\n.dropdown-field:focus ~ .dropdown-notch .dropdown-label[data-v-15f27a7b] {\n    color: #82a4ed;\n}\n";
styleInject(css_248z$6);

script$4.render = render$4;
script$4.__scopeId = "data-v-15f27a7b";

// vue
var script$5 = defineComponent({
  props: {
    scale: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: 'rgb(145 201 82)'
    },
    ringWidth: {
      type: Number,
      default: 6
    },
    width: {
      type: Number,
      default: 80
    },
    height: {
      type: Number,
      default: 80
    }
  },

  // eslint-disable-next-line
  setup(props) {
    // refs
    const loadingSpinner = ref(null); // lifecycle hooks

    onMounted(() => {
      loadingSpinner.value?.style.setProperty('--spinner-scale', props.scale + '');
      loadingSpinner.value?.style.setProperty('--spinner-color', props.color);
      loadingSpinner.value?.style.setProperty('--ring-width', props.ringWidth * props.scale + 'px');
      loadingSpinner.value?.style.setProperty('--width', props.width * props.scale + 'px');
      loadingSpinner.value?.style.setProperty('--height', props.height * props.scale + 'px');
    });
    return {
      loadingSpinner
    };
  }

});

const _withId$5 = /*#__PURE__*/withScopeId("data-v-f4043936");

pushScopeId("data-v-f4043936");

const _hoisted_1$5 = {
  class: "loading-spinner-container"
};

const _hoisted_2$2 = /*#__PURE__*/createVNode("span", {
  class: "hidden-dash"
}, "-", -1);

const _hoisted_3$1 = {
  class: "loading-spinner",
  ref: "loadingSpinner"
};

const _hoisted_4$1 = /*#__PURE__*/createVNode("div", {
  class: "lds-dual-ring"
}, null, -1);

const _hoisted_5$1 = /*#__PURE__*/createVNode("span", {
  class: "hidden-dash"
}, "-", -1);

popScopeId();

const render$5 = /*#__PURE__*/_withId$5((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$5, [_hoisted_2$2, createVNode("div", _hoisted_3$1, [_hoisted_4$1], 512), _hoisted_5$1]);
});

var css_248z$7 = "\n.loading-spinner-container[data-v-f4043936] {\n    display: flex;\n    align-items: center;\n}\n.loading-spinner[data-v-f4043936] {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    width: var(--width);\n    height: var(--height);\n    min-width: var(--width);\n    min-height: var(--height);\n    overflow: hidden;\n}\n.lds-dual-ring[data-v-f4043936] {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    width: var(--width);\n    height: var(--height);\n    min-width: var(--width);\n    min-height: var(--height);\n}\n.lds-dual-ring[data-v-f4043936]:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    border: var(--ring-width) solid rgba(255, 255, 255, 0.05);\n    box-sizing: border-box;\n}\n.lds-dual-ring[data-v-f4043936]:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    border: var(--ring-width) solid var(--spinner-color);\n    border-color: var(--spinner-color) transparent transparent transparent;\n    animation: lds-dual-ring-f4043936 1.2s linear infinite;\n    box-sizing: border-box;\n}\n@keyframes lds-dual-ring-f4043936 {\n0% {\n        transform: rotate(0deg);\n}\n100% {\n        transform: rotate(360deg);\n}\n}\n.hidden-dash[data-v-f4043936] {\n    user-select: none;\n    color: rgba(0, 0, 0, 0);\n}\n";
styleInject(css_248z$7);

script$5.render = render$5;
script$5.__scopeId = "data-v-f4043936";

// vue
var script$6 = defineComponent({
  components: {
    VmActionButton: script
  },
  props: ['title', 'isPreventClose'],

  // eslint-disable-next-line
  setup(props) {
    // properties
    const isVisible = ref(false); // methods

    const show = () => {
      isVisible.value = true;
    };

    const hide = () => {
      if (!props.isPreventClose) {
        isVisible.value = false;
      }
    };

    return {
      props,
      isVisible,
      show,
      hide
    };
  }

});

const _withId$6 = /*#__PURE__*/withScopeId("data-v-2aad9313");

pushScopeId("data-v-2aad9313");

const _hoisted_1$6 = {
  class: "modal"
};
const _hoisted_2$3 = {
  class: "modal-header"
};
const _hoisted_3$2 = {
  class: "modal-title"
};
const _hoisted_4$2 = {
  class: "modal-content"
};

popScopeId();

const render$6 = /*#__PURE__*/_withId$6((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_vm_action_button = resolveComponent("vm-action-button");

  return openBlock(), createBlock(Teleport, {
    to: "body"
  }, [createVNode("div", _hoisted_1$6, [createVNode("div", {
    class: ["modal-pane", {
      'modal-visible': _ctx.isVisible
    }]
  }, [createVNode("div", _hoisted_2$3, [createVNode("div", _hoisted_3$2, toDisplayString(_ctx.props.title), 1), createVNode(_component_vm_action_button, {
    class: "exit",
    background: "rgba(0,0,0,0)",
    elevation: 0,
    icon: "fal fa-times",
    isSmall: true,
    onClick: _ctx.hide
  }, null, 8, ["onClick"])]), createVNode("div", _hoisted_4$2, [renderSlot(_ctx.$slots, "default")])], 2), createVNode("div", {
    class: ["modal-background", {
      'modal-background-visible': _ctx.isVisible
    }],
    onClick: _cache[1] || (_cache[1] = $event => _ctx.hide())
  }, null, 2)])]);
});

var css_248z$8 = "\n.modal[data-v-2aad9313] {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 999;\n    pointer-events: none;\n}\n.modal-header[data-v-2aad9313] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 45px;\n    background: rgba(255, 255, 255, 0.08);\n    font-size: 1.1rem;\n    color: #fff;\n}\n.modal-header .modal-title[data-v-2aad9313] {\n    margin-left: 15px;\n}\n.modal-header .exit[data-v-2aad9313] {\n    margin-right: 5px;\n}\n.modal-content[data-v-2aad9313] {\n    padding: 15px 20px;\n    height: 100%;\n    overflow-y: auto;\n}\n.modal-pane[data-v-2aad9313] {\n    position: relative;\n    z-index: 1000;\n    overflow: hidden;\n    border-radius: 3px;\n    min-width: 400px;\n    width: 600px;\n    max-width: 600px;\n    margin: 30px;\n    display: flex;\n    flex-direction: column;\n    max-height: 90%;\n    background: #333;\n    opacity: 0;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n    pointer-events: none;\n    z-index: 2;\n    transform: scale(0.8);\n    transition-duration: 0.2s;\n}\n.modal-background[data-v-2aad9313] {\n    opacity: 0;\n    pointer-events: none;\n    position: fixed;\n    background: rgba(0, 0, 0, 0.5);\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    transition-duration: 0.2s;\n}\n.modal-visible[data-v-2aad9313] {\n    transform: scale(1);\n}\n.modal-background-visible[data-v-2aad9313],\n.modal-visible[data-v-2aad9313] {\n    opacity: 1;\n    pointer-events: all;\n    transition-duration: 0.2s;\n}\n";
styleInject(css_248z$8);

script$6.render = render$6;
script$6.__scopeId = "data-v-2aad9313";

// vue
var script$7 = defineComponent({
  setup() {
    return {};
  }

});

const _withId$7 = /*#__PURE__*/withScopeId("data-v-f9d03df4");

pushScopeId("data-v-f9d03df4");

const _hoisted_1$7 = {
  class: "navigation-drawer"
};

popScopeId();

const render$7 = /*#__PURE__*/_withId$7((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$7, [renderSlot(_ctx.$slots, "default")]);
});

var css_248z$9 = "\n.navigation-drawer[data-v-f9d03df4] {\n    background: #212121;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\n";
styleInject(css_248z$9);

script$7.render = render$7;
script$7.__scopeId = "data-v-f9d03df4";

// vue
var script$8 = defineComponent({
  props: {
    modelValue: {
      type: Number,
      default: 0,
      required: true
    },
    label: {
      type: String,
      default: 'Default'
    }
  },

  // eslint-disable-next-line
  setup(props, context) {
    // refs
    const textField = ref(null); // computed

    const isInputFilled = computed(() => {
      return (props.modelValue + '').length > 0;
    }); // methods

    const updateValue = e => {
      const val = e.target.value;

      try {
        parseInt(val);
        context.emit('update:modelValue', val);
      } catch (e) {
        window.console.log(e);
      }
    };

    return {
      props,
      isInputFilled,
      textField,
      updateValue
    };
  }

});

const _withId$8 = /*#__PURE__*/withScopeId("data-v-38e24d5a");

pushScopeId("data-v-38e24d5a");

const _hoisted_1$8 = {
  class: "text-field"
};

const _hoisted_2$4 = /*#__PURE__*/createVNode("div", {
  class: "text-field-left"
}, null, -1);

const _hoisted_3$3 = /*#__PURE__*/createVNode("div", {
  class: "text-field-right"
}, null, -1);

popScopeId();

const render$8 = /*#__PURE__*/_withId$8((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$8, [createVNode("input", {
    class: "text-field-input",
    type: "text",
    ref: "textField",
    value: _ctx.modelValue,
    onInput: _cache[1] || (_cache[1] = (...args) => _ctx.updateValue && _ctx.updateValue(...args))
  }, null, 40, ["value"]), _hoisted_2$4, createVNode("div", {
    class: ["text-field-notch", {
      'text-field-notch-filled': _ctx.isInputFilled
    }]
  }, [createVNode("div", {
    class: ["text-field-label", {
      'text-field-label-filled': _ctx.isInputFilled
    }]
  }, toDisplayString(_ctx.props.label), 3)], 2), _hoisted_3$3]);
});

var css_248z$a = "\n.text-field[data-v-38e24d5a] {\n    --font-size: 1.1rem;\n    --label-padding: 6px;\n    --horizontal-padding: 16px;\n    --vertical-padding: 16px;\n    --border: 1px solid rgba(255, 255, 255, 0.3);\n    --height: calc(var(--font-size) + (var(--vertical-padding) * 2) + 2px);\n    display: flex;\n    align-items: center;\n    width: 100%;\n    position: relative;\n}\n.text-field-left[data-v-38e24d5a],\n.text-field-notch[data-v-38e24d5a],\n.text-field-right[data-v-38e24d5a] {\n    min-height: var(--height);\n    max-height: var(--height);\n    padding: var(--vertical-padding) 0;\n}\n.text-field-left[data-v-38e24d5a] {\n    padding-left: calc(var(--horizontal-padding) - var(--label-padding));\n    border: var(--border);\n    border-right: none;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n.text-field-notch[data-v-38e24d5a] {\n    display: flex;\n    align-items: center;\n    padding: var(--vertical-padding) 0;\n    border-top: var(--border);\n    border-bottom: var(--border);\n}\n.text-field-right[data-v-38e24d5a] {\n    width: 100%;\n    border: var(--border);\n    border-left: none;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n.text-field input[data-v-38e24d5a] {\n    flex: 1;\n    position: absolute;\n    padding: var(--vertical-padding) var(--horizontal-padding);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0);\n    color: #fff;\n    font-size: var(--font-size);\n    width: 100%;\n}\n.text-field-label[data-v-38e24d5a] {\n    flex: 1;\n    padding: 0 6px;\n    color: #aaa;\n    transition-duration: 0.2s;\n    white-space: nowrap;\n    font-size: var(--font-size);\n}\ninput:focus ~ .text-field-notch[data-v-38e24d5a],\n.text-field-notch-filled[data-v-38e24d5a] {\n    border-top: none;\n}\ninput:focus ~ .text-field-notch .text-field-label[data-v-38e24d5a],\n.text-field-label-filled[data-v-38e24d5a] {\n    transform: translateY(calc((-1 / 2) * var(--height)));\n    font-size: 0.8rem;\n}\ninput:focus ~ .text-field-left[data-v-38e24d5a],\ninput:focus ~ .text-field-notch[data-v-38e24d5a],\ninput:focus ~ .text-field-right[data-v-38e24d5a] {\n    border-color: #2c60d1;\n}\ninput:focus ~ .text-field-notch .text-field-label[data-v-38e24d5a] {\n    color: #82a4ed;\n}\n";
styleInject(css_248z$a);

script$8.render = render$8;
script$8.__scopeId = "data-v-38e24d5a";

// vue
var script$9 = defineComponent({
  setup() {
    return {};
  }

});

const _withId$9 = /*#__PURE__*/withScopeId("data-v-73f6e4d3");

pushScopeId("data-v-73f6e4d3");

const _hoisted_1$9 = {
  class: "page-header"
};

popScopeId();

const render$9 = /*#__PURE__*/_withId$9((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$9, [renderSlot(_ctx.$slots, "default")]);
});

var css_248z$b = "\n.page-header[data-v-73f6e4d3] {\n    font-size: 1.8rem;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    margin-top: calc(var(--default-margin) * 4);\n    margin-bottom: calc(var(--default-margin) * 4);\n    padding-bottom: calc(var(--default-margin) * 1);\n}\n";
styleInject(css_248z$b);

script$9.render = render$9;
script$9.__scopeId = "data-v-73f6e4d3";

// vue
var script$a = defineComponent({
  setup() {
    return {};
  }

});

const _withId$a = /*#__PURE__*/withScopeId("data-v-9cdbfa10");

pushScopeId("data-v-9cdbfa10");

const _hoisted_1$a = {
  class: "paper-content"
};

popScopeId();

const render$a = /*#__PURE__*/_withId$a((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$a, [renderSlot(_ctx.$slots, "default")]);
});

var css_248z$c = "\n.paper-content[data-v-9cdbfa10] {\n    padding: 12px 16px;\n}\n";
styleInject(css_248z$c);

script$a.render = render$a;
script$a.__scopeId = "data-v-9cdbfa10";

// vue
var script$b = defineComponent({
  setup() {
    return {};
  }

});

const _withId$b = /*#__PURE__*/withScopeId("data-v-17f96ef8");

pushScopeId("data-v-17f96ef8");

const _hoisted_1$b = {
  class: "paper-header"
};

popScopeId();

const render$b = /*#__PURE__*/_withId$b((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$b, [renderSlot(_ctx.$slots, "default")]);
});

var css_248z$d = "\n.paper-header[data-v-17f96ef8] {\n    padding: 12px 16px;\n    background: rgba(255, 255, 255, 0.04);\n}\n";
styleInject(css_248z$d);

script$b.render = render$b;
script$b.__scopeId = "data-v-17f96ef8";

// vue
var script$c = defineComponent({
  props: {
    elevation: {
      type: Number,
      default: 1
    }
  },

  // eslint-disable-next-line
  setup(props) {
    // refs
    const paper = ref(null); // lifecycle hooks

    onMounted(() => {
      let color = 25 + props.elevation * 10;

      if (color < 0 || color > 255) {
        color = 255;
      }

      paper.value?.style.setProperty('--elevation', `rgb(${color}, ${color}, ${color})`);
    });
    return {
      paper
    };
  }

});

const _withId$c = /*#__PURE__*/withScopeId("data-v-31b1c1e2");

pushScopeId("data-v-31b1c1e2");

const _hoisted_1$c = {
  class: "paper",
  ref: "paper"
};

popScopeId();

const render$c = /*#__PURE__*/_withId$c((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$c, [renderSlot(_ctx.$slots, "default")], 512);
});

var css_248z$e = "\n.paper[data-v-31b1c1e2] {\n    display: flex;\n    flex-direction: column;\n    background: var(--elevation);\n    border-radius: 5px;\n    overflow: hidden;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\n";
styleInject(css_248z$e);

script$c.render = render$c;
script$c.__scopeId = "data-v-31b1c1e2";

var script$d = {
  props: {
    id: {
      type: Number
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    }
  },

  // eslint-disable-next-line
  setup(props, context) {
    // methods
    // eslint-disable-next-line
    const updateValue = e => {
      context.emit('update:modelValue', e.target.checked);
    };

    return {
      props,
      updateValue
    };
  }

};

const _withId$d = /*#__PURE__*/withScopeId("data-v-4dcd525d");

pushScopeId("data-v-4dcd525d");

const _hoisted_1$d = {
  class: "switch-container"
};
const _hoisted_2$5 = {
  class: "switch"
};

const _hoisted_3$4 = /*#__PURE__*/createVNode("span", {
  class: "slider"
}, null, -1);

const _hoisted_4$3 = {
  key: 0,
  class: "ml-1"
};

popScopeId();

const render$d = /*#__PURE__*/_withId$d((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$d, [createVNode("label", _hoisted_2$5, [createVNode("input", {
    id: $props.id,
    type: "checkbox",
    checked: $props.modelValue,
    onInput: _cache[1] || (_cache[1] = (...args) => $setup.updateValue && $setup.updateValue(...args))
  }, null, 40, ["id", "checked"]), _hoisted_3$4]), $setup.props.label ? (openBlock(), createBlock("label", _hoisted_4$3, toDisplayString($setup.props.label), 1)) : createCommentVNode("", true)]);
});

var css_248z$f = "\n.switch-container[data-v-4dcd525d] {\n    display: flex;\n    align-items: center;\n}\n.switch[data-v-4dcd525d] {\n    --width: 45px;\n    --switch-width: 18px;\n    --height: 24px;\n    --border-radius: 100px;\n    --switch-border-radius: 50%;\n    --inner-padding: 3px;\n\n    width: var(--width);\n    min-width: var(--width);\n    height: var(--height);\n    cursor: pointer;\n    background-color: #999;\n    border-radius: var(--border-radius);\n    position: relative;\n    display: inline-block;\n}\n.switch input[data-v-4dcd525d] {\n    display: none;\n}\n.slider[data-v-4dcd525d] {\n    position: absolute;\n    border-radius: inherit;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: 0.4s;\n}\n.slider[data-v-4dcd525d]:before {\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    border-radius: var(--switch-border-radius);\n    content: '';\n    height: calc(var(--height) - (2 * var(--inner-padding)));\n    width: var(--switch-width);\n    left: var(--inner-padding);\n    bottom: var(--inner-padding);\n    background-color: #555;\n    transition: 0.3s;\n}\ninput:checked + .slider[data-v-4dcd525d] {\n    background: #5a5;\n    border-radius: inherit;\n}\ninput:focus + .slider[data-v-4dcd525d] {\n    box-shadow: 0 0 1px #2196f3;\n}\ninput:checked + .slider[data-v-4dcd525d]:before {\n    transform: translateX(\n        calc(var(--width) - var(--switch-width) - (2 * var(--inner-padding)))\n    );\n}\n";
styleInject(css_248z$f);

script$d.render = render$d;
script$d.__scopeId = "data-v-4dcd525d";

// vue
var script$e = defineComponent({
  props: {
    modelValue: {
      type: String,
      default: '',
      required: true
    },
    label: {
      type: String,
      default: 'Default'
    },
    isPassword: {
      type: Boolean,
      default: false
    }
  },

  // eslint-disable-next-line
  setup(props, context) {
    // refs
    const textField = ref(null); // computed

    const isInputFilled = computed(() => {
      return props.modelValue.length > 0;
    }); // methods

    const updateValue = e => {
      const val = e.target.value;
      context.emit('update:modelValue', val);
    };

    return {
      props,
      isInputFilled,
      textField,
      updateValue
    };
  }

});

const _withId$e = /*#__PURE__*/withScopeId("data-v-04c47985");

pushScopeId("data-v-04c47985");

const _hoisted_1$e = {
  class: "text-field"
};

const _hoisted_2$6 = /*#__PURE__*/createVNode("div", {
  class: "text-field-left"
}, null, -1);

const _hoisted_3$5 = /*#__PURE__*/createVNode("div", {
  class: "text-field-right"
}, null, -1);

popScopeId();

const render$e = /*#__PURE__*/_withId$e((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$e, [createVNode("input", {
    class: "text-field-input",
    type: _ctx.isPassword ? 'password' : 'text',
    ref: "textField",
    value: _ctx.modelValue,
    onInput: _cache[1] || (_cache[1] = (...args) => _ctx.updateValue && _ctx.updateValue(...args))
  }, null, 40, ["type", "value"]), _hoisted_2$6, createVNode("div", {
    class: ["text-field-notch", {
      'text-field-notch-filled': _ctx.isInputFilled
    }]
  }, [createVNode("div", {
    class: ["text-field-label", {
      'text-field-label-filled': _ctx.isInputFilled
    }]
  }, toDisplayString(_ctx.props.label), 3)], 2), _hoisted_3$5]);
});

var css_248z$g = "\n.text-field[data-v-04c47985] {\n    --font-size: 1.1rem;\n    --label-padding: 6px;\n    --horizontal-padding: 16px;\n    --vertical-padding: 16px;\n    --border: 1px solid rgba(255, 255, 255, 0.3);\n    --height: calc(var(--font-size) + (var(--vertical-padding) * 2) + 2px);\n    display: flex;\n    align-items: center;\n    width: 100%;\n    position: relative;\n}\n.text-field-left[data-v-04c47985],\n.text-field-notch[data-v-04c47985],\n.text-field-right[data-v-04c47985] {\n    min-height: var(--height);\n    max-height: var(--height);\n    padding: var(--vertical-padding) 0;\n}\n.text-field-left[data-v-04c47985] {\n    padding-left: calc(var(--horizontal-padding) - var(--label-padding));\n    border: var(--border);\n    border-right: none;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n.text-field-notch[data-v-04c47985] {\n    display: flex;\n    align-items: center;\n    padding: var(--vertical-padding) 0;\n    border-top: var(--border);\n    border-bottom: var(--border);\n}\n.text-field-right[data-v-04c47985] {\n    width: 100%;\n    border: var(--border);\n    border-left: none;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n.text-field input[data-v-04c47985] {\n    flex: 1;\n    position: absolute;\n    padding: var(--vertical-padding) var(--horizontal-padding);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0);\n    color: #fff;\n    font-size: var(--font-size);\n    width: 100%;\n}\n.text-field-label[data-v-04c47985] {\n    flex: 1;\n    padding: 0 6px;\n    color: #aaa;\n    transition-duration: 0.2s;\n    white-space: nowrap;\n    font-size: var(--font-size);\n}\ninput:focus ~ .text-field-notch[data-v-04c47985],\n.text-field-notch-filled[data-v-04c47985] {\n    border-top: none;\n}\ninput:focus ~ .text-field-notch .text-field-label[data-v-04c47985],\n.text-field-label-filled[data-v-04c47985] {\n    transform: translateY(calc((-1 / 2) * var(--height)));\n    font-size: 0.8rem;\n}\ninput:focus ~ .text-field-left[data-v-04c47985],\ninput:focus ~ .text-field-notch[data-v-04c47985],\ninput:focus ~ .text-field-right[data-v-04c47985] {\n    border-color: #2c60d1;\n}\ninput:focus ~ .text-field-notch .text-field-label[data-v-04c47985] {\n    color: #82a4ed;\n}\n";
styleInject(css_248z$g);

script$e.render = render$e;
script$e.__scopeId = "data-v-04c47985";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    VmActionButton: script,
    VmAppBar: script$1,
    VmButton: script$2,
    VmContainer: script$3,
    VmDropdown: script$4,
    VmLoadingSpinner: script$5,
    VmModal: script$6,
    VmNavigationDrawer: script$7,
    VmNumberField: script$8,
    VmPageHeader: script$9,
    VmPaperContent: script$a,
    VmPaperHeader: script$b,
    VmPaper: script$c,
    VmSwitch: script$d,
    VmTextField: script$e
});

// Import vue components

const install = function installVue3Material(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script as VmActionButton, script$1 as VmAppBar, script$2 as VmButton, script$3 as VmContainer, script$4 as VmDropdown, script$5 as VmLoadingSpinner, script$6 as VmModal, script$7 as VmNavigationDrawer, script$8 as VmNumberField, script$9 as VmPageHeader, script$c as VmPaper, script$a as VmPaperContent, script$b as VmPaperHeader, script$d as VmSwitch, script$e as VmTextField };
