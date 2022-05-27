import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { fakeCast } from "../../../../models/movies/fake-movie";

export default function CastAndCrewListComponent() {
  const renderContent = ({ item }: any) => {
    return (
      <Block style={styles.container}>
        <Block>
          <Image style={styles.imageContainer} source={item.image} />
        </Block>
      </Block>
    );
  };

  return (
    <FlatList
      data={fakeCast}
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
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  movieNameText: {
    fontWeight: "800",
    paddingTop: 10,
  },

  releaseYearText: {
    fontWeight: "600",
  },
});