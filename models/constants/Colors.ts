import Theme from "./Theme";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    textColor: "#3c3c3e",
    secondaryTextColor: "#3c3c3e",
    linkColor: "#ff5524",
    textInput: "#f2f2f3",
    navigationIconColor:"#ff5524",
    ratingColor: "#ffcc66",
  } as Theme,
  dark: {
    text: "#fff",
    background: "#1f1d1b",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    textColor: "#aea8af",
    secondaryTextColor: "#eae6e8",
    linkColor: "#402760",
    navigationIconColor:"#bc9d89",
    textInput: "#382c3e",

    ratingColor: "#dbb28c",
  } as Theme,

};
