"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  Button: () => Button
});
module.exports = __toCommonJS(src_exports);

// src/button/index.tsx
var import_react_native2 = require("react-native");

// src/button/styled.ts
var import_react_native = require("react-native");
var styles = import_react_native.StyleSheet.create({
  button: {
    maxWidth: 200,
    textAlign: "center",
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: "15px",
    backgroundColor: "#2f80ed"
  },
  text: {
    color: "white"
  }
});

// src/button/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Button({ text, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native2.TouchableOpacity, { style: styles.button, onPress: onClick, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native2.Text, { style: styles.text, children: text }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
