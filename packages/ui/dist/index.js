"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  GeneralTextInput: () => GeneralTextInput,
  SelectButton: () => SelectButton,
  TextInputWithButton: () => TextInputWithButton
});
module.exports = __toCommonJS(src_exports);

// src/button/index.tsx
var import_react = require("react");
var import_react_native = require("react-native");

// src/constants/color.ts
var COLORS = {
  BLACK: "#000000",
  BUTTON_GREEN: "#58B99D",
  CONTAINER_GREEN: "#E7F2E5",
  CONTAINER_ORANGE: "#F8ECDD",
  CONTAINER_RED: "#FBE6E5",
  CONTAINER_YELLOW: "#F3F3DE",
  DISABLED: "#D9D9D9",
  GREY1: "#F5F5F5",
  GREY2: "#E0E0E0",
  GREY3: "#BDBDBD",
  GREY4: "#7F7F7F",
  GREY5: "#2F2F2F",
  POINT_RED: "#EB4D3D",
  PRIMARY_BLUE: "#476BFF",
  PRIMARYCONTAINER_BLUE: "#F3F4FF",
  SCRIM: "#808080",
  TRANSPARENT_GRAY: "#F7F7F7",
  WHITE: "#FFFFFF"
};
var color_default = COLORS;

// src/button/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Button({
  borderRadius,
  disabled,
  height,
  onPress,
  text,
  width
}) {
  const styles5 = (0, import_react.useMemo)(
    () => import_react_native.StyleSheet.create({
      container: {
        alignItems: "center",
        alignSelf: width ? "auto" : "stretch",
        backgroundColor: disabled ? color_default.DISABLED : color_default.PRIMARY_BLUE,
        borderRadius: borderRadius || 12,
        display: "flex",
        height: height || 59,
        justifyContent: "center",
        width
      },
      text: {
        color: disabled ? color_default.BLACK : color_default.WHITE,
        fontSize: 16,
        fontWeight: "bold"
      }
    }),
    [borderRadius, disabled, height, width]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Pressable, { disabled, onPress, style: [styles5.container], children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, { style: styles5.text, children: text }) });
}

// src/input/generalTextInput/index.tsx
var import_react_native5 = require("react-native");

// src/input/title/index.tsx
var import_react_native3 = require("react-native");

// src/input/title/styles.tsx
var import_react_native2 = require("react-native");
var styles = import_react_native2.StyleSheet.create({
  container: { alignSelf: "flex-start", flexDirection: "row" },
  isRequired: {
    color: color_default.POINT_RED
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8
  }
});

// src/input/title/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Title({ isRequired, text }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_native3.View, { style: styles.container, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native3.Text, { style: styles.title, children: text }),
    isRequired && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native3.Text, { style: styles.isRequired, children: "*" })
  ] });
}

// src/input/generalTextInput/styles.tsx
var import_react_native4 = require("react-native");
var styles2 = import_react_native4.StyleSheet.create({
  container: {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    height: 96
  },
  error: {
    color: color_default.POINT_RED,
    fontSize: 12,
    marginTop: 8,
    paddingLeft: 16
  },
  input: {
    alignSelf: "stretch",
    borderColor: color_default.GREY3,
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 16,
    height: 48,
    paddingHorizontal: 16
  },
  invalid: {
    borderColor: color_default.POINT_RED
  },
  placeholder: {
    fontSize: 16,
    fontWeight: "bold"
  },
  valid: {
    borderColor: color_default.PRIMARY_BLUE
  }
});

// src/input/generalTextInput/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function GeneralTextInput(_a) {
  var _b = _a, {
    errorMessage,
    isInValid,
    isRequired,
    isValid,
    title
  } = _b, props = __objRest(_b, [
    "errorMessage",
    "isInValid",
    "isRequired",
    "isValid",
    "title"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react_native5.View, { style: styles2.container, children: [
    !!title && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Title, { isRequired: !!isRequired, text: title }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_react_native5.TextInput,
      __spreadProps(__spreadValues({}, props), {
        style: [
          styles2.input,
          isValid && styles2.valid,
          isInValid && styles2.invalid
        ],
        placeholderTextColor: color_default.GREY3
      })
    ),
    isInValid && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native5.Text, { style: styles2.error, children: errorMessage })
  ] });
}

// src/input/selectButton/index.tsx
var import_react_native7 = require("react-native");

// src/input/selectButton/styles.tsx
var import_react_native6 = require("react-native");
var styles3 = import_react_native6.StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: color_default.GREY1,
    borderRadius: 8,
    display: "flex",
    height: 44,
    justifyContent: "center",
    width: 164
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  outerContainer: {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    height: 79
  },
  selected: {
    backgroundColor: color_default.PRIMARY_BLUE,
    color: color_default.WHITE
  },
  text: {
    color: color_default.GREY4,
    fontSize: 16,
    fontWeight: "bold"
  }
});

// src/input/selectButton/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function SelectButton({
  isRequired,
  onSelect,
  option1,
  option2,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react_native7.View, { style: styles3.outerContainer, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Title, { isRequired: !!isRequired, text: "\uC131\uBCC4" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react_native7.View, { style: styles3.innerContainer, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_react_native7.Pressable,
        {
          onPress: () => onSelect(option1),
          style: [styles3.button, option1 === value && styles3.selected],
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native7.Text, { style: [styles3.text, option1 === value && styles3.selected], children: option1 })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_react_native7.Pressable,
        {
          onPress: () => onSelect(option2),
          style: [styles3.button, option2 === value && styles3.selected],
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native7.Text, { style: [styles3.text, option2 === value && styles3.selected], children: option2 })
        }
      )
    ] })
  ] });
}

// src/input/textInputWithButton/index.tsx
var import_react_native9 = require("react-native");

// src/input/textInputWithButton/styles.tsx
var import_react_native8 = require("react-native");
var styles4 = import_react_native8.StyleSheet.create({
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    alignSelf: "stretch",
    borderColor: color_default.GREY3,
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 16,
    height: 48,
    paddingHorizontal: 16,
    width: 239
  },
  outerContainer: {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    height: 79
  },
  placeholder: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

// src/input/textInputWithButton/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function TextInputWithButton(_a) {
  var _b = _a, {
    isRequired,
    title
  } = _b, props = __objRest(_b, [
    "isRequired",
    "title"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react_native9.View, { style: styles4.outerContainer, children: [
    !!title && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Title, { isRequired: !!isRequired, text: title }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react_native9.View, { style: styles4.innerContainer, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_react_native9.TextInput,
        __spreadProps(__spreadValues({}, props), {
          placeholderTextColor: color_default.GREY3,
          style: styles4.input
        })
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { borderRadius: 6, height: 48, text: "\uC911\uBCF5\uD655\uC778", width: 96 })
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  GeneralTextInput,
  SelectButton,
  TextInputWithButton
});
