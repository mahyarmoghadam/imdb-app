import React from "react";
import { Block } from "expo-ui-kit";
import { fakeMovieList } from "@models";
import { WidgetTitle } from "@components";
import { FlatList } from "native-base";
import { MovieItem } from "@home-components";

export default function HomePopular() {
  return (
    <Block>
      <WidgetTitle title="Popular" />
      <FlatList
        data={fakeMovieList}
        horizontal
        renderItem={({item}) => <MovieItem item={item} />}
      />
    </Block>
  );
}
