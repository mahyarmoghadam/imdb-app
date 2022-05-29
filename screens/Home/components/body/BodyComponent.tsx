import React from "react";
import { Block } from "expo-ui-kit";
import ForYouComponent from "./ForYouComponent";
import PopularComponent from "./PopularComponent";
import GenresComponent from "./GenresComponent";
import LegendaryMovieComponent from "./LegendaryMovieComponent";
import CastAndCrewComponent from "./CastAndCrewComponent";

export default function BodyComponent() {
  return (
    <Block>
      <ForYouComponent />
      <PopularComponent />
      <GenresComponent />
      <LegendaryMovieComponent />
      <CastAndCrewComponent />
    </Block>
  );
}
