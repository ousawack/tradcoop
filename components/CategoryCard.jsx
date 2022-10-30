import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ id, imgUrl, title }) => {
  const navigation = useNavigation();

  const route = title.replace(/\s/g, "");

  return (
    <TouchableOpacity
      className="relative mt-1 mx-3 shadow-lg shadow-amber-800"
      onPress={() => navigation.navigate(`${route}BasedProduct`)}
    >
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
