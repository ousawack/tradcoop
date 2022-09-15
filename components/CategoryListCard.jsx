import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import pottery from "../assets/pottery.png";

const CategoryListCard = () => {
  return (
    <View className="border-t border-solid border-[#C3700D]">
      <TouchableOpacity className="flex-row items-center space-x-6 py-6 px-8 ">
        <Image
          source={pottery}
          style={{ width: 72, height: 72 }}
          className="rounded-lg"
        />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-lg text-[#4E1703]"
        >
          Poterry
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryListCard;
