import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../../../models/constants/Colors";
import PopularListComponent from "./PopularListComponent";

export default function LegendaryMovieComponent() {
  return (
    <Block style={styles.container}>
      <Block row space="between">
        <Text size={18} color={Colors.basicTextColor}>
          Legendary Movies
        </Text>
        <Text size={16} color={Colors.basicLinkColor}>
          See all
        </Text>
      </Block>

      <PopularListComponent />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
