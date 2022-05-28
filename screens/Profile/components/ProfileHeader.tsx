import { AntDesign } from "@expo/vector-icons";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image } from "react-native";
import Colors from "../../../models/constants/Colors";

export default function ProfileHeaderComponent() {
  return (
    <Block paddingVertical={30}>
      <Block row space="between">
        <AntDesign
          style={{ paddingHorizontal: 20 }}
          name="qrcode"
          size={28}
          color={"#998396"}
        />
        <Image
          style={styles.imageContainer}
          source={{
            uri: "https://i.picsum.photos/id/984/200/300.jpg?hmac=mLBN3lSvSl08Vh8Kw96TLY7v239gr1idtxVXvYFDkSc",
          }}
        />
        <Text paddingHorizontal={20} color={"#998396"} weight={"600"}>
          Edit
        </Text>
      </Block>
      <Text
        size={22}
        weight={"600"}
        paddingVertical={10}
        center
        color={Colors.secondaryTextColor}
      >
        Emran Jadidi
      </Text>
    </Block>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
