import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { createContext, ReactNode, useState } from "react";

export interface StatusBarContextProviderProps {
  children: ReactNode;
}

export type StatusBarContextProps = {
  statusBarStyle: StatusBarStyle;
  setStatusBarStyle: (style: StatusBarStyle) => void;
};

export const StatusBarContext = createContext<StatusBarContextProps>({
  statusBarStyle: "dark",
  setStatusBarStyle: () => {},
});

export default function StatusBarContextProvider({
  children,
}: StatusBarContextProviderProps) {
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>("light");

  return (
    <StatusBarContext.Provider value={{ statusBarStyle, setStatusBarStyle }}>
      <StatusBar style={statusBarStyle ?? "dark"} />
      {children}
    </StatusBarContext.Provider>
  );
}
