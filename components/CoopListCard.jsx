import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
/* Coop  Card */

const CoopListCard = ({
  id,
  imgUrl,
  title,
  address,
  short_description,
  rating,
}) => {
  const navigation = useNavigation();
  const totalStars = 5;
  const gainStars = rating;
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
      className="mr-3 shadow my-4 flex-row align-center"
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-16 w-24 rounded-lg shadow-md shadow-amber-800"
      />
      <View className="px-3 ml-4 -mt-2">
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-sm pt-2 text-[#4E1703]"
        >
          {title}
        </Text>
        <View className="flex-row items-center space-x-1">
          <View className="flex-row">
            {Array.from({ length: gainStars }, (x, i) => {
              return <StarIcon key={i} name="star" size={20} color="#7B420E" />;
            })}

            {Array.from({ length: totalStars - gainStars }, (x, i) => {
              return (
                <StarIcon
                  key={i}
                  name="star-border"
                  size={20}
                  color="#7B420E"
                  opacity={0.3}
                />
              );
            })}
          </View>
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

export default CoopListCard;
