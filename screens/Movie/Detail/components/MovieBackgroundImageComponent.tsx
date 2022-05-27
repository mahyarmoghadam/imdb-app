import { AntDesign } from "@expo/vector-icons";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image } from "react-native";
import Colors from "../../../../models/constants/Colors";
import Layout from "../../../../models/constants/Layout";
const _HEIGHT_IMAGE = Layout.window.height / 1.5;

export default function MovieBackgroundImageComponent() {
  return (
    <Block style={styles.container}>
      <Image
        resizeMode="stretch"
        style={styles.imageContainer}
        source={{
          uri: "https://i.pinimg.com/736x/10/17/d6/1017d65e8ce5f87675b63e8667053e98.jpg",
        }}
      />

      <Block noflex style={styles.shadowContainer}></Block>

      <Block style={styles.textContainer}>
        <Block row space="between">
          <Text
            size={24}
            style={styles.movieNameText}
            color={Colors.secondaryTextColor}
          >
            Dune
          </Text>
          <Text marginTop={10} style={styles.movieNameText} color={Colors.secondaryTextColor}>
            8.7
            <AntDesign name="star" size={18} color="#dbb28c" />
          </Text>
        </Block>

        <Block marginTop={5}>
          <Text style={styles.releaseYearText} color={Colors.basicTextColor}>
            2021, Dennis Villeneuve
          </Text>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    height: _HEIGHT_IMAGE,
  },

  imageContainer: {
    width: "100%",
    height: _HEIGHT_IMAGE,
  },

  shadowContainer: {
    position: "absolute",
    height: 100,
    top: _HEIGHT_IMAGE - 80,
    backgroundColor: "#140f14",
    width: "100%",
    opacity: 0.4,
  },

  textContainer: {
    paddingHorizontal: 20,
    position: "absolute",
    top: _HEIGHT_IMAGE - 70,
    width: "100%",
  },

  movieNameText: {
    fontWeight: "600",
    paddingTop: 10,
  },

  releaseYearText: {
    fontWeight: "600",
  },
});
