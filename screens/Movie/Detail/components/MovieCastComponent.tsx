import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import React from "react";
import { FlatList, StyleSheet, Image } from "react-native";
import { fakeCast } from "@fake-datas";

export default function MovieCastComponent() {
  const theme = useTheme();

  const renderContent = ({ item }: any) => {
    return (
      <Block paddingRight={15} paddingVertical={20} color={'#201921'}>
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
    <Block paddingRight={15} paddingVertical={20} color={'#201921'} >
      <Block row space="between">
        <Text size={18} color={theme.secondaryTextColor}>
          Cast
        </Text>
      </Block>

      <FlatList
        data={fakeCast}
        renderItem={(item) => renderContent(item)}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </Block>
  );
}

const styles = StyleSheet.create({

  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
