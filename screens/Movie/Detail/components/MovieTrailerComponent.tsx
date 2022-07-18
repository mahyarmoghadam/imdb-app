import { useTheme } from "@hooks";
import { Block, Button, Text } from "expo-ui-kit";
import { useMovieVideos } from "@hooks";
import React, { useCallback, useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { FlatList } from "native-base";
import MovieTrailerListComponent from "./MovieTrailerListComponent";

export interface MovieTrailerProps {
  movieId: number;
}

export default function MovieTrailerComponent({ movieId }: MovieTrailerProps) {
  const theme = useTheme();
  const { data, isFetched } = useMovieVideos(movieId);

  return (
    <Block shadow={true} style={styles.container} color={theme.background}>
      <Block row space="between" paddingHorizontal={15}>
        <Text size={18} color={theme.secondaryTextColor}>
          Trailer
        </Text>
      </Block>

      <Block  marginTop={10} noflex shadow={true}>
        <FlatList
          data={data?.data?.results}
          horizontal
          paddingLeft={15}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <MovieTrailerListComponent data={item} />} />
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },

  imageContainer: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    paddingVertical: 10,
  },
});
