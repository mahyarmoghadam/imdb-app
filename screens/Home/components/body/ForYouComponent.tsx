import React from "react";
import { Block, Text } from "expo-ui-kit";
import { useTheme } from "@hooks";
import { Layout } from "@constants";
import { ForYouListComponent } from "@home-components";

export default function ForYouComponent() {
  const theme = useTheme();

  return (
    <Block padding={20} flex={1}>
      <Block marginVertical={20}>
        <Text size={18} color={theme.textColor}>
          For You
        </Text>
      </Block>

      <ForYouListComponent />
    </Block>
  );
}
