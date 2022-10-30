import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import pottery from "../assets/pottery.png";
import { useNavigation } from "@react-navigation/native";

const CategoryListCard = ({ id, imgUrl, title }) => {
  const navigation = useNavigation();

  const route = title.replace(/\s/g, "");

  return (
    <View>
      <View className="border-t border-solid border-[#C3700D]">
        <TouchableOpacity
          className="flex-row items-center space-x-6 py-6 px-8"
          onPress={() => navigation.navigate(`${route}BasedProduct`)}
        >
          <Image
            source={{ uri: imgUrl }}
            style={{ width: 72, height: 72 }}
            className="rounded-lg"
          />
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryListCard;
