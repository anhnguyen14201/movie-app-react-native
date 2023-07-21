import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import apiConfig from "../api/apiConfig";

var { width, height } = Dimensions.get("window");

export default function List({ data }) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    setResults(data);
  }, [data]);

  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      className="space-y-3"
    >
      <View className="flex-row justify-between flex-wrap">
        {results.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push("Detail", item)}
            >
              <View className=" space-y-2 mb-4">
                <Image
                  className="rounded-md"
                  source={{ uri: apiConfig.w185Image(item.poster_path) }}
                  style={{ width: width * 0.44, height: height * 0.3 }}
                ></Image>
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
      </View>
    </ScrollView>
  );
}
