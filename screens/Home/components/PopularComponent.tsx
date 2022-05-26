import { FontAwesome } from "@expo/vector-icons";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import Colors from "../../../models/constants/Colors";

export default function PopularComponent() {
  return (
      <Block marginTop={25} style={styles.container} row space="between">
          <Text size={18}  color={Colors.basicTextColor}>Popular </Text>
          <Text size={16} color={Colors.basicLinkColor}>See all</Text>
      </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20
  },

 
});
