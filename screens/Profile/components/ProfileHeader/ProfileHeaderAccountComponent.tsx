import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image } from "react-native";

export default function ProfileHeaderAccountComponent() {
  const theme = useTheme();

  return (
    <Block paddingTop={30} row space="between">
      <Block middle padding={10} row>
        <Image
          style={styles.imageContainer}
          source={{
            uri: "https://i.picsum.photos/id/984/200/300.jpg?hmac=mLBN3lSvSl08Vh8Kw96TLY7v239gr1idtxVXvYFDkSc",
          }}
        />

        <Text
          size={15}
          weight={"700"}
          paddingHorizontal={15}
          paddingVertical={8}
          color={theme.secondaryTextColor}
        >
          Emran Jadidi
        </Text>
      </Block>

      <Block noflex paddingVertical={10} paddingHorizontal={20}>
        <AntDesign name="setting" color="#998396" size={25} />
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});
