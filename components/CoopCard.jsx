import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

/* Coop  Card */

const CoopCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Coop", {
          title,
          id,
          imgUrl,
          title,
          rating,
          address,
          short_description,
        })
      }
      className="bg-white mr-3 shadow my-4"
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm self-center"
      />
      <View className="px-3 pb-4 ml-7 ">
        <Text className="font-bold text-lg pt-2 text-[#4E1703]">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="#C3700D" opacity={0.5} size={22} />
          <Text className="text-[#7B420E]">
            <Text className="text-[#C3700D]">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="#7B420E" opacity={0.4} size={22} />
          <Text className="text-xs text-[#7B420E]">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoopCard;
