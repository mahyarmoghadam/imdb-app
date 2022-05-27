import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import MovieBackgroundImageComponent from "./components/MovieBackgroundImageComponent";
import MovieDetailComponent from "./components/MovieDetailComponent";

export default function MovieDetailScreen() {
  return (
    <Block scroll style={styles.container}>
      <MovieBackgroundImageComponent />

      <MovieDetailComponent />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#201921",
  },
});
