import Theme from "./Theme";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#140f14",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    textColor: "#aea8af",
    secondaryTextColor: "#eae6e8",
    linkColor: "#402760",
  } as Theme,
  dark: {
    text: "#fff",
    background: "#140f14",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    textColor: "#aea8af",
    secondaryTextColor: "#eae6e8",
    linkColor: "#402760",
  } as Theme,
};
