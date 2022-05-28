import { AntDesign } from "@expo/vector-icons";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image, TouchableWithoutFeedback, FlatList } from "react-native";
import Colors from "../../../../models/constants/Colors";
import { fakeMovieList } from "../../../../models/movies/fake-movie";

export default function ProfileWishListComponent() {
  const renderContent = ({ item }: any) => {
    return (
      <TouchableWithoutFeedback onPress={() => {}}>
        <Block  paddingVertical={20} paddingHorizontal={10}>
          <Block>
            <Image style={styles.imageContainer} source={item.image} />
          </Block>
          <Block row space="between">
            <Text
              weight={"800"}
              paddingTop={5}
              color={Colors.secondaryTextColor}
            >
              {item.movieName}
            </Text>
            <Text
              weight={"800"}
              paddingTop={5}
              color={Colors.secondaryTextColor}
            >
              {item.rate}
              <AntDesign name="star" size={18} color="#dbb28c" />
            </Text>
          </Block>

          <Block>
            <Text weight={"600"} color={Colors.basicTextColor}>
              {item.releaseYear}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Block marginTop={25} color="#201921">
      <Block row space="between" padding={10}>
        <Text size={18} weight={"700"} color={Colors.secondaryTextColor}>
          Wish List  <Text size={14} color={Colors.basicTextColor}>7</Text>
        </Text>
        <Text size={16} color={Colors.basicLinkColor}>
          See all
        </Text>
      </Block>
      
      <FlatList
        data={fakeMovieList}
        renderItem={(item) => renderContent(item)}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </Block>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 175,
    height: 175,
    borderRadius: 10,
  },

});
