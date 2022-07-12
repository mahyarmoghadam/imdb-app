import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Block, Text } from "expo-ui-kit";
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "@hooks";
import { RootStackParamList } from "types";

export interface MovieItemProps {
  item: any;
}

export default function MovieItem({ item }: MovieItemProps) {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Main">>();

  const theme = useTheme();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("MovieDetail")}
    >
      <Block paddingLeft={15} style={styles.boxContainer} paddingVertical={20} paddingRight={20}>
        <Block>
          <Image style={styles.imageContainer} source={item.image} />
        </Block>
        <Block row space="between">
          <Text weight={"800"} paddingTop={10} color={theme.secondaryTextColor}>
            {item.movieName}
          </Text>
          <Text weight={"800"} paddingTop={10} color={theme.secondaryTextColor}>
            {item.rate}
            <AntDesign name="star" size={18} color={theme.ratingColor} />
          </Text>
        </Block>

        <Block>
          <Text weight={"600"} color={theme.textColor}>
            {item.releaseYear}
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
    borderRadius: 5,
  },
  boxContainer: {
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowOffset: {
      width: 0,
      height: 5
    }
  }
});
