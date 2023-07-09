import { NavigationContainer, useTheme } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./navigators/RootNavigator";

export default function App() {
  const theme = useTheme();

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer theme={theme}>
          <RootNavigator />
        <StatusBar barStyle='light-content' />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}