import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import {  StyleSheet, Image } from "react-native";
import { fakeCast, MovieCast } from "@models";
import { useMovieCredits } from "@hooks";
import { getImageUrl } from "../../../../config";
import { FlatList } from "native-base";

export interface MovieCastProps {
  movieId: number
}

export default function MovieCastComponent({ movieId }: MovieCastProps) {
  const theme = useTheme();
  const { data, isFetched } = useMovieCredits(movieId);

  const renderContent = (item: MovieCast) => {
    return (
      <Block paddingHorizontal={7} paddingVertical={20} color={theme.background}>
        <Block >
          <Image resizeMode="cover" style={styles.imageContainer} source={{ uri: getImageUrl(item.profile_path) }} />
          <Text size={12} weight={"600"} paddingVertical={10} color={theme.textColor}>
            {item.name}
          </Text>
        </Block>
      </Block>
    );
  };

  return (
    // TODO:{@EmranJadidi76} Use Skeleton
    <>
      {(isFetched && data?.data) && <Block paddingVertical={20} color={theme.background} >
        <Block row space="between" paddingHorizontal={15}>
          <Text size={18} color={theme.secondaryTextColor}>
            Cast
          </Text>
        </Block>

        <Block shadow={true}>
          <FlatList
            data={data?.data.cast}
            renderItem={({ item }) => renderContent(item)}
            showsHorizontalScrollIndicator={false}
            horizontal
            paddingLeft={15}
          />
        </Block>
      </Block>}
    </>
  );
}

const styles = StyleSheet.create({

  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 4,

  },
});
