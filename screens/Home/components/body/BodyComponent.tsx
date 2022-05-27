import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import GenresComponent from "./GenresComponent";
import LegendaryMovieComponent from "./LegendaryMovieComponent";
import CastAndCrewComponent from "./CastAndCrewComponent";
import PopularComponent from "./PopularComponent";

export default function BodyComponent() {
  return (
    <Block>
      <PopularComponent />

      <GenresComponent />

      <LegendaryMovieComponent/>

      <CastAndCrewComponent/>
    </Block>
  );
}

const styles = StyleSheet.create({});
