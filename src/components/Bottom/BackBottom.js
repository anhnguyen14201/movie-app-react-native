import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function BackBottom() {
  const navigator = useNavigation();
  return (
    <TouchableOpacity className="p-2" onPress={() => navigator.goBack()}>
      <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
    </TouchableOpacity>
  );
}
