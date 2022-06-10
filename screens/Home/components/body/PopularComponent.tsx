import React from "react";
import { PopularListComponent } from "@home-components";
import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import HomeWidgetTitle from "./HomeWidgetTitle";

export default function PopularComponent() {
  const theme = useTheme();
  return (
    <Block>
      <HomeWidgetTitle title="Popular" />
      <PopularListComponent />
    </Block>
  );
}
