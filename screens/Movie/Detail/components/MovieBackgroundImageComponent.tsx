import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Layout } from "@constants";
import { LinearGradient } from "expo-linear-gradient";
const _HEIGHT_IMAGE = Layout.window.height / 1.5;

export default function MovieBackgroundImageComponent() {
  const theme = useTheme();

  return (
    <Block height={_HEIGHT_IMAGE -5}>
      <ImageBackground
        style={{ width: '100%', height: _HEIGHT_IMAGE }}
        resizeMode={'cover'}
        source={{ uri: "https://i.pinimg.com/736x/10/17/d6/1017d65e8ce5f87675b63e8667053e98.jpg" }}>
        <LinearGradient
          colors={['transparent', '#fff']}
          style={{ height: '100%', width: '100%' }}>
        </LinearGradient>
      </ImageBackground>

      <Block style={styles.textContainer}>
        <Block row space="between">
          <Text
            size={24}
            style={styles.movieNameText}
            color={theme.secondaryTextColor}
          >
            Dune
          </Text>
          <Text
            marginTop={10}
            style={styles.movieNameText}
            color={theme.secondaryTextColor}
          >
            8.7
            <AntDesign name="star" size={18} color="#dbb28c" />
          </Text>
        </Block>

        <Block marginTop={5}>
          <Text style={styles.releaseYearText} color={theme.textColor}>
            2021, Dennis Villeneuve
          </Text>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
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
    top: _HEIGHT_IMAGE - 100,
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
