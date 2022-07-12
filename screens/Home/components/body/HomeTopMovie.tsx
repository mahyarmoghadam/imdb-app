import React from "react";
import { Block } from "expo-ui-kit";
import { WidgetTitle } from "@components";
import { fakeMovieList } from "@models";
import { MovieItem } from "@home-components";
import { FlatList } from "native-base";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'types';
import { useTopRated } from "@hooks";

export default function HomeTopMovie() {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList>>();

  const { data, isFetched } = useTopRated();

  return (
    <Block>
      <WidgetTitle title="Top 10" onPress={() => navigation.navigate("Poster")} />
      <FlatList
        data={data?.data?.results}
        renderItem={({ item }) => <MovieItem item={item} />}
        horizontal
      />
    </Block>
  );
}
