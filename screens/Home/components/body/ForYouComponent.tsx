import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../../../models/constants/Colors";
import ForYouListComponent from "./ForYouListComponent";
import Layout from "../../../../models/constants/Layout";

export default function ForYouComponent() {
  return (
    <Block style={styles.container}>
      <Block row space="between">
        <Text size={18} color={Colors.basicTextColor}>
          For You
        </Text>
       
      </Block>

      <ForYouListComponent />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height:Layout.window.height / 1.9
  },
});
