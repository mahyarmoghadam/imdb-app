import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../../models/constants/Colors";
import GenresListComponent from "./GenresListComponent";

export default function GenresComponent() {
  return (
    <Block style={styles.container}>
      <Block row space="between">
        <Text size={18} color={Colors.basicTextColor}>
          Genres
        </Text>
        <Text size={16} color={Colors.basicLinkColor}>
          See all
        </Text>
      </Block>

      <GenresListComponent />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
});
