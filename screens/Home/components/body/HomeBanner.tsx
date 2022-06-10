import React from "react";
import { Block } from "expo-ui-kit";
import { WidgetTitle } from "@components";
import { FlatList } from "native-base";
import { banners } from "@fake-datas";
import { HomeBannerItem } from "@home-components";

export default function HomeBannerComponent() {
  return (
    <Block>
      <WidgetTitle title="For You" />

      <FlatList
        data={banners}
        numColumns={1}
        style={{ flex: 1 }}
        renderItem={({item}) => <HomeBannerItem item={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </Block>
  );
}
