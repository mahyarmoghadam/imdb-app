import { AntDesign } from "@expo/vector-icons";
import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";
import Colors from "../../../../models/constants/Colors";
import { fakeMovieList } from "../../../../models/movies/fake-movie";

export default function LegendaryMovieListComponent() {
  const renderContent = ({ item }: any) => {
    return (
      <Block style={styles.container}>
        <Block>
          <Image style={styles.imageContainer} source={item.image} />
        </Block>
        <Block row space="between">
          <Text style={styles.movieNameText} color={Colors.secondaryTextColor}>
            {item.movieName}
          </Text>
          <Text style={styles.movieNameText} color={Colors.secondaryTextColor}>
            {item.rate}
            <AntDesign name="star" size={18} color="#dbb28c" />
          </Text>
        </Block>

        <Block>
          <Text style={styles.releaseYearText} color={Colors.basicTextColor}>
            {item.releaseYear}
          </Text>
        </Block>
      </Block>
    );
  };

  return (
    <FlatList
      data={fakeMovieList}
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
    height: 200,
    borderRadius: 20,
  },

  movieNameText: {
    fontWeight: "800",
    paddingTop: 10,
  },

  releaseYearText: {
    fontWeight: '600',
  },
});
