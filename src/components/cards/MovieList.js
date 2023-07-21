import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

var { width, height } = Dimensions.get("window");

export default function MovieList({
  title,
  categories,
  types,
  id,
  hideSeeAll,
}) {
  const navigation = useNavigation();

  const [item, setItem] = useState([]);

  useEffect(() => {
    getList();
  }, [categories]);

  const getList = async () => {
    let res = null;
    const params = {};

    try {
      if (types !== "similar") {
        switch (categories) {
          case category.movie:
            try {
              res = await tmdbApi.getMoviesList(types, { params });
            } catch {
              console.log("error");
            }
            break;
          default:
            try {
              res = await tmdbApi.getTvList(types, { params });
            } catch {
              console.log("error");
            }
        }
      } else {
        try {
          res = await tmdbApi.similar(categories, id);
        } catch {
          console.log("error");
        }
      }

      setItem(res.results);
    } catch {
      console.log("error");
    }
  };

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity
            className="p-1"
            onPress={() => navigation.navigate("List", item)}
          >
            <Text className="text-lg text-activeColor">See All</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Movie row */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {item.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() =>
                navigation.push("Detail", {
                  categories,
                  item,
                })
              }
            >
              <View className="space-y-1 mr-4">
                <Image
                  source={{ uri: apiConfig.w185Image(item.poster_path) }}
                  className="rounded-md"
                  style={{ width: width * 0.33, height: height * 0.22 }}
                />

                <Text className="text-neutral-300 ml-1">
                  {item?.name && item?.name?.length > 14
                    ? item?.name.slice(0, 14) + "..."
                    : item?.name}

                  {item?.title && item?.title?.length > 14
                    ? item?.title.slice(0, 14) + "..."
                    : item?.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
