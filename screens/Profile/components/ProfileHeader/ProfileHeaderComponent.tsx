import { AntDesign } from "@expo/vector-icons";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image } from "react-native";
import Colors from "../../../../models/constants/Colors";
import ProfileHeaderAccountComponent from "./ProfileHeaderAccountComponent";
import ProfileHeaderActivityComponent from "./ProfileHeaderActivityComponent";

export default function ProfileHeaderComponent() {
  return (
    <Block color="#201921"> 
      <ProfileHeaderAccountComponent />

      <ProfileHeaderActivityComponent />
    </Block>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});
