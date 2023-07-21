import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const ios = Platform.OS == "ios";

export default function Header() {
  return (
    <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
      <View className="flex-row justify-center items-center mx-4 mt-3">
        <Text className="text-3xl font-bold text-white">
          <Text className="text-activeColor">M</Text>ovie
        </Text>
      </View>
    </SafeAreaView>
  );
}
