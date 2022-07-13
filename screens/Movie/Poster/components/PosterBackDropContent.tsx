import React from "react";
import { Image, Animated } from "react-native";
import { Layout } from "@constants";
import { MovieInfo } from "@models";
import { getImageUrl } from "../../../../config";

const { width, height } = Layout.window;
const BACKDROP_HEIGHT = height * 0.65;

export interface PosterBackDropContentProps {
  item: MovieInfo;
  index: number;
  scrollX: Animated.Value;
  itemSize: number;
}

export default function PosterBackDropContent({
  item,
  index,
  scrollX,
  itemSize,
}: PosterBackDropContentProps) {
  if (!item.poster_path) {
    return null;
  }
  const translateX = scrollX.interpolate({
    inputRange: [(index - 2) * itemSize, (index - 1) * itemSize],
    outputRange: [0, width],
  });
  return (
    <Animated.View
      removeClippedSubviews={false}
      style={{
        position: "absolute",
        width: translateX,
        height,
        overflow: "hidden",
      }}
    >
      <Image
        source={{ uri: getImageUrl(item.backdrop_path) }}
        style={{
          width,
          resizeMode: "stretch",
          height: BACKDROP_HEIGHT,
          position: "absolute",
        }}
      />
    </Animated.View>
  );
}
