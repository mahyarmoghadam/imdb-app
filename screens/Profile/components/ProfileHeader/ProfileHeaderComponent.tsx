import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
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


