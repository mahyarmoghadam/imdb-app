import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Colors from "../../../../models/constants/Colors";
import { fakeMovieList } from "../../../../models/movies/fake-movie";
import { RootStackParamList } from "../../../../types";

export default function PopularListComponent() {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, "Main">>();

  const renderContent = ({ item }: any) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate("MovieDetail")}>
        <Block style={styles.container}>
          <Block>
            <Image style={styles.imageContainer} source={item.image} />
          </Block>
          <Block row space="between">
            <Text
              style={styles.movieNameText}
              color={Colors.secondaryTextColor}
            >
              {item.movieName}
            </Text>
            <Text
              style={styles.movieNameText}
              color={Colors.secondaryTextColor}
            >
              {item.rate}
              <AntDesign name="star" size={18} color="#dbb28c" />
            </Text>
          </Block>

          <Block>
            <Text style={styles.releaseYearText} color={Colors.basicTextColor}>
              {item.releaseYear}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
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
  container: {
    paddingVertical: 20,
    paddingRight: 20,
  },

  imageContainer: {
    width: 175,
    height: 200,
    borderRadius: 20,
  },

  movieNameText: {
    fontWeight: "800",
    paddingTop: 10,
  },

  releaseYearText: {
    fontWeight: "600",
  },
});
