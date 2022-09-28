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
      className="bg-[#f0e9dc] mx-3 shadow-lg shadow-amber-800 my-3 rounded-xl"
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-24 w-48 rounded-sm self-center"
      />
      <View className="px-3 pb-3 space-y-1">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-sm pt-2 text-[#4E1703]"
        >
          {title}
        </Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="#C3700D" opacity={0.5} size={22} />
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-[#7B420E]"
          >
            <Text className="text-[#C3700D]">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="#7B420E" opacity={0.4} size={22} />
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-xs text-[#7B420E]"
          >
            Location : {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoopCard;
