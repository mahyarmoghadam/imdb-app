import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import TagComponent from "../../../Shared/components/TagComponent";
import {
  MovieTrailerComponent,
  MovieCastComponent,
  MovieCommentComponent,
} from "@movie-detail-components";

export default function MovieDetailComponent() {
  const theme = useTheme();

  return (
    <Block paddingHorizontal={15} paddingVertical={5} color={"#201921"}>
      <Block row>
        <TagComponent tagName="Epic" />
        <TagComponent tagName="Fantasy" />
        <TagComponent tagName="Drama" />
      </Block>

      <Block paddingHorizontal={5} paddingVertical={15}>
        <Text weight={"600"} color={theme.secondaryTextColor} size={12}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias
          quae obcaecati voluptas facilis quia sint explicabo. Illum, eum
          necessitatibus. Hic odit optio pariatur vero quia aspernatur vel
          magnam laudantium...
          <Text color={theme.textColor} size={12}>
            more
          </Text>
        </Text>
      </Block>

      <MovieCastComponent />

      <MovieTrailerComponent />

      <MovieCommentComponent />
    </Block>
  );
}
