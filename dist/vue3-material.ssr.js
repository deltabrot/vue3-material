'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}// vue
var script = vue.defineComponent({
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
  setup: function setup(props) {
    // refs
    var btnRipple = vue.ref(null); // methods

    var createRipple = function createRipple(event) {
      var button = event.currentTarget;

      if (button) {
        var circle = document.createElement('span');
        var diameter = Math.max(button.clientWidth, button.clientHeight);
        var radius = diameter / 2;
        circle.style.width = circle.style.height = "".concat(diameter, "px");
        var buttonElement = button.getBoundingClientRect();
        circle.style.left = "\n                    ".concat(event.clientX - buttonElement.left - radius, "px\n                ");
        circle.style.top = "\n                    ".concat(event.clientY - buttonElement.top - radius, "px\n                ");
        circle.classList.add('ripple');
        var ripple = button.getElementsByClassName('ripple')[0];

        if (ripple) {
          ripple.remove();
        }

        button.appendChild(circle);
      }
    }; // lifecycle hooks


    vue.onMounted(function () {
      var _btnRipple$value, _btnRipple$value2, _btnRipple$value3;

      (_btnRipple$value = btnRipple.value) === null || _btnRipple$value === void 0 ? void 0 : _btnRipple$value.style.setProperty('--background', props.background);
      var elevationShadowColor = props.elevation * 0.5;
      (_btnRipple$value2 = btnRipple.value) === null || _btnRipple$value2 === void 0 ? void 0 : _btnRipple$value2.style.setProperty('--elevation-shadow', "0 2px 4px rgba(0, 0, 0, ".concat(elevationShadowColor, ")"));
      (_btnRipple$value3 = btnRipple.value) === null || _btnRipple$value3 === void 0 ? void 0 : _btnRipple$value3.style.setProperty('--color', props.color);
    });
    return {
      props: props,
      createRipple: createRipple,
      btnRipple: btnRipple
    };
  }
});var _withId = /*#__PURE__*/vue.withScopeId("data-v-61b715d0");

vue.pushScopeId("data-v-61b715d0");

var _hoisted_1 = /*#__PURE__*/vue.createVNode("div", {
  class: "btn-overlay"
}, null, -1);

vue.popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("button", {
    class: ["btn-ripple", {
      small: _ctx.isSmall
    }],
    onMousedown: _cache[1] || (_cache[1] = function () {
      return _ctx.createRipple && _ctx.createRipple.apply(_ctx, arguments);
    }),
    type: _ctx.type,
    ref: "btnRipple"
  }, [_hoisted_1, vue.createVNode("i", {
    class: _ctx.props.icon
  }, null, 2)], 42, ["type"]);
});function styleInject(css, ref) {
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
}var css_248z = "\n.btn-ripple[data-v-61b715d0] {\n    --size: 45px;\n    width: var(--size);\n    height: var(--size);\n    min-width: var(--size);\n    min-height: var(--size);\n    max-width: var(--size);\n    max-height: var(--size);\n    user-select: none;\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    transition: background 400ms;\n    color: var(--color);\n    background: var(--background);\n    font-size: 1.6rem;\n    outline: 0;\n    border: 0;\n    border-radius: calc(var(--size) / 2);\n    box-shadow: var(--elevation-shadow);\n    cursor: pointer;\n}\n.btn-ripple:hover .btn-overlay[data-v-61b715d0] {\n    background: rgba(255, 255, 255, 0.05);\n}\n.btn-ripple:focus .btn-overlay[data-v-61b715d0] {\n    background: rgba(255, 255, 255, 0.1);\n}\n.small[data-v-61b715d0] {\n    --size: 35px;\n    font-size: 1.4rem;\n}\n.btn-overlay[data-v-61b715d0] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0);\n    transition-duration: 0.1s;\n}\n";
styleInject(css_248z);var css_248z$1 = "\nspan.ripple {\n    display: flex;\n    position: absolute;\n    border-radius: 50%;\n    transform: scale(0);\n    animation: ripple 600ms linear;\n    background: rgba(255, 255, 255, 0.7);\n    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.7);\n}\n@keyframes ripple {\nto {\n        transform: scale(4);\n        opacity: 0;\n}\n}\n";
styleInject(css_248z$1);script.render = render;
script.__scopeId = "data-v-61b715d0";// vue
var script$1 = vue.defineComponent({
  setup: function setup() {
    return {};
  }
});var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-44424a77");

vue.pushScopeId("data-v-44424a77");

var _hoisted_1$1 = {
  class: "app-bar"
};

vue.popScopeId();

var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [vue.renderSlot(_ctx.$slots, "default")]);
});var css_248z$2 = "\n.app-bar[data-v-44424a77] {\n    display: flex;\n    background: #212121;\n    overflow: hidden;\n}\n";
styleInject(css_248z$2);script$1.render = render$1;
script$1.__scopeId = "data-v-44424a77";// vue
var script$2 = vue.defineComponent({
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
  setup: function setup(props) {
    // refs
    var btnRipple = vue.ref(null); // lifecycle hooks

    vue.onMounted(function () {
      var _btnRipple$value, _btnRipple$value2, _btnRipple$value3;

      (_btnRipple$value = btnRipple.value) === null || _btnRipple$value === void 0 ? void 0 : _btnRipple$value.style.setProperty('--background', props.background);
      var elevationShadowColor = props.elevation * 0.5;
      (_btnRipple$value2 = btnRipple.value) === null || _btnRipple$value2 === void 0 ? void 0 : _btnRipple$value2.style.setProperty('--elevation-shadow', "0 2px 4px rgba(0, 0, 0, ".concat(elevationShadowColor, ")"));
      (_btnRipple$value3 = btnRipple.value) === null || _btnRipple$value3 === void 0 ? void 0 : _btnRipple$value3.style.setProperty('--color', props.color);
    }); // methods

    var createRipple = function createRipple(event) {
      var button = event.currentTarget;

      if (button) {
        var circle = document.createElement('span');
        var diameter = Math.max(button.clientWidth, button.clientHeight);
        var radius = diameter / 2;
        circle.style.width = circle.style.height = "".concat(diameter, "px");
        var buttonElement = button.getBoundingClientRect();
        circle.style.left = "\n                    ".concat(event.clientX - buttonElement.left - radius, "px\n                ");
        circle.style.top = "\n                    ".concat(event.clientY - buttonElement.top - radius, "px\n                ");
        circle.classList.add('ripple');
        var ripple = button.getElementsByClassName('ripple')[0];

        if (ripple) {
          ripple.remove();
        }

        button.appendChild(circle);
      }
    };

    return {
      props: props,
      createRipple: createRipple,
      btnRipple: btnRipple
    };
  }
});var _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-c7724544");

vue.pushScopeId("data-v-c7724544");

var _hoisted_1$2 = /*#__PURE__*/vue.createVNode("div", {
  class: "btn-overlay"
}, null, -1);

vue.popScopeId();

var render$2 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("button", {
    class: "btn-ripple",
    onMousedown: _cache[1] || (_cache[1] = function () {
      return _ctx.createRipple && _ctx.createRipple.apply(_ctx, arguments);
    }),
    type: _ctx.type,
    ref: "btnRipple"
  }, [_hoisted_1$2, vue.renderSlot(_ctx.$slots, "default")], 40, ["type"]);
});var css_248z$3 = "\n.btn-ripple[data-v-c7724544] {\n    user-select: none;\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    overflow: hidden;\n    transition: background 400ms;\n    color: var(--color);\n    background: var(--background);\n    padding: 10px 16px;\n    font-size: 0.88rem;\n    outline: 0;\n    border: 0;\n    border-radius: 4px;\n    box-shadow: var(--elevation-shadow);\n    cursor: pointer;\n    white-space: nowrap;\n}\n.btn-ripple:hover .btn-overlay[data-v-c7724544] {\n    background: rgba(255, 255, 255, 0.05);\n}\n.btn-ripple:focus .btn-overlay[data-v-c7724544] {\n    background: rgba(255, 255, 255, 0.1);\n}\n.btn-overlay[data-v-c7724544] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0);\n    transition-duration: 0.1s;\n}\n";
styleInject(css_248z$3);var css_248z$4 = "\nspan.ripple {\n    display: flex;\n    position: absolute;\n    border-radius: 50%;\n    transform: scale(0);\n    animation: ripple 600ms linear;\n    background: rgba(255, 255, 255, 0.7);\n    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.7);\n}\n@keyframes ripple {\nto {\n        transform: scale(4);\n        opacity: 0;\n}\n}\n";
styleInject(css_248z$4);script$2.render = render$2;
script$2.__scopeId = "data-v-c7724544";// vue
var script$3 = vue.defineComponent({
  setup: function setup() {
    return {};
  }
});var _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-433f7fc0");

vue.pushScopeId("data-v-433f7fc0");

var _hoisted_1$3 = {
  class: "container"
};
var _hoisted_2 = {
  class: "content"
};

vue.popScopeId();

var render$3 = /*#__PURE__*/_withId$3(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$3, [vue.createVNode("div", _hoisted_2, [vue.renderSlot(_ctx.$slots, "default")])]);
});var css_248z$5 = "\n.container[data-v-433f7fc0] {\n    display: flex;\n    justify-content: center;\n    padding: 0 calc(var(--default-margin) * 2);\n}\n.content[data-v-433f7fc0] {\n    flex: 1;\n    max-width: 1200px;\n    width: 100%;\n}\n";
styleInject(css_248z$5);script$3.render = render$3;
script$3.__scopeId = "data-v-433f7fc0";var script$4 = vue.defineComponent({
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
      default: function _default() {
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
      default: function _default() {
        return true;
      }
    }
  },
  // eslint-disable-next-line
  setup: function setup(props, context) {
    // refs
    var dropdownField = vue.ref(null); // computed

    var isInputFilled = vue.computed(function () {
      return props.modelValue > 0;
    });
    var sortedOptions = vue.computed(function () {
      var tmpArray = _toConsumableArray(props.options);

      return tmpArray.sort(props.sort);
    }); // methods

    var updateValue = function updateValue(e) {
      var val = parseInt(e.target.value);
      context.emit('update:modelValue', val);
    };

    return {
      props: props,
      sortedOptions: sortedOptions,
      isInputFilled: isInputFilled,
      dropdownField: dropdownField,
      updateValue: updateValue
    };
  }
});var _withId$4 = /*#__PURE__*/vue.withScopeId("data-v-15f27a7b");

vue.pushScopeId("data-v-15f27a7b");

var _hoisted_1$4 = {
  class: "dropdown"
};
var _hoisted_2$1 = {
  class: "default-option-text",
  value: 0
};

var _hoisted_3 = /*#__PURE__*/vue.createVNode("div", {
  class: "dropdown-left"
}, null, -1);

var _hoisted_4 = {
  class: "dropdown-notch"
};
var _hoisted_5 = {
  class: "dropdown-label"
};

var _hoisted_6 = /*#__PURE__*/vue.createVNode("div", {
  class: "dropdown-right"
}, null, -1);

vue.popScopeId();

var render$4 = /*#__PURE__*/_withId$4(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$4, [vue.createVNode("select", {
    class: ["dropdown-field", {
      'default-option': !_ctx.isInputFilled
    }],
    ref: "dropdownField",
    value: _ctx.modelValue,
    onInput: _cache[1] || (_cache[1] = function () {
      return _ctx.updateValue && _ctx.updateValue.apply(_ctx, arguments);
    })
  }, [vue.createVNode("option", _hoisted_2$1, vue.toDisplayString(_ctx.props.placeholder), 1), (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.sortedOptions, function (option, i) {
    return vue.openBlock(), vue.createBlock("option", {
      key: i,
      value: option[_ctx.props.value]
    }, vue.toDisplayString(option[_ctx.props.title]), 9, ["value"]);
  }), 128))], 42, ["value"]), _hoisted_3, vue.createVNode("div", _hoisted_4, [vue.createVNode("div", _hoisted_5, vue.toDisplayString(_ctx.props.label), 1)]), _hoisted_6]);
});var css_248z$6 = "\n.dropdown[data-v-15f27a7b] {\n    --font-size: 1.1rem;\n    --label-padding: 6px;\n    --horizontal-padding: 16px;\n    --vertical-padding: 16px;\n    --border: 1px solid rgba(255, 255, 255, 0.3);\n    --height: calc(var(--font-size) + (var(--vertical-padding) * 2) + 2px);\n    display: flex;\n    width: 100%;\n    font-size: 1.1rem;\n    border-radius: 4px;\n    background: rgba(255, 255, 255, 0);\n    position: relative;\n    color: #fff;\n}\n.dropdown-left[data-v-15f27a7b],\n.dropdown-notch[data-v-15f27a7b],\n.dropdown-right[data-v-15f27a7b] {\n    min-height: var(--height);\n    max-height: var(--height);\n    padding: var(--vertical-padding) 0;\n}\n.dropdown-left[data-v-15f27a7b] {\n    padding-left: calc(var(--horizontal-padding) - var(--label-padding));\n    border: var(--border);\n    border-right: none;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n.dropdown-notch[data-v-15f27a7b] {\n    display: flex;\n    align-items: center;\n    padding: var(--vertical-padding) 0;\n    border-bottom: var(--border);\n}\n.dropdown-right[data-v-15f27a7b] {\n    width: 100%;\n    border: var(--border);\n    border-left: none;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n.dropdown-field[data-v-15f27a7b] {\n    flex: 1;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    font-size: 1.1rem;\n    border: none;\n    padding: 0 calc(var(--horizontal-padding) - 4px);\n    background: rgba(255, 255, 255, 0);\n    color: #fff;\n    margin-right: var(--horizontal-padding);\n}\n.dropdown-label[data-v-15f27a7b] {\n    flex: 1;\n    padding: 0 6px;\n    color: #aaa;\n    transition-duration: 0.2s;\n    transform: translateY(calc((-1 / 2) * var(--height)));\n    font-size: 0.8rem;\n    white-space: nowrap;\n}\n.dropdown-field option[data-v-15f27a7b] {\n    color: #000;\n}\n.default-option[data-v-15f27a7b] {\n    color: #aaa;\n}\n.dropdown-field option.default-option-text[data-v-15f27a7b] {\n    color: #777;\n}\n.dropdown-field:focus ~ .dropdown-left[data-v-15f27a7b],\n.dropdown-field:focus ~ .dropdown-notch[data-v-15f27a7b],\n.dropdown-field:focus ~ .dropdown-right[data-v-15f27a7b] {\n    border-color: #2c60d1;\n}\n.dropdown-field:focus ~ .dropdown-notch .dropdown-label[data-v-15f27a7b] {\n    color: #82a4ed;\n}\n";
styleInject(css_248z$6);script$4.render = render$4;
script$4.__scopeId = "data-v-15f27a7b";// vue
var script$5 = vue.defineComponent({
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
  setup: function setup(props) {
    // refs
    var loadingSpinner = vue.ref(null); // lifecycle hooks

    vue.onMounted(function () {
      var _loadingSpinner$value, _loadingSpinner$value2, _loadingSpinner$value3, _loadingSpinner$value4, _loadingSpinner$value5;

      (_loadingSpinner$value = loadingSpinner.value) === null || _loadingSpinner$value === void 0 ? void 0 : _loadingSpinner$value.style.setProperty('--spinner-scale', props.scale + '');
      (_loadingSpinner$value2 = loadingSpinner.value) === null || _loadingSpinner$value2 === void 0 ? void 0 : _loadingSpinner$value2.style.setProperty('--spinner-color', props.color);
      (_loadingSpinner$value3 = loadingSpinner.value) === null || _loadingSpinner$value3 === void 0 ? void 0 : _loadingSpinner$value3.style.setProperty('--ring-width', props.ringWidth * props.scale + 'px');
      (_loadingSpinner$value4 = loadingSpinner.value) === null || _loadingSpinner$value4 === void 0 ? void 0 : _loadingSpinner$value4.style.setProperty('--width', props.width * props.scale + 'px');
      (_loadingSpinner$value5 = loadingSpinner.value) === null || _loadingSpinner$value5 === void 0 ? void 0 : _loadingSpinner$value5.style.setProperty('--height', props.height * props.scale + 'px');
    });
    return {
      loadingSpinner: loadingSpinner
    };
  }
});var _withId$5 = /*#__PURE__*/vue.withScopeId("data-v-f4043936");

vue.pushScopeId("data-v-f4043936");

var _hoisted_1$5 = {
  class: "loading-spinner-container"
};

var _hoisted_2$2 = /*#__PURE__*/vue.createVNode("span", {
  class: "hidden-dash"
}, "-", -1);

var _hoisted_3$1 = {
  class: "loading-spinner",
  ref: "loadingSpinner"
};

var _hoisted_4$1 = /*#__PURE__*/vue.createVNode("div", {
  class: "lds-dual-ring"
}, null, -1);

var _hoisted_5$1 = /*#__PURE__*/vue.createVNode("span", {
  class: "hidden-dash"
}, "-", -1);

vue.popScopeId();

var render$5 = /*#__PURE__*/_withId$5(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$5, [_hoisted_2$2, vue.createVNode("div", _hoisted_3$1, [_hoisted_4$1], 512), _hoisted_5$1]);
});var css_248z$7 = "\n.loading-spinner-container[data-v-f4043936] {\n    display: flex;\n    align-items: center;\n}\n.loading-spinner[data-v-f4043936] {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    width: var(--width);\n    height: var(--height);\n    min-width: var(--width);\n    min-height: var(--height);\n    overflow: hidden;\n}\n.lds-dual-ring[data-v-f4043936] {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    width: var(--width);\n    height: var(--height);\n    min-width: var(--width);\n    min-height: var(--height);\n}\n.lds-dual-ring[data-v-f4043936]:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    border: var(--ring-width) solid rgba(255, 255, 255, 0.05);\n    box-sizing: border-box;\n}\n.lds-dual-ring[data-v-f4043936]:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    border: var(--ring-width) solid var(--spinner-color);\n    border-color: var(--spinner-color) transparent transparent transparent;\n    animation: lds-dual-ring-f4043936 1.2s linear infinite;\n    box-sizing: border-box;\n}\n@keyframes lds-dual-ring-f4043936 {\n0% {\n        transform: rotate(0deg);\n}\n100% {\n        transform: rotate(360deg);\n}\n}\n.hidden-dash[data-v-f4043936] {\n    user-select: none;\n    color: rgba(0, 0, 0, 0);\n}\n";
styleInject(css_248z$7);script$5.render = render$5;
script$5.__scopeId = "data-v-f4043936";// vue
var script$6 = vue.defineComponent({
  components: {
    VmActionButton: script
  },
  props: ['title', 'isPreventClose'],
  // eslint-disable-next-line
  setup: function setup(props) {
    // properties
    var isVisible = vue.ref(false); // methods

    var show = function show() {
      isVisible.value = true;
    };

    var hide = function hide() {
      if (!props.isPreventClose) {
        isVisible.value = false;
      }
    };

    return {
      props: props,
      isVisible: isVisible,
      show: show,
      hide: hide
    };
  }
});var _withId$6 = /*#__PURE__*/vue.withScopeId("data-v-2aad9313");

vue.pushScopeId("data-v-2aad9313");

var _hoisted_1$6 = {
  class: "modal"
};
var _hoisted_2$3 = {
  class: "modal-header"
};
var _hoisted_3$2 = {
  class: "modal-title"
};
var _hoisted_4$2 = {
  class: "modal-content"
};

vue.popScopeId();

var render$6 = /*#__PURE__*/_withId$6(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vm_action_button = vue.resolveComponent("vm-action-button");

  return vue.openBlock(), vue.createBlock(vue.Teleport, {
    to: "body"
  }, [vue.createVNode("div", _hoisted_1$6, [vue.createVNode("div", {
    class: ["modal-pane", {
      'modal-visible': _ctx.isVisible
    }]
  }, [vue.createVNode("div", _hoisted_2$3, [vue.createVNode("div", _hoisted_3$2, vue.toDisplayString(_ctx.props.title), 1), vue.createVNode(_component_vm_action_button, {
    class: "exit",
    background: "rgba(0,0,0,0)",
    elevation: 0,
    icon: "fal fa-times",
    isSmall: true,
    onClick: _ctx.hide
  }, null, 8, ["onClick"])]), vue.createVNode("div", _hoisted_4$2, [vue.renderSlot(_ctx.$slots, "default")])], 2), vue.createVNode("div", {
    class: ["modal-background", {
      'modal-background-visible': _ctx.isVisible
    }],
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.hide();
    })
  }, null, 2)])]);
});var css_248z$8 = "\n.modal[data-v-2aad9313] {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 999;\n    pointer-events: none;\n}\n.modal-header[data-v-2aad9313] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 45px;\n    background: rgba(255, 255, 255, 0.08);\n    font-size: 1.1rem;\n    color: #fff;\n}\n.modal-header .modal-title[data-v-2aad9313] {\n    margin-left: 15px;\n}\n.modal-header .exit[data-v-2aad9313] {\n    margin-right: 5px;\n}\n.modal-content[data-v-2aad9313] {\n    padding: 15px 20px;\n    height: 100%;\n    overflow-y: auto;\n}\n.modal-pane[data-v-2aad9313] {\n    position: relative;\n    z-index: 1000;\n    overflow: hidden;\n    border-radius: 3px;\n    min-width: 400px;\n    width: 600px;\n    max-width: 600px;\n    margin: 30px;\n    display: flex;\n    flex-direction: column;\n    max-height: 90%;\n    background: #333;\n    opacity: 0;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n    pointer-events: none;\n    z-index: 2;\n    transform: scale(0.8);\n    transition-duration: 0.2s;\n}\n.modal-background[data-v-2aad9313] {\n    opacity: 0;\n    pointer-events: none;\n    position: fixed;\n    background: rgba(0, 0, 0, 0.5);\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    transition-duration: 0.2s;\n}\n.modal-visible[data-v-2aad9313] {\n    transform: scale(1);\n}\n.modal-background-visible[data-v-2aad9313],\n.modal-visible[data-v-2aad9313] {\n    opacity: 1;\n    pointer-events: all;\n    transition-duration: 0.2s;\n}\n";
styleInject(css_248z$8);script$6.render = render$6;
script$6.__scopeId = "data-v-2aad9313";// vue
var script$7 = vue.defineComponent({
  setup: function setup() {
    return {};
  }
});var _withId$7 = /*#__PURE__*/vue.withScopeId("data-v-f9d03df4");

vue.pushScopeId("data-v-f9d03df4");

var _hoisted_1$7 = {
  class: "navigation-drawer"
};

vue.popScopeId();

var render$7 = /*#__PURE__*/_withId$7(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$7, [vue.renderSlot(_ctx.$slots, "default")]);
});var css_248z$9 = "\n.navigation-drawer[data-v-f9d03df4] {\n    background: #212121;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\n";
styleInject(css_248z$9);script$7.render = render$7;
script$7.__scopeId = "data-v-f9d03df4";// vue
var script$8 = vue.defineComponent({
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
  setup: function setup(props, context) {
    // refs
    var textField = vue.ref(null); // computed

    var isInputFilled = vue.computed(function () {
      return (props.modelValue + '').length > 0;
    }); // methods

    var updateValue = function updateValue(e) {
      var val = e.target.value;

      try {
        parseInt(val);
        context.emit('update:modelValue', val);
      } catch (e) {
        window.console.log(e);
      }
    };

    return {
      props: props,
      isInputFilled: isInputFilled,
      textField: textField,
      updateValue: updateValue
    };
  }
});var _withId$8 = /*#__PURE__*/vue.withScopeId("data-v-38e24d5a");

vue.pushScopeId("data-v-38e24d5a");

var _hoisted_1$8 = {
  class: "text-field"
};

var _hoisted_2$4 = /*#__PURE__*/vue.createVNode("div", {
  class: "text-field-left"
}, null, -1);

var _hoisted_3$3 = /*#__PURE__*/vue.createVNode("div", {
  class: "text-field-right"
}, null, -1);

vue.popScopeId();

var render$8 = /*#__PURE__*/_withId$8(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$8, [vue.createVNode("input", {
    class: "text-field-input",
    type: "text",
    ref: "textField",
    value: _ctx.modelValue,
    onInput: _cache[1] || (_cache[1] = function () {
      return _ctx.updateValue && _ctx.updateValue.apply(_ctx, arguments);
    })
  }, null, 40, ["value"]), _hoisted_2$4, vue.createVNode("div", {
    class: ["text-field-notch", {
      'text-field-notch-filled': _ctx.isInputFilled
    }]
  }, [vue.createVNode("div", {
    class: ["text-field-label", {
      'text-field-label-filled': _ctx.isInputFilled
    }]
  }, vue.toDisplayString(_ctx.props.label), 3)], 2), _hoisted_3$3]);
});var css_248z$a = "\n.text-field[data-v-38e24d5a] {\n    --font-size: 1.1rem;\n    --label-padding: 6px;\n    --horizontal-padding: 16px;\n    --vertical-padding: 16px;\n    --border: 1px solid rgba(255, 255, 255, 0.3);\n    --height: calc(var(--font-size) + (var(--vertical-padding) * 2) + 2px);\n    display: flex;\n    align-items: center;\n    width: 100%;\n    position: relative;\n}\n.text-field-left[data-v-38e24d5a],\n.text-field-notch[data-v-38e24d5a],\n.text-field-right[data-v-38e24d5a] {\n    min-height: var(--height);\n    max-height: var(--height);\n    padding: var(--vertical-padding) 0;\n}\n.text-field-left[data-v-38e24d5a] {\n    padding-left: calc(var(--horizontal-padding) - var(--label-padding));\n    border: var(--border);\n    border-right: none;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n.text-field-notch[data-v-38e24d5a] {\n    display: flex;\n    align-items: center;\n    padding: var(--vertical-padding) 0;\n    border-top: var(--border);\n    border-bottom: var(--border);\n}\n.text-field-right[data-v-38e24d5a] {\n    width: 100%;\n    border: var(--border);\n    border-left: none;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n.text-field input[data-v-38e24d5a] {\n    flex: 1;\n    position: absolute;\n    padding: var(--vertical-padding) var(--horizontal-padding);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0);\n    color: #fff;\n    font-size: var(--font-size);\n    width: 100%;\n}\n.text-field-label[data-v-38e24d5a] {\n    flex: 1;\n    padding: 0 6px;\n    color: #aaa;\n    transition-duration: 0.2s;\n    white-space: nowrap;\n    font-size: var(--font-size);\n}\ninput:focus ~ .text-field-notch[data-v-38e24d5a],\n.text-field-notch-filled[data-v-38e24d5a] {\n    border-top: none;\n}\ninput:focus ~ .text-field-notch .text-field-label[data-v-38e24d5a],\n.text-field-label-filled[data-v-38e24d5a] {\n    transform: translateY(calc((-1 / 2) * var(--height)));\n    font-size: 0.8rem;\n}\ninput:focus ~ .text-field-left[data-v-38e24d5a],\ninput:focus ~ .text-field-notch[data-v-38e24d5a],\ninput:focus ~ .text-field-right[data-v-38e24d5a] {\n    border-color: #2c60d1;\n}\ninput:focus ~ .text-field-notch .text-field-label[data-v-38e24d5a] {\n    color: #82a4ed;\n}\n";
styleInject(css_248z$a);script$8.render = render$8;
script$8.__scopeId = "data-v-38e24d5a";// vue
var script$9 = vue.defineComponent({
  setup: function setup() {
    return {};
  }
});var _withId$9 = /*#__PURE__*/vue.withScopeId("data-v-73f6e4d3");

vue.pushScopeId("data-v-73f6e4d3");

var _hoisted_1$9 = {
  class: "page-header"
};

vue.popScopeId();

var render$9 = /*#__PURE__*/_withId$9(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$9, [vue.renderSlot(_ctx.$slots, "default")]);
});var css_248z$b = "\n.page-header[data-v-73f6e4d3] {\n    font-size: 1.8rem;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    margin-top: calc(var(--default-margin) * 4);\n    margin-bottom: calc(var(--default-margin) * 4);\n    padding-bottom: calc(var(--default-margin) * 1);\n}\n";
styleInject(css_248z$b);script$9.render = render$9;
script$9.__scopeId = "data-v-73f6e4d3";// vue
var script$a = vue.defineComponent({
  setup: function setup() {
    return {};
  }
});var _withId$a = /*#__PURE__*/vue.withScopeId("data-v-9cdbfa10");

vue.pushScopeId("data-v-9cdbfa10");

var _hoisted_1$a = {
  class: "paper-content"
};

vue.popScopeId();

var render$a = /*#__PURE__*/_withId$a(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$a, [vue.renderSlot(_ctx.$slots, "default")]);
});var css_248z$c = "\n.paper-content[data-v-9cdbfa10] {\n    padding: 12px 16px;\n}\n";
styleInject(css_248z$c);script$a.render = render$a;
script$a.__scopeId = "data-v-9cdbfa10";// vue
var script$b = vue.defineComponent({
  setup: function setup() {
    return {};
  }
});var _withId$b = /*#__PURE__*/vue.withScopeId("data-v-17f96ef8");

vue.pushScopeId("data-v-17f96ef8");

var _hoisted_1$b = {
  class: "paper-header"
};

vue.popScopeId();

var render$b = /*#__PURE__*/_withId$b(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$b, [vue.renderSlot(_ctx.$slots, "default")]);
});var css_248z$d = "\n.paper-header[data-v-17f96ef8] {\n    padding: 12px 16px;\n    background: rgba(255, 255, 255, 0.04);\n}\n";
styleInject(css_248z$d);script$b.render = render$b;
script$b.__scopeId = "data-v-17f96ef8";// vue
var script$c = vue.defineComponent({
  props: {
    elevation: {
      type: Number,
      default: 1
    }
  },
  // eslint-disable-next-line
  setup: function setup(props) {
    // refs
    var paper = vue.ref(null); // lifecycle hooks

    vue.onMounted(function () {
      var _paper$value;

      var color = 25 + props.elevation * 10;

      if (color < 0 || color > 255) {
        color = 255;
      }

      (_paper$value = paper.value) === null || _paper$value === void 0 ? void 0 : _paper$value.style.setProperty('--elevation', "rgb(".concat(color, ", ").concat(color, ", ").concat(color, ")"));
    });
    return {
      paper: paper
    };
  }
});var _withId$c = /*#__PURE__*/vue.withScopeId("data-v-31b1c1e2");

vue.pushScopeId("data-v-31b1c1e2");

var _hoisted_1$c = {
  class: "paper",
  ref: "paper"
};

vue.popScopeId();

var render$c = /*#__PURE__*/_withId$c(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$c, [vue.renderSlot(_ctx.$slots, "default")], 512);
});var css_248z$e = "\n.paper[data-v-31b1c1e2] {\n    display: flex;\n    flex-direction: column;\n    background: var(--elevation);\n    border-radius: 5px;\n    overflow: hidden;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\n";
styleInject(css_248z$e);script$c.render = render$c;
script$c.__scopeId = "data-v-31b1c1e2";var script$d = {
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
  setup: function setup(props, context) {
    // methods
    // eslint-disable-next-line
    var updateValue = function updateValue(e) {
      context.emit('update:modelValue', e.target.checked);
    };

    return {
      props: props,
      updateValue: updateValue
    };
  }
};var _withId$d = /*#__PURE__*/vue.withScopeId("data-v-4dcd525d");

vue.pushScopeId("data-v-4dcd525d");

var _hoisted_1$d = {
  class: "switch-container"
};
var _hoisted_2$5 = {
  class: "switch"
};

var _hoisted_3$4 = /*#__PURE__*/vue.createVNode("span", {
  class: "slider"
}, null, -1);

var _hoisted_4$3 = {
  key: 0,
  class: "ml-1"
};

vue.popScopeId();

var render$d = /*#__PURE__*/_withId$d(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$d, [vue.createVNode("label", _hoisted_2$5, [vue.createVNode("input", {
    id: $props.id,
    type: "checkbox",
    checked: $props.modelValue,
    onInput: _cache[1] || (_cache[1] = function () {
      return $setup.updateValue && $setup.updateValue.apply($setup, arguments);
    })
  }, null, 40, ["id", "checked"]), _hoisted_3$4]), $setup.props.label ? (vue.openBlock(), vue.createBlock("label", _hoisted_4$3, vue.toDisplayString($setup.props.label), 1)) : vue.createCommentVNode("", true)]);
});var css_248z$f = "\n.switch-container[data-v-4dcd525d] {\n    display: flex;\n    align-items: center;\n}\n.switch[data-v-4dcd525d] {\n    --width: 45px;\n    --switch-width: 18px;\n    --height: 24px;\n    --border-radius: 100px;\n    --switch-border-radius: 50%;\n    --inner-padding: 3px;\n\n    width: var(--width);\n    min-width: var(--width);\n    height: var(--height);\n    cursor: pointer;\n    background-color: #999;\n    border-radius: var(--border-radius);\n    position: relative;\n    display: inline-block;\n}\n.switch input[data-v-4dcd525d] {\n    display: none;\n}\n.slider[data-v-4dcd525d] {\n    position: absolute;\n    border-radius: inherit;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: 0.4s;\n}\n.slider[data-v-4dcd525d]:before {\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    border-radius: var(--switch-border-radius);\n    content: '';\n    height: calc(var(--height) - (2 * var(--inner-padding)));\n    width: var(--switch-width);\n    left: var(--inner-padding);\n    bottom: var(--inner-padding);\n    background-color: #555;\n    transition: 0.3s;\n}\ninput:checked + .slider[data-v-4dcd525d] {\n    background: #5a5;\n    border-radius: inherit;\n}\ninput:focus + .slider[data-v-4dcd525d] {\n    box-shadow: 0 0 1px #2196f3;\n}\ninput:checked + .slider[data-v-4dcd525d]:before {\n    transform: translateX(\n        calc(var(--width) - var(--switch-width) - (2 * var(--inner-padding)))\n    );\n}\n";
styleInject(css_248z$f);script$d.render = render$d;
script$d.__scopeId = "data-v-4dcd525d";// vue
var script$e = vue.defineComponent({
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
  setup: function setup(props, context) {
    // refs
    var textField = vue.ref(null); // computed

    var isInputFilled = vue.computed(function () {
      return props.modelValue.length > 0;
    }); // methods

    var updateValue = function updateValue(e) {
      var val = e.target.value;
      context.emit('update:modelValue', val);
    };

    return {
      props: props,
      isInputFilled: isInputFilled,
      textField: textField,
      updateValue: updateValue
    };
  }
});var _withId$e = /*#__PURE__*/vue.withScopeId("data-v-04c47985");

vue.pushScopeId("data-v-04c47985");

var _hoisted_1$e = {
  class: "text-field"
};

var _hoisted_2$6 = /*#__PURE__*/vue.createVNode("div", {
  class: "text-field-left"
}, null, -1);

var _hoisted_3$5 = /*#__PURE__*/vue.createVNode("div", {
  class: "text-field-right"
}, null, -1);

vue.popScopeId();

var render$e = /*#__PURE__*/_withId$e(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$e, [vue.createVNode("input", {
    class: "text-field-input",
    type: _ctx.isPassword ? 'password' : 'text',
    ref: "textField",
    value: _ctx.modelValue,
    onInput: _cache[1] || (_cache[1] = function () {
      return _ctx.updateValue && _ctx.updateValue.apply(_ctx, arguments);
    })
  }, null, 40, ["type", "value"]), _hoisted_2$6, vue.createVNode("div", {
    class: ["text-field-notch", {
      'text-field-notch-filled': _ctx.isInputFilled
    }]
  }, [vue.createVNode("div", {
    class: ["text-field-label", {
      'text-field-label-filled': _ctx.isInputFilled
    }]
  }, vue.toDisplayString(_ctx.props.label), 3)], 2), _hoisted_3$5]);
});var css_248z$g = "\n.text-field[data-v-04c47985] {\n    --font-size: 1.1rem;\n    --label-padding: 6px;\n    --horizontal-padding: 16px;\n    --vertical-padding: 16px;\n    --border: 1px solid rgba(255, 255, 255, 0.3);\n    --height: calc(var(--font-size) + (var(--vertical-padding) * 2) + 2px);\n    display: flex;\n    align-items: center;\n    width: 100%;\n    position: relative;\n}\n.text-field-left[data-v-04c47985],\n.text-field-notch[data-v-04c47985],\n.text-field-right[data-v-04c47985] {\n    min-height: var(--height);\n    max-height: var(--height);\n    padding: var(--vertical-padding) 0;\n}\n.text-field-left[data-v-04c47985] {\n    padding-left: calc(var(--horizontal-padding) - var(--label-padding));\n    border: var(--border);\n    border-right: none;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n.text-field-notch[data-v-04c47985] {\n    display: flex;\n    align-items: center;\n    padding: var(--vertical-padding) 0;\n    border-top: var(--border);\n    border-bottom: var(--border);\n}\n.text-field-right[data-v-04c47985] {\n    width: 100%;\n    border: var(--border);\n    border-left: none;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n.text-field input[data-v-04c47985] {\n    flex: 1;\n    position: absolute;\n    padding: var(--vertical-padding) var(--horizontal-padding);\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0);\n    color: #fff;\n    font-size: var(--font-size);\n    width: 100%;\n}\n.text-field-label[data-v-04c47985] {\n    flex: 1;\n    padding: 0 6px;\n    color: #aaa;\n    transition-duration: 0.2s;\n    white-space: nowrap;\n    font-size: var(--font-size);\n}\ninput:focus ~ .text-field-notch[data-v-04c47985],\n.text-field-notch-filled[data-v-04c47985] {\n    border-top: none;\n}\ninput:focus ~ .text-field-notch .text-field-label[data-v-04c47985],\n.text-field-label-filled[data-v-04c47985] {\n    transform: translateY(calc((-1 / 2) * var(--height)));\n    font-size: 0.8rem;\n}\ninput:focus ~ .text-field-left[data-v-04c47985],\ninput:focus ~ .text-field-notch[data-v-04c47985],\ninput:focus ~ .text-field-right[data-v-04c47985] {\n    border-color: #2c60d1;\n}\ninput:focus ~ .text-field-notch .text-field-label[data-v-04c47985] {\n    color: #82a4ed;\n}\n";
styleInject(css_248z$g);script$e.render = render$e;
script$e.__scopeId = "data-v-04c47985";/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,VmActionButton: script,VmAppBar: script$1,VmButton: script$2,VmContainer: script$3,VmDropdown: script$4,VmLoadingSpinner: script$5,VmModal: script$6,VmNavigationDrawer: script$7,VmNumberField: script$8,VmPageHeader: script$9,VmPaperContent: script$a,VmPaperHeader: script$b,VmPaper: script$c,VmSwitch: script$d,VmTextField: script$e});var install = function installVue3Material(app) {
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components$1=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,VmActionButton: script,VmAppBar: script$1,VmButton: script$2,VmContainer: script$3,VmDropdown: script$4,VmLoadingSpinner: script$5,VmModal: script$6,VmNavigationDrawer: script$7,VmNumberField: script$8,VmPageHeader: script$9,VmPaperContent: script$a,VmPaperHeader: script$b,VmPaper: script$c,VmSwitch: script$d,VmTextField: script$e});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components$1).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    var key = componentName;
    var val = component;
    install[key] = val;
  }
});module.exports=install;