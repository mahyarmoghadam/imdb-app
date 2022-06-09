import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React, { useEffect } from "react";
import { StyleSheet, Image } from "react-native";

export interface HomeBannerItemProps {
  item: any;
}

export default function HomeBannerItem({ item }: HomeBannerItemProps) {
  return (
    <Block shadow paddingRight={20}>
      <Block>
        <Image
          resizeMode="stretch"
          style={styles.imageContainer}
          source={item.image}
        />
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 15,
    overflow: "hidden",
    width: 380,
    height: 200,
  },
});
