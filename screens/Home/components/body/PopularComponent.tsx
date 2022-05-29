import React from "react";
import { PopularListComponent } from "@home-components";
import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";

export default function PopularComponent() {
  const theme = useTheme();
  return (
    <Block marginTop={25} padding={20}>
      <Block row space="between">
        <Text size={18} color={theme.textColor}>
          Popular
        </Text>
        <Text size={16} color={theme.linkColor}>
          See all
        </Text>
      </Block>

      <PopularListComponent />
    </Block>
  );
}
