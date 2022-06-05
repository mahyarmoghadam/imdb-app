import React from "react";
import { fakeGenres } from "@fake-datas";
import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import { StyleSheet, Image } from "react-native";

export default function GenresListComponent() {
  const theme = useTheme();
  const renderContent = ({ item }: any) => {
    return (
      <Block paddingRight={20}>
        <Block>
          <Image style={styles.imageContainer} source={item.image} />
        </Block>
        <Block row space="between">
          <Text weight="800" paddingRight={10} color={theme.secondaryTextColor}>
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
  imageContainer: {
    width: 175,
    height: 125,
    borderRadius: 15,
  },

  movieNameText: {
    fontWeight: "800",
    paddingTop: 10,
  },
});
