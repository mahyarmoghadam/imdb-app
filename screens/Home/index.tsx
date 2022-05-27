import { StatusBar } from "expo-status-bar";
import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Text } from "react-native";
import BodyComponent from "./components/body/BodyComponent";
import HeaderComponent from "./components/header/HeaderComponent";

export default function HomeScreen() {
  return (
    <Block scroll style={styles.container}>
      <HeaderComponent />

      <BodyComponent />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#140f14",
  },
});
