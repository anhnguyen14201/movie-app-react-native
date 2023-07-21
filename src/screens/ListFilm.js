import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/header/Header";
import List from "../components/List";
import { useRoute } from "@react-navigation/native";

export default function ListFilm() {
  const { params: data } = useRoute();

  return (
    <SafeAreaView className="bg-neutral-800 flex-1 pt-3">
      <Header />
      <List data={data} />
    </SafeAreaView>
  );
}
