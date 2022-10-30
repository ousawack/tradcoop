import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import sanityClient, { urlFor } from "../src/sanity";
import Currency from "react-currency-formatter";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../src/features/categorySlice";
/* Coop Product Card */

const CategoryFilteredProductCard = ({
  id,
  imgUrl,
  title,
  rating,
  category,
  price,
  address,
  description,
}) => {
  const navigation = useNavigation();

  const totalStars = 5;
  const gainStars = rating;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetails", {
          title,
          id,
          imgUrl,
          title,
          rating,
          category,
          address,
          description,
          price,
        })
      }
      className="bg-[#f0e9dc] mx-3 my-3 shadow-md shadow-amber-800 rounded-lg"
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 rounded-sm"
      />
      <View className="px-3 pb-2 space-y-1">
        <View className="flex-row justify-between pt-2 items-baseline">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-sm text-[#4E1703]"
          >
            {title}
          </Text>
        </View>
        <View className="flex-row justify-between space-x-1">
          <View className="flex-row">
            {Array.from({ length: gainStars }, (x, i) => {
              return <StarIcon key={i} name="star" size={18} color="#7B420E" />;
            })}

            {Array.from({ length: totalStars - gainStars }, (x, i) => {
              return (
                <StarIcon
                  key={i}
                  name="star-border"
                  size={18}
                  color="#7B420E"
                  opacity={0.3}
                />
              );
            })}
          </View>
          <Text
            style={{ fontFamily: "Poppins_800ExtraBold" }}
            className="text-base text-[#7B420E]"
          >
            <Currency quantity={price} currency="MAD" />
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryFilteredProductCard;
