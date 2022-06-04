import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";

export interface TagProps {
  tagName: string;
}

export default function TagComponent({ tagName }: TagProps) {
  return (
    <Block  noflex style={styles.container}>
      <Text color="#998396">{tagName}</Text>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#382c3e',
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:8,
    marginHorizontal:2
  },
});
