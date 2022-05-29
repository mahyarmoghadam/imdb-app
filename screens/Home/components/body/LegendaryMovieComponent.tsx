import React from "react";
import { PopularListComponent } from "@home-components";
import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import { StyleSheet } from "react-native";

export default function LegendaryMovieComponent() {
  const theme = useTheme();

  return (
    <Block style={styles.container}>
      <Block row space="between">
        <Text size={18} color={theme.textColor}>
          Legendary Movies
        </Text>
        <Text size={16} color={theme.linkColor}>
          See all
        </Text>
      </Block>

      <PopularListComponent />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
