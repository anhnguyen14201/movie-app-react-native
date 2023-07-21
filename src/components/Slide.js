import { View, Text, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import MovieCard from "./cards/MovieCard";
import { useNavigation } from "@react-navigation/native";
import tmdbApi, { movieType } from "../api/tmdbApi";

var { width, height } = Dimensions.get("window");

export default function Slide({ categories }) {
  const navigation = useNavigation();
  const [slide, setSlide] = useState([]);
  const handleClick = (item) => {
    navigation.navigate("Detail", { item, categories });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const params = { page: 1 };
    try {
      const res = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });
      setSlide(res.results.slice(2, 8));
    } catch {
      console.log("error");
    }
  };

  return (
    <View className="mb-8">
      <Carousel
        data={slide}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}
