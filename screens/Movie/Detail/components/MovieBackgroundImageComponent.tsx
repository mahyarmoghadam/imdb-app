import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Layout } from "@constants";
import { LinearGradient } from "expo-linear-gradient";
import { MovieDetail } from "@models";
import { getImageUrl } from "../../../../config";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../../../../types";
const _HEIGHT_IMAGE = Layout.window.height / 2.5;

export interface MovieBackgroundImageProps {
  data: MovieDetail
}

export default function MovieBackgroundImageComponent({ data }: MovieBackgroundImageProps) {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList,"MovieDetail">>();

  return (
    <Block noflex height={_HEIGHT_IMAGE}>
      <Block noflex style={styles.backIcon}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Ionicons size={30} color='#fff' name="ios-chevron-back-sharp" />
        </TouchableOpacity>
      </Block>
      <ImageBackground
        style={{ width: '100%', height: _HEIGHT_IMAGE + 20 }}
        resizeMode={'stretch'}
        source={{ uri: getImageUrl(data?.backdrop_path) }}>
        <LinearGradient
          colors={['transparent', '#fff']}
          style={{ height: '105%', width: '100%' }}>
        </LinearGradient>
      </ImageBackground>

      <Block style={styles.textContainer}>
        <Block row>
          <Image source={{ uri: getImageUrl(data.poster_path) }} resizeMode={'stretch'} style={styles.posterImage} />
          <Block paddingLeft={10} style={styles.movieTitle}>
            <Block noflex>
              <Text size={18} style={styles.movieNameText} color={theme.secondaryTextColor}>
                {data.title}
              </Text>
            </Block>
            <Block row noflex style={styles.movieTitle} marginTop={5} space={'between'}>
              <Block>
                <Text style={styles.releaseYearText} color={theme.textColor}>
                  {data?.release_date}
                </Text>
              </Block>

              <Text style={styles.releaseYearText} color={theme.textColor}>
                {data.vote_average}
                <AntDesign name="star" size={18} color={theme.rate} />
              </Text>
            </Block>
          </Block>
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
    top: _HEIGHT_IMAGE - 140,
    width: "100%",
  },

  movieNameText: {
    fontWeight: "600",
    paddingTop: 10,
  },

  releaseYearText: {
    fontWeight: "600",
  },

  posterImage: {
    width: 100,
    height: 130,
    borderRadius: 7
  },

  movieTitle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  backIcon: {
    position: 'absolute',
    top: 25,
    left: 10,
    zIndex: 10
  }
});
