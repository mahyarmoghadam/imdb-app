import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import MovieCommentListComponent from "./MovieCommentListComponent";

export default function MovieCommentComponent() {
  const theme = useTheme();

  return (
    <Block  paddingVertical={20} color={theme.background} >
      <Block paddingLeft={15} row space="between">
        <Text size={18} color={theme.secondaryTextColor}>
          Comments
        </Text>
      </Block>

      <MovieCommentListComponent />
    </Block>
  );
}

