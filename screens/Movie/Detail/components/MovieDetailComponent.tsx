import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../../../models/constants/Colors";
import TagComponent from "../../../Shared/components/TagComponent";

export default function MovieDetailComponent() {
  return (
    <Block style={styles.container}>
      <Block row>
        <TagComponent tagName="Epic"/>
        <TagComponent tagName="Fantasy"/>
        <TagComponent tagName="Drama"/>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical:5,
    backgroundColor: "#201921",
  },
});
