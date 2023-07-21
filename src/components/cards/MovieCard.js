import { Image, Dimensions, TouchableWithoutFeedback } from "react-native";
import React from "react";
import apiConfig from "../../api/apiConfig";

var { width, height } = Dimensions.get("window");

export default function MovieCard({ item, handleClick }) {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={{ uri: apiConfig.w500Image(item.backdrop_path) }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-lg"
      />
    </TouchableWithoutFeedback>
  );
}
