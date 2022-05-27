import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";
import Colors from "../../../../models/constants/Colors";
import { fakeForYou, fakeGenres, fakeMovieList } from "../../../../models/movies/fake-movie";

export default function ForYouListComponent() {
  const renderContent = ({ item }: any) => {
    return (
      <Block style={styles.container}>
        <Block>
          <Image resizeMode='stretch' style={styles.imageContainer} source={item.image} />
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
  container: {
    paddingVertical: 20,
    paddingRight: 20,
    shadowColor: Colors.basicTextColor,
    shadowOpacity:0.4,
    shadowOffset:{
        width:0,
        height:0
    }
  },

  listContainer:{
    paddingHorizontal:5
  },

  imageContainer: {
    width: 365,
    height: 300,
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
