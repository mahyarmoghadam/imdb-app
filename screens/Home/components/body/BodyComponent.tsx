import React from "react";
import { Block } from "expo-ui-kit";
import ForYouComponent from "./ForYouComponent";
import PopularComponent from "./PopularComponent";
import GenresComponent from "./GenresComponent";
import LegendaryMovieComponent from "./LegendaryMovieComponent";
import CastAndCrewComponent from "./CastAndCrewComponent";
import { SIZES } from "@constants";

export default function BodyComponent() {
  return (
    <Block paddingLeft={SIZES.small_padding}>
      <ForYouComponent />
      <Block height={SIZES.base} />
      <PopularComponent />
      <Block height={SIZES.base} />
      <GenresComponent />
      <Block height={SIZES.base} />
      <LegendaryMovieComponent />
      <Block height={SIZES.base} />
      <CastAndCrewComponent />
    </Block>
  );
}
