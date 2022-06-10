import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@hooks";
import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function SearchComponent() {
  const theme = useTheme();
  return (
    <Block paddingHorizontal={20} style={styles.container} row>
      <FontAwesome
        style={styles.searchIcon}
        color={theme.linkColor}
        size={25}
        name="search"
      />
      <TextInput
        style={[
          styles.searchContainer,
          { backgroundColor: theme.textInput, borderColor: theme.textInput },
        ]}
        placeholder="search"
        placeholderTextColor={theme.linkColor}
      />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  searchContainer: {
    paddingHorizontal: 50,
    width: "100%",
    height: 60,
    borderRadius: 15,
    borderWidth: 1,
    color: "#998396",
    fontWeight: "600",
  },

  searchIcon: {
    position: "absolute",
    left: 35,
    zIndex: 1,
  },
});
