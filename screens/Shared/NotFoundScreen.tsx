import { Block, Text } from "expo-ui-kit";
import { TouchableOpacity } from "react-native";

import { RootStackScreenProps } from "../../types";

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<"NotFound">) {
  return (
    <Block>
      <Text>Not Found</Text>
    </Block>
  );
}
