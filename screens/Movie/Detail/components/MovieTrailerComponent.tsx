import { Block, Text } from "expo-ui-kit";
import React from "react";
import { StyleSheet, Image } from "react-native";
import Colors from "../../../../models/constants/Colors";

export default function MovieTrailerComponent() {
  return (
    <Block style={styles.container}>
      <Block row space="between">
        <Text size={18} color={Colors.secondaryTextColor}>
          Trailer
        </Text>
      </Block>

      <Block row paddingVertical={15}>
        <Image
          style={styles.imageContainer}
          source={{
            uri: "https://i.guim.co.uk/img/media/2a9cadadbc853b032cd3ab28f1ca138c11c8431f/89_320_2323_1395/master/2323.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=cebd307d4bf78f6fc8c2c54ba828c4cb",
          }}
        />
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    backgroundColor: "#201921",
  },

  imageContainer: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    paddingVertical: 10,
  },
});
