import React from "react";
import { Block, Text } from "expo-ui-kit";
import { useTheme } from "@hooks";
import { Layout } from "@constants";
import { ForYouListComponent } from "@home-components";

export default function ForYouComponent() {
  const theme = useTheme();

  return (
    <Block padding={20} height={Layout.window.height / 1.9}>
      <Block row space="between">
        <Text size={18} color={theme.textColor}>
          For You
        </Text>
      </Block>

      <ForYouListComponent />
    </Block>
  );
}
