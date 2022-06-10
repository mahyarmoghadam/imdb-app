import React from "react";
import { Block } from "expo-ui-kit";
import WidgetTitle from "./WidgetTitle";
import { FlatList } from "native-base";

export interface PersonHorizontalListProps {
  title: string;
  data: any[];
  renderItem: (item: any) => JSX.Element;
}

export default function PersonHorizontalList({
  title,
  data,
  renderItem,
}: PersonHorizontalListProps) {
  return (
    <Block>
      <WidgetTitle title={title} />
      <FlatList
        data={data}
        renderItem={(item) => renderItem(item)}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </Block>
  );
}
