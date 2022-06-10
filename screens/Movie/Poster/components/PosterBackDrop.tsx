import { Block } from "expo-ui-kit";
import React from "react";
import { FlatList, StyleSheet, Image, Animated } from "react-native";
import { Layout } from "@constants";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Layout.window;
const BACKDROP_HEIGHT = height * 0.65;

export interface PosterBackDropProps {
  data: any[];
  scrollX: Animated.Value;
  itemSize: number;
}

export default function PosterBackDrop({
  data,
  scrollX,
  itemSize,
}: PosterBackDropProps) {
  return (
    <Block style={{ height: BACKDROP_HEIGHT, width, position: "absolute" }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id + "-backdrop"}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          if (!item.image) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * itemSize, (index - 1) * itemSize],
            outputRange: [0, width]
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
                source={item.image}
                style={{
                  width,
                  resizeMode: "stretch",
                  height: BACKDROP_HEIGHT,
                  position: "absolute",
                }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "white"]}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: "absolute",
          bottom: 0,
        }}
      />
    </Block>
  );
}

