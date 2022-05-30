import { Block } from "expo-ui-kit";
import React from "react";
import ProfileBodyComponent from "./components/ProfileBody/ProfileBodyComponent";
import ProfileHeaderComponent from "./components/ProfileHeader/ProfileHeaderComponent";

export default function ProfileScreen() {
  return (
    <Block scroll color="#140f14">
      <ProfileHeaderComponent />

      <ProfileBodyComponent />
    </Block>
  );
}

