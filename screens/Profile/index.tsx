import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";

export default function ProfileScreen() {
  return <Block scroll style={styles.container}></Block>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#140f14",
  },
});
