import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";
import Colors from "../../../../models/constants/Colors";
import { fakeGenres } from "../../../../models/movies/fake-movie";

export default function GenresListComponent() {
  const renderContent = ({ item }: any) => {
    return (
      <Block style={styles.container}>
        <Block>
          <Image style={styles.imageContainer} source={item.image} />
        </Block>
        <Block row space="between">
          <Text style={styles.movieNameText} color={Colors.secondaryTextColor}>
            {item.name}
          </Text>
        </Block>
      </Block>
    );
  };

  return (
    <FlatList
      data={fakeGenres}
      renderItem={(item) => renderContent(item)}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingRight: 20,
  },

  imageContainer: {
    width: 175,
    height: 125,
    borderRadius: 15,
  },

  movieNameText: {
    fontWeight: "800",
    paddingTop: 10,
  },

  releaseYearText: {
    fontWeight: "600",
  },
});
