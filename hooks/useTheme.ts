import { Theme } from "@constants";
import Colors from "../models/constants/Colors";
import useColorScheme from "./useColorScheme";

export default function useTheme(): Theme {
  const colorScheme = useColorScheme();
  return Colors[colorScheme];
}
