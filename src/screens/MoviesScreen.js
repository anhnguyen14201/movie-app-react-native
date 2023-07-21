import { View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/header/Header";
import Slide from "../components/Slide";
import MovieList from "../components/cards/MovieList";
import { category, movieType } from "../api/tmdbApi";

export default function MoviesScreen() {
  return (
    <View className="flex-1 bg-background">
      <Header />

      <ScrollView>
        <Slide />

        {/* Upcoming movies row */}
        <MovieList
          title="Movies Upcoming"
          categories={category.movie}
          types={movieType.upcoming}
        />

        {/* Trending movies row */}
        <MovieList
          title="Movies Popular"
          categories={category.movie}
          types={movieType.popular}
        />

        {/* Top Rate movies row */}
        <MovieList
          title="Top Rated Movies"
          categories={category.movie}
          types={movieType.top_rated}
        />
      </ScrollView>
    </View>
  );
}
