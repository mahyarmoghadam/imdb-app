import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React, { useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import StatusBarContextProvider, {
  StatusBarContext,
} from "./hooks/useStatusBarContextProvider";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBarContextProvider>
          <NativeBaseProvider>
            <Navigation colorScheme={colorScheme} />
          </NativeBaseProvider>
        </StatusBarContextProvider>
      </SafeAreaProvider>
    );
  }
}
