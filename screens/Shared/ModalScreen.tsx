import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Block, Text } from "expo-ui-kit";

export default function ModalScreen() {
  return (
    <Block style={styles.container}>
      <Text>test</Text>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
