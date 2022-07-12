import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { FlatList, StyleSheet, Image } from "react-native";
import { fakeCast } from "@models";

export default function MovieCastComponent() {
  const theme = useTheme();

  const renderContent = ({ item }: any) => {
    return (
      <Block paddingHorizontal={7} paddingVertical={20} color={theme.background}>
        <Block>
          <Image style={styles.imageContainer} source={item.image} />
          <Text
            size={12}
            weight={"600"}
            paddingVertical={10}
            color={theme.textColor}
          >
            {item.name}
          </Text>
        </Block>
      </Block>
    );
  };

  return (
    <Block paddingVertical={20} color={theme.background} >
      <Block row space="between" paddingHorizontal={15}>
        <Text size={18} color={theme.secondaryTextColor}>
          Cast
        </Text>
      </Block>
      
      <Block>
        <FlatList
          data={fakeCast}
          renderItem={(item) => renderContent(item)}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({

  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});
