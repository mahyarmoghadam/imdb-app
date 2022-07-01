import { useTheme } from "@hooks";
import { Block } from "expo-ui-kit";
import React, { useEffect, useState } from "react";
import { StatusBar, Platform, Animated } from "react-native";
import { fakeMovieList } from "@models";
import { Layout } from "@constants";
import PosterBackDrop from "./components/PosterBackDrop";
import PosterItem from "./components/PosterItem";

const { width } = Layout.window;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;

export default function PosterScreen() {
  const theme = useTheme();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [movies, setMovies] = useState<any>();

  useEffect(() => {
    setMovies([{ id: "empty-left" }, ...fakeMovieList, { id: "empty-right" }]);
  }, []);

  return (
    <Block color={theme.background}>
      <PosterBackDrop data={movies} scrollX={scrollX} itemSize={ITEM_SIZE} />
      <StatusBar hidden />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        contentContainerStyle={{ alignItems: "center" }}
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
          <PosterItem item={item} index={index} scrollX={scrollX} />
        )}
      />
    </Block>
  );
}
