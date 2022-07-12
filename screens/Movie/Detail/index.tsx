
import { useTheme } from "@hooks";
import { Block } from "expo-ui-kit";
import { ScrollView } from "native-base";
import React from "react";
import MovieBackgroundImageComponent from "./components/MovieBackgroundImageComponent";
import MovieDetailComponent from "./components/MovieDetailComponent";

export default function MovieDetailScreen() {
  const theme = useTheme();

  return (
    <Block color={theme.background} >
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <MovieBackgroundImageComponent />

        <MovieDetailComponent />
      </ScrollView>
    </Block>
  );
}