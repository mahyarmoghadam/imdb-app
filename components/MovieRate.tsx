import React from "react";
import { Block, Text } from "expo-ui-kit";
import { useTheme } from "@hooks";
import { SIZES } from "@constants";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export interface MovieRateProps {
  rate: number;
}
export default function MovieRate({ rate }: MovieRateProps) {
  const theme = useTheme();
  return (
    <Block noflex style={styles.rating}>
      <Text style={styles.ratingNumber}>{rate}</Text>
      {[1, 2, 3, 4, 5].map((type, index) => {
        return <AntDesign key={index} name="star" size={12} color="tomato" />;
      })}
    </Block>
  );
}

const styles = StyleSheet.create({
  ratingNumber: { marginRight: 4, fontFamily: "Menlo", fontSize: 14 },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
  },
});
