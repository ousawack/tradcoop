import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mt-1 mx-3 shadow-lg shadow-amber-800">
      <Image
        source={{ uri: imgUrl }}
        className="h-24 w-36 opacity-80 rounded-lg p-2"
      />
      <Text
        style={{ fontFamily: "Poppins_700Bold" }}
        className="text-base absolute bottom-1 left-3 text-white"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
