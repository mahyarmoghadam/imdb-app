import React, { useEffect, useRef, useState } from "react";
import { Block } from "expo-ui-kit";
import { WidgetTitle } from "@components";
import { FlatList } from "native-base";
import { banners, fakeGenres } from "@fake-datas";
import { HomeBannerItem } from "@home-components";
import { Animated, Platform } from "react-native";
import { Layout } from "@constants";

const { width } = Layout.window;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;

export default function HomeBannerComponent() {
  const [movies, setMovies] = useState<any>();
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setMovies([{ id: "empty-left" }, ...fakeGenres, { id: "empty-right" }]);
  }, []);

  return (
    <Block>
      <WidgetTitle title="For You" />

      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        renderToHardwareTextureAndroid
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => (
          <HomeBannerItem item={item} index={index} scrollX={scrollX} />
        )}
      />
    </Block>
  );
}
