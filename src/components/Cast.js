import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tmdbApi from "../api/tmdbApi";

import apiConfig, { fallbackPersonImage } from "../api/apiConfig";

export default function Cast({ id, data }) {
  const navigation = useNavigation();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getCredits();
  }, [id]);

  const getCredits = async () => {
    try {
      const res = await tmdbApi.credits(data, id);
      setCasts(res.cast);
    } catch {
      console.log("Error");
    }
  };

  return (
    <View className="my-6 mx-3">
      <Text className="text-white mx-4 mb-5 text-xl">Actor</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {casts.map((person, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="mr-4 items-center"
              onPress={() => navigation.navigate("Actor", person)}
            >
              <View className="overflow-hidden rounded-full h-24 w-24 items-center border border-neutral-500">
                <Image
                  className="w-full h-full"
                  source={{
                    uri: person?.profile_path
                      ? apiConfig.w185Image(person?.profile_path)
                      : fallbackPersonImage,
                  }}
                />
              </View>

              <Text className="text-white text-xs mt-1">
                {person.character.length > 10
                  ? person.character.slice(0, 10) + "..."
                  : person.character}
              </Text>
              <Text className="text-neutral-400 text-xs mt-1">
                {person.original_name.length > 10
                  ? person.original_name.slice(0, 10) + "..."
                  : person.original_name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
