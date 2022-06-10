import React from "react";
import { useTheme } from "@hooks";
import { Block } from "expo-ui-kit";
import { WidgetTitle } from "@components";
import { FlatList } from "native-base";
import { fakeGenres } from '@fake-datas';
import GenresItem from "./GenresItem";

export default function HomeGenres() {
  const theme = useTheme();
  return (
    <Block>
      <WidgetTitle title="Genres" />
      <FlatList
        data={fakeGenres}
        horizontal
        renderItem={({item}) => <GenresItem item={item} />}
      />
    </Block>
  );
}
