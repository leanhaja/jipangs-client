// src/button/index.tsx
import { Text, TouchableOpacity } from "react-native";

// src/button/styled.ts
import { StyleSheet } from "react-native";
var styles = StyleSheet.create({
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
import { jsx } from "react/jsx-runtime";
function Button({ text, onClick }) {
  return /* @__PURE__ */ jsx(TouchableOpacity, { style: styles.button, onPress: onClick, children: /* @__PURE__ */ jsx(Text, { style: styles.text, children: text }) });
}
export {
  Button
};
