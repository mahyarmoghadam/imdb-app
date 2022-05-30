import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import MovieBackgroundImageComponent from "./components/MovieBackgroundImageComponent";
import MovieDetailComponent from "./components/MovieDetailComponent";

export default function MovieDetailScreen() {
  return (
    <Block scroll color='#201921' >
      <MovieBackgroundImageComponent />

      <MovieDetailComponent />
    </Block>
  );
}