import { useTheme } from "@hooks";
import { Block } from "expo-ui-kit";
import { NativeBaseProvider } from "native-base";
import React, { useContext, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import StatusBarContextProvider, { StatusBarContext } from "./hooks/useStatusBarContextProvider";
import Navigation from "./navigation";

const queryClient = new QueryClient();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const theme = useTheme();



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <StatusBarContextProvider>
            <NativeBaseProvider>
              <Block noflex height={20} color={theme.background}></Block>
              <Navigation colorScheme={colorScheme} />
            </NativeBaseProvider>
          </StatusBarContextProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    );
  }
}
