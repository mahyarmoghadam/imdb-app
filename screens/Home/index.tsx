import { SIZES } from "@constants";
import { useTheme } from "@hooks";
import { Block } from "expo-ui-kit";
import React from "react";
import HomeBody from "./components/body/HomeBody";
import HeaderComponent from "./components/header/HeaderComponent";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Block>
      <Block scroll color={theme.background}>
        <HeaderComponent />
        <HomeBody />
      </Block>
    </Block>
  );
}
