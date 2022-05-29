import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import { StyleSheet, Image } from "react-native";
import { useTheme } from "@hooks";
import { fakeMovieList } from "@fake-datas";

export default function LegendaryMovieListComponent() {
  const theme = useTheme();

  const renderContent = ({ item }: any) => {
    return (
      <Block padding={20} paddingRight={20}>
        <Block>
          <Image style={styles.imageContainer} source={item.image} />
        </Block>
        <Block row space="between">
          <Text weight="800" paddingTop={10} color={theme.secondaryTextColor}>
            {item.movieName}
          </Text>
          <Text weight="800" paddingTop={10} color={theme.secondaryTextColor}>
            {item.rate}
            <AntDesign name="star" size={18} color="#dbb28c" />
          </Text>
        </Block>

        <Block>
          <Text weight="800" color={theme.textColor}>
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
  imageContainer: {
    width: 175,
    height: 200,
    borderRadius: 20,
  },
});
