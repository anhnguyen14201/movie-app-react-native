import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import ActorScreen from "../screens/ActorScreen";
import ListFilm from "../screens/ListFilm";
import MoviesScreen from "../screens/MoviesScreen";
import TvSeriesScreen from "../screens/TvSeriesScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

function StackHomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Actor"
        component={ActorScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="List"
        component={ListFilm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function StackMovieNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movie"
        component={MoviesScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Actor"
        component={ActorScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="List"
        component={ListFilm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function StackTVNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TV"
        component={TvSeriesScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Actor"
        component={ActorScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="List"
        component={ListFilm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function StackSearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Actor"
        component={ActorScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="List"
        component={ListFilm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export {
  StackHomeNavigator,
  StackMovieNavigator,
  StackTVNavigator,
  StackSearchNavigator,
};
