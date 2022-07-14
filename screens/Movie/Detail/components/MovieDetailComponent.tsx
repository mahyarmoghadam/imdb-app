import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import TagComponent from "../../../Shared/components/TagComponent";
import {
  MovieTrailerComponent,
  MovieCastComponent,
  MovieCommentComponent,
} from "@movie-detail-components";
import { MovieDetail } from "@models";

export interface MovieDetailProps {
  data: MovieDetail
}

export default function MovieDetailComponent({ data }: MovieDetailProps) {
  const theme = useTheme();

  return (
    <Block color={theme.background}>
      <Block row paddingHorizontal={15}>
        <TagComponent tagName="Epic" />
        <TagComponent tagName="Fantasy" />
        <TagComponent tagName="Drama" />
      </Block>

      <Block paddingVertical={15} paddingHorizontal={20}>
        <Text weight={"600"} color={theme.secondaryTextColor} size={12}>
          {data.overview}
        </Text>
      </Block>

      <MovieCastComponent />

      <MovieTrailerComponent />

      <MovieCommentComponent />
    </Block>
  );
}
