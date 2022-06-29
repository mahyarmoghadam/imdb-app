
import { SIZES } from "@constants";
import { useTheme } from "@hooks";
import { Block } from "expo-ui-kit";
import React, { useEffect } from "react";
import HomeBody from "./components/body/HomeBody";
import HeaderComponent from "./components/header/HeaderComponent";
import { useMovieList } from "../../services/Movie/MovieHook";

export default function HomeScreen() {
  const theme = useTheme();
  
  return (
    <Block>
      <Block noflex height={SIZES.padding} color={theme.background}></Block>
      <Block scroll color={theme.background}>
        <HeaderComponent />
        <HomeBody />
      </Block>
    </Block>
  );
}
