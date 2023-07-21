import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import BackBottom from "../components/Bottom/BackBottom";
import MovieList from "../components/cards/MovieList";
import ViewMoreText from "react-native-view-more-text";
import { useRoute } from "@react-navigation/native";
import tmdbApi from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";

export default function ActorScreen() {
  const [actorMovies, setActorMovies] = useState([]);
  const [actor, setActor] = useState([]);
  const renderViewMore = (onPress) => {
    return (
      <Text onPress={onPress} className="text-activeColor">
        View more
      </Text>
    );
  };
  const renderViewLess = (onPress) => {
    return (
      <Text onPress={onPress} className="text-activeColor">
        View less
      </Text>
    );
  };

  const { params: item } = useRoute();
  useEffect(() => {
    getActorDetail(item.id);
    getActorMovies(item.id);
  }, [item]);

  const getActorDetail = async (id) => {
    const data = await tmdbApi.actors(id);
    data && setActor(data);
  };

  const getActorMovies = async (id) => {
    const data = await tmdbApi.actorMovie(id);
    data && setActorMovies(data);
  };

  return (
    <ScrollView
      className="bg-background flex-1"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Back Button */}
      <BackBottom />

      {/* Person Detail */}

      <View>
        <View className="flex-row justify-center">
          <View className="items-center rounded-full overflow-hidden h-72 w-72 border border-neutral-500 ">
            <Image
              source={{ uri: apiConfig.w342Image(actor?.profile_path) }}
              className="w-full h-full"
            />
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            {actor?.name}
          </Text>
          <Text className="text-base text-neutral-500 text-center">
            {actor?.place_of_birth}
          </Text>
        </View>

        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 text-sm">
              {actor?.gender === 1 ? "Female" : "Male"}
            </Text>
          </View>

          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 text-sm">{actor?.birthday}</Text>
          </View>

          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Known</Text>
            <Text className="text-neutral-300 text-sm">
              {actor?.known_for_department}
            </Text>
          </View>

          <View className="px-2 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300 text-sm">
              {actor.popularity?.toFixed(2)} %
            </Text>
          </View>
        </View>

        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <ViewMoreText
            numberOfLines={3}
            renderViewMore={renderViewMore}
            renderViewLess={renderViewLess}
          >
            <Text className="text-neutral-400 tracking-wide">
              {actor?.biography || "N/A"}
            </Text>
          </ViewMoreText>
        </View>

        {/* Movies */}
        <MovieList actorMovie={actorMovies} title={"Movie"} hideSeeAll={true} />
      </View>
    </ScrollView>
  );
}
