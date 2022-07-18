
import { useTheme } from "@hooks";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Block } from "expo-ui-kit";
import { useMovieDetail } from "@hooks";
import { ScrollView } from "native-base";
import React, { useEffect } from "react";
import { RootStackParamList } from "../../../types";
import MovieBackgroundImageComponent from "./components/MovieBackgroundImageComponent";
import MovieDetailComponent from "./components/MovieDetailComponent";

export default function MovieDetailScreen() {
  const theme = useTheme();

  const { params: { movieId } } = useRoute<RouteProp<RootStackParamList, "MovieDetail">>();
  const { data, isFetched } = useMovieDetail(movieId);

  return (
    <>
      {(isFetched && data?.data) && <Block color={theme.background} >
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <MovieBackgroundImageComponent data={data?.data} />

          <MovieDetailComponent data={data?.data} />
        </ScrollView>
      </Block>
      }

    </>
  );
}