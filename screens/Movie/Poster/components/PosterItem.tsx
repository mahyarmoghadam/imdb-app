import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image, Animated } from "react-native";
import { Layout } from "@constants";
import { MovieRate } from "@components";
import { MovieInfo } from "@models";
import { getImageUrl } from "../../../../config";

const { width } = Layout.window;
const { isIOS } = Layout;

const SPACING = 10;
const ITEM_SIZE = isIOS ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export interface PosterItemProps {
  item: MovieInfo;
  index: number;
  scrollX: Animated.Value;
}

export default function PosterItem({ item, index, scrollX }: PosterItemProps) {
  const theme = useTheme();

  if (!item.poster_path) {
    return <Block noflex style={{ width: EMPTY_ITEM_SIZE }} />;
  }

  const inputRange = [
    (index - 2) * ITEM_SIZE,
    (index - 1) * ITEM_SIZE,
    index * ITEM_SIZE,
  ];

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [100, 50, 100],
    extrapolate: "clamp",
  });

  return (
    <Block noflex width={ITEM_SIZE}>
      <Animated.View
        style={{
          marginHorizontal: SPACING,
          padding: SPACING * 1.2,
          alignItems: "center",
          transform: [{ translateY }],
          backgroundColor: theme.background,
          borderRadius: 24,
        }}
      >
        <Image source={{ uri: getImageUrl(item.poster_path) }} style={styles.posterImage} />
        <Text
          size={24}
          weight={"600"}
          color={theme.textColor}
          numberOfLines={1}
        >
          {item.title}
        </Text>

        <MovieRate rate={item.vote_average} />

        <Block noflex style={styles.genres}>
          <Block noflex style={styles.genre}>
            <Text style={styles.genreText}>Action</Text>
          </Block>
        </Block>
        <Text size={12} color={theme.textColor} numberOfLines={3}>
          {item.overview}
        </Text>
      </Animated.View>
    </Block>
  );
}

const styles = StyleSheet.create({
  posterImage: {
    width: "100%",
    height: ITEM_SIZE ,
    resizeMode: "stretch",
    borderRadius: 18,
    margin: 0,
    marginBottom: 10,
  },

  genres: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 4,
  },
  genre: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "#ccc",
    marginRight: 4,
    marginBottom: 4,
  },
  genreText: {
    fontSize: 9,
    opacity: 0.4,
  },

  ratingNumber: { marginRight: 4, fontFamily: "Menlo", fontSize: 14 },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
  },
});
