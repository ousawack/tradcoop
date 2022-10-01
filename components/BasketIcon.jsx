import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketTotal,
  selectedBasketItems,
} from "../src/features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectedBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 bg-[#4E1703] p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#4E1703] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-center text-lg text-white font-extrabold">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">{basketTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
