import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketTotal,
  selectBasketItems,
} from "../src/features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/outline";
import { urlFor } from "../src/sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);

  useMemo(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupItemsInBasket(groupItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="p-5 border-b border-[#EFDEBE] bg-white shadow-sm">
          <View>
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-center"
            >
              My Cart
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon fill="#4E1703" color="white" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text
                style={{ fontFamily: "Poppins_700Bold" }}
                className="text-sm text-[#4E1703]"
              >
                {items.length} x
              </Text>
              <Image
                source={{ uri: urlFor(items[0]?.imgUrl).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text
                style={{ fontFamily: "Poppins_700Bold" }}
                className="flex-1 text-[#4E1703] text-xs"
              >
                {items[0]?.title}
              </Text>

              <Text
                style={{ fontFamily: "Poppins_600SemiBold" }}
                className="text-gray-500 text-sm"
              >
                <Currency quantity={items[0]?.price} currency="MAD" />
              </Text>

              <TouchableOpacity>
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold" }}
                  className="text-[#AC9F88] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-[#EFDEBE] mt-5 space-y-4">
          <View className="flex-row  justify-between">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-[#4E1703] text-sm"
            >
              Subtotal
            </Text>
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-[#4E1703] text-sm"
            >
              <Currency quantity={basketTotal} currency="MAD" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-[#4E1703] text-sm"
            >
              Delivery Fee
            </Text>
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-[#4E1703] text-sm"
            >
              <Currency quantity={74.99} currency="MAD" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-sm text-[#4E1703]"
            >
              Order Total
            </Text>
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-[#4E1703]"
            >
              <Currency quantity={basketTotal + 74.99} currency="MAD" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Checkout")}
            className="rounded-lg bg-[#4E1703] p-4"
          >
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-center text-white text-lg"
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
