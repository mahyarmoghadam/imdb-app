import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import StatusBarContextProvider from "./hooks/useStatusBarContextProvider";
import Navigation from "./navigation";

const queryClient = new QueryClient();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <StatusBarContextProvider>
            <NativeBaseProvider>
              <Navigation colorScheme={colorScheme} />
            </NativeBaseProvider>
          </StatusBarContextProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    );
  }
}
