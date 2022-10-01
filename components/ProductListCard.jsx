import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

/* Coop Product Card */

const ProductCard = ({
  id,
  imgUrl,
  title,
  rating,
  price,
  address,
  description,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetails", {
          title,
          id,
          imgUrl,
          title,
          rating,
          address,
          description,
          price,
        })
      }
      className="bg-[#f0e9dc] mx-7 my-[10] shadow-md shadow-amber-800 rounded-lg flex-1 items-center"
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-40 rounded-sm"
      />
      <View className="px-3 pb-3 space-y-1">
        <View className="justify-between pt-2 items-baseline">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-xs text-[#4E1703]"
          >
            {title}
          </Text>
          <Text
            style={{ fontFamily: "Poppins_800ExtraBold" }}
            className="text-lg text-[#7B420E] self-center "
          >
            {price} DH
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
