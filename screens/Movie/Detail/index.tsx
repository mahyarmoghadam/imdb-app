import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import MovieBackgroundImageComponent from "./components/MovieBackgroundImageComponent";

export default function MovieDetailScreen() {
  return (
    <Block scroll style={styles.container}>
      <MovieBackgroundImageComponent />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#140f14",
  },
});
