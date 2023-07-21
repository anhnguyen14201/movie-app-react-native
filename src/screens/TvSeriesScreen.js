import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/header/Header";
import Slide from "../components/Slide";
import MovieList from "../components/cards/MovieList";
import { category, tvType } from "../api/tmdbApi";

export default function TvSeriesScreen() {
  return (
    <View className="flex-1 bg-background">
      <Header categories={category.tv} />

      <ScrollView>
        <Slide categories={category.tv} />

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

        {/* On the Air TV show row */}
        <MovieList
          title="On The Air"
          categories={category.tv}
          types={tvType.on_the_air}
        />
      </ScrollView>
    </View>
  );
}
