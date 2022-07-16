
import { SIZES } from "@constants";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@hooks";
import { Block, Input, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function SearchBarComponent() {
  const theme = useTheme();

  return (
    <Block paddingHorizontal={4}
      style={[
        styles.container,
        { backgroundColor: theme.textInput, borderColor: theme.textInput },
      ]}
      row>
      <FontAwesome
        style={styles.searchIcon}
        color={theme.textColor}
        size={20}
        name="search"
      />
      <TextInput
        style={[styles.searchContainer, { color: theme.textColor }]}
        placeholder="search"
        placeholderTextColor={theme.textColor}
      />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  searchContainer: {
    flex: 1,
    height: 48,
    paddingHorizontal: 4,
    borderRadius: 12,
    fontSize: 20
  },

  searchIcon: {
    marginHorizontal: 4,
  },
})
