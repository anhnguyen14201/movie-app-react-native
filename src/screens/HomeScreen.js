import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

import Slide from "../components/Slide";
import Header from "../components/header/Header";
import MovieList from "../components/cards/MovieList";
import tmdbApi, { movieType, category, tvType } from "../api/tmdbApi";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-background">
      <Header />

      <ScrollView>
        <Slide categories={category.movie} />

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

        {/* Popular TV show row */}
        <MovieList
          title="Popular TV Show"
          categories={category.tv}
          types={tvType.popular}
        />

        {/* Top Rate TV show row */}
        <MovieList
          title="Top Rated TV Show"
          categories={category.tv}
          types={tvType.top_rated}
        />
      </ScrollView>
    </View>
  );
}
