import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet } from "react-native";
import PopularComponent from "./PopularComponent";
import GenresComponent from "./GenresComponent";

export default function BodyComponent() {
  return (
    <Block>
      <PopularComponent />

      <GenresComponent />
    </Block>
  );
}

const styles = StyleSheet.create({});
