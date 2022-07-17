import React, { useEffect } from "react";
import { Block } from "expo-ui-kit";
import { WidgetTitle } from "@components";
import { FlatList } from "native-base";
import { MovieItem } from "@home-components";
import { useMovieList, usePopular } from "@hooks";

export default function HomePopular() {
  const { data, isFetched } = usePopular();
  const {data:ss } = useMovieList(440);

  useEffect(() => {
    console.log(data?.data?.results[0])
  }, [data])
  
  return (
    <Block>
      <WidgetTitle title="Popular" />
      <FlatList
        data={data?.data?.results}
        paddingLeft={15}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <MovieItem item={item} />}
      />
    </Block>
  );
}
