import React from "react";
import { GenresListComponent } from "@home-components";
import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";

export default function GenresComponent() {
  const theme = useTheme();
  return (
    <Block>
      <Block marginBottom={20} row space="between">
        <Text size={18} color={theme.textColor}>
          Genres
        </Text>
        <Text size={16} color={theme.linkColor}>
          See all
        </Text>
      </Block>

      <GenresListComponent />
    </Block>
  );
}
