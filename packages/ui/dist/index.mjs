var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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

// src/button/index.tsx
import { useMemo } from "react";
import {
  StyleSheet,
  Pressable,
  Text
} from "react-native";

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
import { jsx } from "react/jsx-runtime";
function Button({
  borderRadius,
  disabled,
  height,
  onPress,
  text,
  width
}) {
  const styles5 = useMemo(
    () => StyleSheet.create({
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
  return /* @__PURE__ */ jsx(Pressable, { disabled, onPress, style: [styles5.container], children: /* @__PURE__ */ jsx(Text, { style: styles5.text, children: text }) });
}

// src/input/generalTextInput/index.tsx
import { TextInput, View as View2, Text as Text3 } from "react-native";

// src/input/title/index.tsx
import { Text as Text2, View } from "react-native";

// src/input/title/styles.tsx
import { StyleSheet as StyleSheet2 } from "react-native";
var styles = StyleSheet2.create({
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
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Title({ isRequired, text }) {
  return /* @__PURE__ */ jsxs(View, { style: styles.container, children: [
    /* @__PURE__ */ jsx2(Text2, { style: styles.title, children: text }),
    isRequired && /* @__PURE__ */ jsx2(Text2, { style: styles.isRequired, children: "*" })
  ] });
}

// src/input/generalTextInput/styles.tsx
import { StyleSheet as StyleSheet3 } from "react-native";
var styles2 = StyleSheet3.create({
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
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2(View2, { style: styles2.container, children: [
    !!title && /* @__PURE__ */ jsx3(Title, { isRequired: !!isRequired, text: title }),
    /* @__PURE__ */ jsx3(
      TextInput,
      __spreadProps(__spreadValues({}, props), {
        style: [
          styles2.input,
          isValid && styles2.valid,
          isInValid && styles2.invalid
        ],
        placeholderTextColor: color_default.GREY3
      })
    ),
    isInValid && /* @__PURE__ */ jsx3(Text3, { style: styles2.error, children: errorMessage })
  ] });
}

// src/input/selectButton/index.tsx
import { Pressable as Pressable2, Text as Text4, View as View3 } from "react-native";

// src/input/selectButton/styles.tsx
import { StyleSheet as StyleSheet4 } from "react-native";
var styles3 = StyleSheet4.create({
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
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function SelectButton({
  isRequired,
  onSelect,
  option1,
  option2,
  value
}) {
  return /* @__PURE__ */ jsxs3(View3, { style: styles3.outerContainer, children: [
    /* @__PURE__ */ jsx4(Title, { isRequired: !!isRequired, text: "\uC131\uBCC4" }),
    /* @__PURE__ */ jsxs3(View3, { style: styles3.innerContainer, children: [
      /* @__PURE__ */ jsx4(
        Pressable2,
        {
          onPress: () => onSelect(option1),
          style: [styles3.button, option1 === value && styles3.selected],
          children: /* @__PURE__ */ jsx4(Text4, { style: [styles3.text, option1 === value && styles3.selected], children: option1 })
        }
      ),
      /* @__PURE__ */ jsx4(
        Pressable2,
        {
          onPress: () => onSelect(option2),
          style: [styles3.button, option2 === value && styles3.selected],
          children: /* @__PURE__ */ jsx4(Text4, { style: [styles3.text, option2 === value && styles3.selected], children: option2 })
        }
      )
    ] })
  ] });
}

// src/input/textInputWithButton/index.tsx
import { TextInput as TextInput2, View as View4 } from "react-native";

// src/input/textInputWithButton/styles.tsx
import { StyleSheet as StyleSheet5 } from "react-native";
var styles4 = StyleSheet5.create({
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
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function TextInputWithButton(_a) {
  var _b = _a, {
    isRequired,
    title
  } = _b, props = __objRest(_b, [
    "isRequired",
    "title"
  ]);
  return /* @__PURE__ */ jsxs4(View4, { style: styles4.outerContainer, children: [
    !!title && /* @__PURE__ */ jsx5(Title, { isRequired: !!isRequired, text: title }),
    /* @__PURE__ */ jsxs4(View4, { style: styles4.innerContainer, children: [
      /* @__PURE__ */ jsx5(
        TextInput2,
        __spreadProps(__spreadValues({}, props), {
          placeholderTextColor: color_default.GREY3,
          style: styles4.input
        })
      ),
      /* @__PURE__ */ jsx5(Button, { borderRadius: 6, height: 48, text: "\uC911\uBCF5\uD655\uC778", width: 96 })
    ] })
  ] });
}
export {
  Button,
  GeneralTextInput,
  SelectButton,
  TextInputWithButton
};
