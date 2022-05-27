import { Block, Text } from "expo-ui-kit";
import React from "react";
import { FlatList, StyleSheet, Image } from "react-native";
import Colors from "../../../../models/constants/Colors";
import { fakeCast } from "../../../../models/movies/fake-movie";
import MovieCommentListComponent from "./MovieCommentListComponent";

export default function MovieCommentComponent() {
  return (
    <Block style={styles.container}>
      <Block row space="between">
        <Text size={18} color={Colors.secondaryTextColor}>
          Comments
        </Text>
      </Block>

      <MovieCommentListComponent />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
    paddingVertical: 20,
    backgroundColor: "#201921"
  },
});
