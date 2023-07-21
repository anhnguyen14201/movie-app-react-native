import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CalendarDaysIcon,
  StarIcon,
  ClockIcon,
} from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import ViewMoreText from "react-native-view-more-text";
import Cast from "../components/Cast";
import MovieList from "../components/cards/MovieList";
import BackBottom from "../components/Bottom/BackBottom";
import { useRoute } from "@react-navigation/native";
import apiConfig from "../api/apiConfig";
import tmdbApi from "../api/tmdbApi";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-3";

export default function DetailScreen() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [item, setItem] = useState([]);

  const { params: data } = useRoute();

  useEffect(() => {
    getDetail();
  }, [data]);

  const getDetail = async () => {
    const res = await tmdbApi.detail(data.categories, data.item.id, {
      params: {},
    });

    setItem(res);
  };

  const renderViewMore = (onPress) => {
    return (
      <Text onPress={onPress} className="text-activeColor p-1">
        View more
      </Text>
    );
  };
  const renderViewLess = (onPress) => {
    return (
      <Text onPress={onPress} className="text-activeColor p-1">
        View less
      </Text>
    );
  };
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-background"
    >
      {/* Back button and movie poster */}

      <View className="w-full">
        <SafeAreaView
          className={
            " absolute z-20 w-full flex-row justify-between items-center px-4 " +
            topMargin
          }
        >
          <BackBottom />

          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <HeartIcon
              size="35"
              color={isFavorite ? theme.activeColor : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image
            source={{ uri: apiConfig.w500Image(data?.item?.backdrop_path) }}
            style={{ width, height: height * 0.55 }}
          />

          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23, 1)"]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
      {/* Movie details */}
      <View className="space-y-3 mx-4" style={{ marginTop: -(height * 0.08) }}>
        {/* Movie title */}
        <View className="flex-row items-center justify-between text-center">
          <View style={{ width: width * 0.33, height: height * 0.22 }}>
            <Image
              className="rounded-lg w-full h-full"
              source={{ uri: apiConfig.w342Image(data?.item?.poster_path) }}
            />
          </View>

          <Text className="ml-8 text-white text-2xl font-medium tracking-wider flex-1">
            {item.title ? item.title : item.name}
          </Text>
        </View>
        {/* Status, relese, runtime */}

        <View className="flex-row justify-between items-center mx-3">
          <View className="flex-row justify-between items-center">
            <CalendarDaysIcon size="28" strokeWidth={1} color={theme.text} />
            <Text className="text-text ml-2">{data?.item?.release_date}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <StarIcon size="28" strokeWidth={1} color={theme.activeColor} />
            <Text className="text-activeColor ml-2">
              {item?.vote_average?.toFixed(1)}
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <ClockIcon size="28" strokeWidth={1} color={theme.activeColor} />
            <Text className="text-activeColor ml-2">{item?.runtime} min</Text>
          </View>
        </View>

        {/* Description */}

        <View className="mx-3">
          <Text className="text-white text-xl">About Movie</Text>
          <ViewMoreText
            numberOfLines={3}
            renderViewMore={renderViewMore}
            renderViewLess={renderViewLess}
          >
            <Text className="text-text mt-3 text-sm">
              {data?.item?.overview}
            </Text>
          </ViewMoreText>
        </View>
      </View>

      <Cast id={item.id} data={data.categories} />

      <View className="mx-3">
        <MovieList
          types="similar"
          title="Similar Movies"
          categories={data.categories}
          id={data.item.id}
          hideSeeAll={true}
        />
      </View>
    </ScrollView>
  );
}
