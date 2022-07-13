import React from "react";
import { Block } from "expo-ui-kit";
import { fakeMovieList } from "@models";
import { WidgetTitle } from "@components";
import { FlatList } from "native-base";
import { MovieItem } from "@home-components";
import { usePopular } from "@hooks";

export default function HomePopular() {
  const { data, isFetched } = usePopular();
  
  return (
    <Block>
      <WidgetTitle title="Popular" />
      <FlatList
        data={data?.data?.results }
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <MovieItem item={item} />}
      />
    </Block>
  );
}
