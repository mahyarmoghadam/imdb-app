import React, { useEffect } from "react";
import { Block } from "expo-ui-kit";
import HomeBannerComponent from "./HomeBanner";
import HomeTopMovie from "./HomeTopMovie";
import { SIZES } from "@constants";
import HomePopular from "./HomePopular";
import HomeFavoritePeople from "./HomeFavoritePeople";
import HomeGenres from "./HomeGenres";
import { useAccountProfile, useTheme } from "@hooks";

export default function HomeBody() {
  const theme = useTheme();

  const { data } = useAccountProfile();

  useEffect(() => {
    console.log(data)
  }, [data])


  return (
    <Block >
      <Block color={theme.box} marginVertical={10}>
        <HomeBannerComponent />
      </Block>

      <Block color={theme.box} marginVertical={10}>
        <HomePopular />
      </Block>

      <Block color={theme.box} marginVertical={10}>
        <HomeGenres />
      </Block>

      <Block color={theme.box} marginVertical={10}>
        <HomeTopMovie />
      </Block>

      <Block color={theme.box} marginVertical={10}>
        <HomeFavoritePeople />
      </Block>
    </Block>
  );
}
