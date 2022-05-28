import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import ProfileHeaderComponent from "./components/ProfileHeader";

export default function ProfileScreen() {
  return (
    <Block scroll color='#140f14'>
      <ProfileHeaderComponent />
    </Block>
  );
}

const styles = StyleSheet.create({

});
