import React from "react";
import {
  StackHomeNavigator,
  StackMovieNavigator,
  StackSearchNavigator,
  StackTVNavigator,
} from "./StackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchScreen from "../screens/SearchScreen";
import TvSeriesScreen from "../screens/TvSeriesScreen";
import MoviesScreen from "../screens/MoviesScreen";

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.activeColor,
        tabBarInactiveTintColor: theme.text,
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: {
          padding: 10,
          height: 70,
          backgroundColor: theme.background,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === "Movie") {
            iconName = focused ? "film" : "film-outline";
          } else if (rn === "TV") {
            iconName = focused ? "tv" : "tv-outline";
          } else if (rn === "Search") {
            iconName = focused ? "search" : "search-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={StackHomeNavigator}
        options={{ headerShown: false }}
        initialParams={{ itemId: "movie" }}
      />
      <Tab.Screen
        name="Movie"
        component={StackMovieNavigator}
        options={{ headerShown: false }}
        initialParams={{ itemId: "movie" }}
      />

      <Tab.Screen
        name="TV"
        component={StackTVNavigator}
        options={{ headerShown: false }}
        initialParams={{ itemId: "tv" }}
      />

      <Tab.Screen
        name="Search"
        component={StackSearchNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
