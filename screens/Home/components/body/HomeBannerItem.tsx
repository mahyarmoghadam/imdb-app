import { Layout } from "@constants";
import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image, Animated } from "react-native";

const { width } = Layout.window;
const { isIOS } = Layout;

const SPACING = 5;
const ITEM_SIZE = isIOS ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export interface HomeBannerItemProps {
  item: any;
  index: number;
  scrollX: Animated.Value;
}

export default function HomeBannerItem({
  item,
  index,
  scrollX,
}: HomeBannerItemProps) {
  const theme = useTheme();

  if (!item.image) {
    return <Block noflex style={{ width: EMPTY_ITEM_SIZE }} />;
  }

  const inputRange = [
    (index - 2) * ITEM_SIZE,
    (index - 1) * ITEM_SIZE,
    index * ITEM_SIZE,
  ];

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [.5, 1, .5],
    extrapolate: "clamp",
  });

  return (
    <Block noflex width={ITEM_SIZE} paddingVertical={20}>
      <Animated.View
        style={{
          marginHorizontal: SPACING,
          padding: SPACING * 1.2,
          alignItems: "center",
          opacity: opacity,
          backgroundColor: theme.box,
          borderRadius: 5,
        }}
      >
        <Image source={item.image} style={styles.imageContainer} />
        <Text
          size={24}
          weight={"600"}
          color={theme.textColor}
          marginBottom={10}
          numberOfLines={1}
        >
          {item.movieName}
        </Text>
      </Animated.View>
    </Block>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: ITEM_SIZE * 0.8,
    resizeMode: "stretch",
    borderRadius: 5,
    margin: 0,
    marginBottom: 10,
  },
});
