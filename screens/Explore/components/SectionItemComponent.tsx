
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@hooks";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Block, Text } from "expo-ui-kit";
import navigation from "navigation";
import React from "react";
import { GestureResponderEvent, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import { RootStackParamList } from "types";

export interface SectionItemComponentProps {
  image: any,
  movieName: string,
  releaseYear: number,
  rate: number
}

export default function SectionItemComponent({ item, ...props }: SectionItemComponentProps | any) {

  const theme = useTheme();

  const navigation = useNavigation<NavigationProp<RootStackParamList, "Main">>();
console.log("item",item)
  return (

    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("MovieDetail")}
    >
      <Block
        style={{ ...props.style }}
        marginHorizontal={8}
      >
        <Image style={styles.imageContainer} source={item.image} />
        <Block row space="between">
          <Text weight={"800"} paddingTop={8} color={theme.secondaryTextColor}>
            {item.movieName}
          </Text>
          <Text weight={"800"} paddingTop={8} color={theme.secondaryTextColor}>
            {item.rate}
            <AntDesign name="star" size={16} color={theme.ratingColor} />
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
    minWidth: 150,
    height: 150,
    borderRadius: 20,
    resizeMode: 'contain',
  }
})
