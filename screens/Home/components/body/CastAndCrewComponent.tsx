import React from "react";
import { Block, Text } from "expo-ui-kit";
import { useTheme } from "@hooks";
import { CastAndCrewListComponent } from "@home-components";

export default function CastAndCrewComponent() {
  const theme = useTheme();

  return (
    <Block>
      <Block row space="between">
        <Text size={18} color={theme.textColor}>
          Cast & Crew
        </Text>
        <Text size={16} color={theme.linkColor}>
          See all
        </Text>
      </Block>

      <CastAndCrewListComponent />
    </Block>
  );
}
