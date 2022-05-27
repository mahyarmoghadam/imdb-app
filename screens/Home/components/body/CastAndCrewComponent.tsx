import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../../../models/constants/Colors";
import CastAndCrewListComponent from "./CastAndCrewListComponent";

export default function CastAndCrewComponent() {
  return (
    <Block style={styles.container}>
      <Block row space="between">
        <Text size={18} color={Colors.basicTextColor}>
          Cast & Crew
        </Text>
        <Text size={16} color={Colors.basicLinkColor}>
          See all
        </Text>
      </Block>

      <CastAndCrewListComponent />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 70,
  },
});
