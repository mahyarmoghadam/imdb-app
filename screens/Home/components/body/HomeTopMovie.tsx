import React from "react";
import { Block } from "expo-ui-kit";
import { WidgetTitle } from "@components";
import { fakeMovieList } from "@fake-datas";
import { MovieItem } from "@home-components";
import { FlatList } from "native-base";

export default function HomeTopMovie() {
  return (
    <Block>
      <WidgetTitle title="Top 10" />
      <FlatList
        data={fakeMovieList}
        renderItem={({ item }) => <MovieItem item={item} />}
        horizontal
      />
    </Block>
  );
}
