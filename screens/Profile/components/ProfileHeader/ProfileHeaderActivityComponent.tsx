import { Block, Text } from "expo-ui-kit";
import { FlatList } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";
import Colors from "../../../../models/constants/Colors";
import { profileActivity } from "../../../../models/movies/fake-movie";

export default function ProfileHeaderActivityComponent() {
  const renderContent = ({ item }: any) => {
    return (
      <Block radius={10} marginHorizontal={5} color="#2e2531">
        <Block width={150} paddingHorizontal={20} paddingTop={10}>
          <Image style={styles.imageContainer} source={item.image} />
        </Block>
        <Block paddingHorizontal={10}>
          <Text weight={'700'} paddingTop={5} color={Colors.secondaryTextColor}>
            {item.text}
          </Text>
          <Text paddingBottom={10} size={13} color={Colors.basicTextColor}>
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
    borderColor: Colors.basicTextColor,
    borderWidth: 0.6,
  },
});
