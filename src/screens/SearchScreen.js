import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { TextInput } from "react-native";
import List from "../components/List";
import tmdbApi, { searchMovies } from "../api/tmdbApi";
import { debounce } from "lodash";

export default function SearchScreen() {
  const [results, setResults] = useState([]);

  /* const handleSearch = (value) => {
    if (value && value.length > 2) {
      tmdbApi
        .search({
          query: value,
          include_adult: false,
          language: "en-US",
          page: "1",
        })
        .then((data) => {
          console.log(data);
        });
    } else {
      setResults([]);
    }
  }; */

  const handleSearch = (value) => {
    if (value && value.length > 2) {
      searchMovies({
        query: value,
        include_adult: false,
        language: "en-US",
        page: "1",
      }).then((data) => {
        console.log(data);
        if (data && data.results) setResults(data.results);
      });
    } else {
      setResults([]);
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <SafeAreaView className="bg-neutral-800 flex-1 pt-3">
      <View className="mx-10 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Search movie..."
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
        />
      </View>
      <Text className="text-white font-semibold ml-1 mx-4 mb-4">Results</Text>
      <List data={results} />
    </SafeAreaView>
  );
}
