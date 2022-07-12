import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image } from "react-native";
import SearchComponent from "./SearchComponent";

export default function HeaderComponent() {
  const theme = useTheme();

  return (
    <Block color={theme.box}>
      <Block  style={styles.container} row> 
       <Block>
          <Text size={24} weight={"600"} color={theme.textColor}>
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

      {/* <SearchComponent /> */}
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    
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
