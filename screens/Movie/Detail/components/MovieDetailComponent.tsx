import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../../../models/constants/Colors";
import TagComponent from "../../../Shared/components/TagComponent";

export default function MovieDetailComponent() {
  return (
    <Block style={styles.container}>
      <Block row>
        <TagComponent tagName="Epic" />
        <TagComponent tagName="Fantasy" />
        <TagComponent tagName="Drama" />
      </Block>

      <Block paddingHorizontal={5} paddingVertical={15}>
        <Text weight={'600'} color={Colors.secondaryTextColor} size={12}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias
          quae obcaecati voluptas facilis quia sint explicabo. Illum, eum
          necessitatibus. Hic odit optio pariatur vero quia aspernatur vel
          magnam laudantium... <Text color={Colors.basicTextColor} size={12}>more</Text>
        </Text>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#201921",
  },
});
