import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../src/features/basketSlice";
import BasketIcon from "../components/BasketIcon";
import { urlFor } from "../src/sanity";
import { StarIcon } from "react-native-heroicons/outline";
import Currency from "react-currency-formatter";

const ProductDetailsScreen = () => {
  const {
    params: { title, description, rating, price, id, imgUrl },
  } = useRoute();

  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, title, description, price, imgUrl }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  const totalStars = 5;
  const gainStars = rating;

  return (
    <>
      <BasketIcon />

      <View className="bg-[#EFDEBE] flex-1">
        <ScrollView>
          {/* Header */}
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={200}
              decelerationRate="fast"
              pagingEnabled
            >
              <Image
                source={{ uri: urlFor(imgUrl).url() }}
                className="h-[330] w-screen"
              />
            </ScrollView>
          </View>

          <View className="mt-7 flex-row justify-between">
            <View className="w-48">
              <Text
                style={{ fontFamily: "Poppins_700Bold" }}
                className="px-3 text-left text-xl text-[#4E1703]"
              >
                {title}
              </Text>
            </View>
            <Text
              style={{ fontFamily: "Poppins_800ExtraBold" }}
              className="text-2xl mr-3 -mt-[3] text-[#7B420E]"
            >
              <Currency quantity={price} currency="MAD" />
            </Text>
          </View>

          <View className="mt-7">
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="px-3 text-left text-[#7B420E]"
            >
              {description}
            </Text>
          </View>
          <View className=" flex-row justify-left space-x-1 mt-7">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg px-3 text-[#4E1703]"
            >
              Rating :
            </Text>
            <View className="flex-row space-x-1">
              <View className="flex-row -mt-1">
                {Array.from({ length: gainStars }, (x, i) => {
                  return (
                    <StarIcon key={i} name="star" size={30} color="#7B420E" />
                  );
                })}

                {Array.from({ length: totalStars - gainStars }, (x, i) => {
                  return (
                    <StarIcon
                      key={i}
                      name="star-border"
                      size={30}
                      color="#7B420E"
                      opacity={0.3}
                    />
                  );
                })}
              </View>
            </View>
          </View>
          <View
            className="mt-4 pb-24"
            style={[{ flexDirection: "row", alignItems: "center" }]}
          >
            <View style={[{ flex: 1, flexDirection: "row" }]}>
              <Text
                style={{ fontFamily: "Poppins_700Bold" }}
                className="px-3 text-left text-lg text-[#4E1703]"
              >
                Quantity :
              </Text>
            </View>
            <View
              style={[{ justifyContent: "space-evenly", marginVertical: 10 }]}
            >
              <View className="flex-row items-center space-x-2 mr-2">
                <TouchableOpacity>
                  <MinusCircleIcon
                    disabled={!items.length}
                    onPress={removeItemFromBasket}
                    fill={items.length ? "#4E1703" : "gray"}
                    color="white"
                    size={40}
                  />
                </TouchableOpacity>

                <Text
                  style={{ fontFamily: "Poppins_700Bold" }}
                  className="text-lg"
                >
                  {items.length}
                </Text>

                <TouchableOpacity onPress={addItemToBasket}>
                  <PlusCircleIcon fill="#4E1703" color="white" size={40} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ProductDetailsScreen;
