import { Block, Text } from "expo-ui-kit";
import React from "react";
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import Colors from "../../../../models/constants/Colors";
import { fakeCast } from "../../../../models/movies/fake-movie";

export default function ProfileFavoritePeopleComponent() {
  const renderContent = ({ item }: any) => {
    return (
      <TouchableWithoutFeedback onPress={() => {}}>
        <Block paddingVertical={20} paddingHorizontal={10}>
          <Block>
            <Image style={styles.imageContainer} source={item.image} />
          </Block>
          <Block row space="between">
            <Text
              size={12}
              weight={"700"}
              paddingTop={5}
              color={Colors.secondaryTextColor}
            >
              {item.name}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Block marginTop={25} color="#201921" marginBottom={125}>
      <Block row space="between" padding={10}>
        <Text size={18} weight={"700"} color={Colors.secondaryTextColor}>
          Favorite people{" "}
          <Text size={14} color={Colors.basicTextColor}>
            28
          </Text>
        </Text>
        <Text size={16} color={Colors.basicLinkColor}>
          See all
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
    width: 125,
    height: 175,
    borderRadius: 8,
  },
});
