import { useTheme } from "@hooks";
import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { profileActivity } from "@fake-datas";

export default function ProfileHeaderActivityComponent() {
  const theme = useTheme();
  const renderContent = ({ item }: any) => {

    return (
      <Block radius={10} marginHorizontal={5} color="#2e2531">
        <Block width={150} paddingHorizontal={20} paddingTop={10}>
          <Image style={styles.imageContainer} source={item.image} />
        </Block>
        <Block paddingHorizontal={10}>
          <Text weight={'700'} paddingTop={5} color={theme.secondaryTextColor}>
            {item.text}
          </Text>
          <Text paddingBottom={10} size={13} color={theme.textColor}>
            {item.activity}
          </Text>
        </Block>
      </Block>
    );
  };

  return (
    <Block paddingBottom={10}>
      <FlatList
        data={profileActivity}
        renderItem={(item) => renderContent(item)}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </Block>
  );
}

const styles = StyleSheet.create({

  imageContainer: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    borderColor: '#aea8af',
    borderWidth: 0.6,
  },
});
