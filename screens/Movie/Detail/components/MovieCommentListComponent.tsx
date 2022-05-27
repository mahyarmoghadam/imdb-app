import { AntDesign } from "@expo/vector-icons";
import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";
import Colors from "../../../../models/constants/Colors";
import { fakeForYou } from "../../../../models/movies/fake-movie";

export default function MovieCommentListComponent() {
  const renderContent = ({ item }: any) => {
    return (
      <Block style={styles.container}>
        <Block row paddingHorizontal={15}>
          <Image
            style={styles.imageContainer}
            source={{
              uri: "https://i.picsum.photos/id/984/200/300.jpg?hmac=mLBN3lSvSl08Vh8Kw96TLY7v239gr1idtxVXvYFDkSc",
            }}
          />

          <Block paddingHorizontal={15}>
            <Text weight={'600'} color={Colors.secondaryTextColor}>Emran Jadidi</Text>
            <Text size={12} color={Colors.basicTextColor}>
              June 28, 2021{" "}
            </Text>
          </Block>

          <Block row style={styles.rating}>
            <Text color={Colors.secondaryTextColor}>
              4.0
              <AntDesign name="star" size={18} color="#dbb28c" />
            </Text>
          </Block>
        </Block>

        <Block paddingTop={5} paddingLeft={15}>
          <Text weight={'600'} size={12} color={Colors.secondaryTextColor}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sed
            eum explicabo nulla, aliquid quo cum voluptate deserunt facilis modi
            dolor obcaecati assumenda quas asperiores soluta eligendi esse amet
            ducimus!
          </Text>
        </Block>
      </Block>
    );
  };

  return (
    <FlatList
      style={styles.listContainer}
      data={[1,2,3,4,5,6]}
      numColumns={1}
      renderItem={(item) => renderContent(item)}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    backgroundColor: "#403347",
    borderRadius: 10,
    paddingVertical: 20,
    paddingRight: 20,
    shadowColor: Colors.basicTextColor,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    marginRight:10
  },

  listContainer: {
    paddingHorizontal: 5,
    paddingVertical: 15,
    
  },

  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  rating: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
});
