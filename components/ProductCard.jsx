import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import sanityClient, { urlFor } from "../sanity";

import { useState, useEffect } from "react";
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
  const [Cooperative, setCooperative] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
            *[_type =="cooperative"]{
              ...,
              product[]->{
                ...,
                type-> {
                  name
              }
        }
            }
        `
      )
      .then((data) => {
        setCooperative(data);
      });
  }, []);
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
          address,
          description,
          price,
        })
      }
      className="bg-[#f0e9dc] mx-3 shadow-md shadow-amber-800 rounded-lg"
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-3 space-y-1">
        <View className="flex-row justify-between pt-2 items-baseline">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-base text-[#4E1703]"
          >
            {title}
          </Text>
          <Text
            style={{ fontFamily: "Poppins_800ExtraBold" }}
            className="text-xl text-[#7B420E]"
          >
            {price} DH
          </Text>
        </View>
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
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
