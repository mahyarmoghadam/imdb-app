import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import { useMovieVideos } from "@hooks";
import React from "react";
import { StyleSheet, Image } from "react-native";

export interface MovieTrailerProps {
  movieId: number;
}

export default function MovieTrailerComponent({ movieId }: MovieTrailerProps) {
  const theme = useTheme();
  const { data, isFetched } = useMovieVideos(movieId);

  return (
    <Block shadow={true} paddingHorizontal={15} style={styles.container} color={theme.background}>
      <Block row space="between">
        <Text size={18} color={theme.secondaryTextColor}>
          Trailer
        </Text>
      </Block>

      <Block row paddingVertical={15} >
        <Image
          style={styles.imageContainer}
          source={{
            uri: "https://i.guim.co.uk/img/media/2a9cadadbc853b032cd3ab28f1ca138c11c8431f/89_320_2323_1395/master/2323.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=cebd307d4bf78f6fc8c2c54ba828c4cb",
          }}
        />
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },

  imageContainer: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    paddingVertical: 10,
  },
});
