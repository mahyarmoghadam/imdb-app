import { Block, Text } from "expo-ui-kit";
import { fakeCast } from "@fake-datas";
import { FlatList } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";

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
});
