import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image } from "react-native";
import SearchComponent from "./SearchComponent";

export default function HeaderComponent() {

  
  return (
    <Block>
      <Block marginTop={20} style={styles.container} row>
        <Block>
          <Text size={24} weight={"600"} color='#aea8af'>
            Hi, Emran
          </Text>
        </Block>
        <Block style={styles.userPhotoContainer}>
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://i.picsum.photos/id/984/200/300.jpg?hmac=mLBN3lSvSl08Vh8Kw96TLY7v239gr1idtxVXvYFDkSc",
            }}
          />
        </Block>
      </Block>

      <SearchComponent />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  userPhotoContainer: {
    alignItems: "flex-end",
  },

  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
