import { Block } from "expo-ui-kit";
import React from "react";
import { FlatList, Animated } from "react-native";
import { Layout } from "@constants";
import { LinearGradient } from "expo-linear-gradient";
import PosterBackDropContent from "./PosterBackDropContent";

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
          return (
            <PosterBackDropContent
              index={index}
              item={item}
              scrollX={scrollX}
              itemSize={itemSize}
            />
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
