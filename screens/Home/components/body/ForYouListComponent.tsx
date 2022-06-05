import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  fakeForYou,
  fakeGenres,
  fakeMovieList,
} from "../../../../models/movies/fake-movie";

export default function ForYouListComponent() {
  const theme = useTheme();

  const renderContent = ({ item }: any) => {
    return (
      <Block shadow paddingRight={20}>
        <Block>
          <Image
            resizeMode="stretch"
            style={styles.imageContainer}
            source={item.image}
          />
        </Block>
        <Block row space="between">
          <Text weight="800" paddingTop={10} color={theme.secondaryTextColor}>
            {item.name}
          </Text>
        </Block>
      </Block>
    );
  };

  return (
    <FlatList
      style={styles.listContainer}
      data={fakeForYou}
      numColumns={1}
      renderItem={(item) => renderContent(item)}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 5,
  },

  imageContainer: {
    width: 365,
    height: 300,
    borderRadius: 15,
  },
});
