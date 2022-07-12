import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";

export interface TagProps {
  tagName: string;
}

export default function TagComponent({ tagName }: TagProps) {
  const theme = useTheme();
  return (
    <Block  noflex style={styles.container} color={theme.tags}>
      <Text color={theme.text}>{tagName}</Text>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:5,
    marginHorizontal:2
  },
});
