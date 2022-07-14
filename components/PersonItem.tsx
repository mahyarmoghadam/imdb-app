import { PeopleInfo, PopularPeople } from "@models";
import { getImageUrl } from "../config";
import { Block } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image } from "react-native";

export interface PersonItemProps {
  item: PopularPeople;
  isCircle: boolean;
}

export default function PersonItem({ item, isCircle }: PersonItemProps) {
  return (
    <Block style={styles.container}>
      <Block>
        <Image
          style={styles.imageContainer}
          borderRadius={isCircle ? 50 : 10}
          source={{uri: getImageUrl(item.profile_path)}}
        />
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingRight: 20,
  },

  imageContainer: {
    width: 100,
    height: 100,
  },
});
