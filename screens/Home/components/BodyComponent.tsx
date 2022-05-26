import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import PopularComponent from "./PopularComponent";
import GenresComponent from "./GenresComponent";
import LegendaryMovieComponent from "./LegendaryMovieComponent";

export default function BodyComponent() {
  return (
    <Block>
      <PopularComponent />

      <GenresComponent />

      <LegendaryMovieComponent/>
    </Block>
  );
}

const styles = StyleSheet.create({});
