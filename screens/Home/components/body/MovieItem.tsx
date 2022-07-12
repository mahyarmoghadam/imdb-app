import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Block, Text } from "expo-ui-kit";
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "@hooks";
import { RootStackParamList } from "types";
import { MovieInfo } from "@models";
import { getImageUrl } from "../../../../config";

export interface MovieItemProps {
  item: MovieInfo;
}

export default function MovieItem({ item }: MovieItemProps) {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Main">>();

  const theme = useTheme();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("MovieDetail")}
    >
      <Block paddingVertical={20} paddingRight={20}>
        <Block>
          <Image style={styles.imageContainer} source={{ uri: getImageUrl(item.poster_path) }} />
        </Block>
        <Block row space="between">
          <Text weight={"800"} paddingTop={10} color={theme.secondaryTextColor}>
            {item.title}
          </Text>
          <Text weight={"800"} paddingTop={10} color={theme.secondaryTextColor}>
            {item.vote_average}
            <AntDesign name="star" size={18} color={theme.ratingColor} />
          </Text>
        </Block>

        <Block>
          <Text weight={"600"} color={theme.textColor}>
            {item.release_date}
          </Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 175,
    height: 200,
    borderRadius: 20,
  },
});
