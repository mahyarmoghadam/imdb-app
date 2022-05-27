import { Block, Text } from "expo-ui-kit";
import React from "react";
import { FlatList, StyleSheet, Image } from "react-native";
import Colors from "../../../../models/constants/Colors";
import { fakeCast } from "../../../../models/movies/fake-movie";

export default function MovieCastComponent() {
  const renderContent = ({ item }: any) => {
    return (
      <Block  style={styles.container}>
        <Block>
          <Image style={styles.imageContainer} source={item.image} />
          <Text size={12} weight={'600'} paddingVertical={10} color={Colors.basicTextColor}>{item.name}</Text>
        </Block>

      </Block>
    );
  };

  return (
    <Block style={styles.container}>
      <Block row space="between">
        <Text size={18} color={Colors.secondaryTextColor}>
          Cast
        </Text>
      </Block>

      <FlatList
        data={fakeCast}
        renderItem={(item) => renderContent(item)}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 20,
    backgroundColor: "#201921",
    marginBottom: 100,
  },

  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
