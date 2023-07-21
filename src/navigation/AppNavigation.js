import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// Screens
import BottomTabNavigator from "./BottomTabNavigator";

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
