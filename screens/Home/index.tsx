import { SIZES } from "@constants";
import { useTheme } from "@hooks";
import { Block } from "expo-ui-kit";
import { ScrollView } from "native-base";
import React from "react";
import HomeBody from "./components/body/HomeBody";
import HeaderComponent from "./components/header/HeaderComponent";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Block>
      <Block noflex height={SIZES.padding} color={theme.box}></Block>
      <Block color={theme.background}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <HeaderComponent />
          <HomeBody />
        </ScrollView>
      </Block>
    </Block>
  );
}
