import { useTheme } from "@hooks";
import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import BodyComponent from "./components/body/BodyComponent";
import HeaderComponent from "./components/header/HeaderComponent";

export default function HomeScreen() {
  const headerHeight = 20;
  const theme = useTheme();
  return (
    <Block>
      <Block noflex height={headerHeight} color={theme.background}></Block>
      <Block scroll style={styles.container}>
        <HeaderComponent />
        <BodyComponent />
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#140f14",
  },
});
