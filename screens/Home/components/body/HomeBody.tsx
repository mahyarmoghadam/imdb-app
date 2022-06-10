import React from "react";
import { Block } from "expo-ui-kit";
import HomeBannerComponent from "./HomeBanner";
import HomeTopMovie from "./HomeTopMovie";
import { SIZES } from "@constants";
import HomePopular from "./HomePopular";
import HomeFavoritePeople from "./HomeFavoritePeople";
import HomeGenres from "./HomeGenres";

export default function HomeBody() {
  return (
    <Block paddingLeft={SIZES.small_padding}>
      <Block >
        <HomeBannerComponent />
      </Block>

      <Block>
        <HomePopular />
      </Block>

      <Block>
        <HomeGenres />
      </Block>

      <Block>
        <HomeTopMovie />
      </Block>

      <Block>
        <HomeFavoritePeople/>
      </Block>
    </Block>
  );
}
