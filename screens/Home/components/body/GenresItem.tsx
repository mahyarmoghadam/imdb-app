import React from "react";
import { fakeGenres } from "@fake-datas";
import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import { StyleSheet, Image } from "react-native";

export interface GenresItemProps {
  item: any;
}

export default function GenresItem({ item }: GenresItemProps) {
  const theme = useTheme();

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
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 175,
    height: 125,
    borderRadius: 15,
  },
});
