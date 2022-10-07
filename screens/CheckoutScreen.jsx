import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import { ChevronLeftIcon, XMarkIcon } from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketTotal,
  selectBasketItems,
} from "../src/features/basketSlice";
import { urlFor } from "../src/sanity";
import Currency from "react-currency-formatter";

const CheckoutScreen = () => {
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
    <SafeAreaView className="bg-[#EFDEBE] flex-1 pt-5">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex-row items-end px-2 pb-4 space-y-2 space-x-2"
      >
        <ChevronLeftIcon size={35} color="#4E1703" />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-2xl text-[#4E1703]"
        >
          Checkout
        </Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}
        vertical
        showsVerticalScrollIndicator={false}
        className="space-y-4"
      >
        {/* <View className="border border-[#C3700D] rounded-lg p-4">
          <View className="flex-row justify-between mb-2">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-xl text-[#7B420E]"
            >
              Address
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("UserAddressBook")}
            >
              <Text
                style={{ fontFamily: "Poppins_700Bold" }}
                className="text-base text-[#7B420E]"
              >
                Change
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4E1703]"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            corporis voluptas fugit recusandae sequi.
          </Text>
        </View> */}
        <View className="border border-[#C3700D] rounded-lg p-4 divide-y divide-[#C3700D]">
          {Object.entries(groupItemsInBasket).map(([key, items]) => (
            <View key={key} className="flex-row justify-between pb-4">
              <View className="flex-row space-x-4">
                <Image
                  source={{ uri: urlFor(items[0]?.imgUrl).url() }}
                  style={{ width: 72, height: 72 }}
                  className="rounded-lg"
                />
                <View className="space-y-[5]">
                  <Text
                    style={{ fontFamily: "Poppins_600SemiBold" }}
                    className="text-base text-[#4E1703] -mt-[3]"
                  >
                    {items[0]?.title}
                  </Text>
                  <Text
                    style={{ fontFamily: "Poppins_600SemiBold" }}
                    className="text-sm text-[#4E1703]"
                  >
                    {items.length} x {items[0]?.price}
                  </Text>
                  <Text
                    style={{ fontFamily: "Poppins_600SemiBold" }}
                    className="text-base text-[#4E1703]"
                  >
                    <Currency quantity={items[0]?.price} currency="MAD" />
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ key: key }))}
              >
                <XMarkIcon size={25} color="#4E1703" />
              </TouchableOpacity>
            </View>
          ))}
          {/* <View className="flex-row justify-between py-4">
            <View className="flex-row space-x-4">
              <Image
                source={Product2}
                style={{ width: 72, height: 72 }}
                className="rounded-lg"
              />
              <View className="space-y-[5]">
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold" }}
                  className="text-sm text-[#4E1703]"
                >
                  Product Name
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold" }}
                  className="text-sm text-[#4E1703]"
                >
                  1 x $00.00
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold" }}
                  className="text-base text-[#4E1703]"
                >
                  $00.00
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <XMarkIcon size={25} color="#4E1703" />
            </TouchableOpacity>
          </View> */}
          <View>
            <View className="py-6 space-y-3">
              <View className="flex-row justify-between">
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold" }}
                  className="text-xl text-[#7B420E]"
                >
                  Items Total
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold" }}
                  className="text-xl text-[#4E1703]"
                >
                  <Currency quantity={basketTotal} currency="MAD" />
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold" }}
                  className="text-xl text-[#7B420E]"
                >
                  Delivery Fee
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold" }}
                  className="text-xl text-[#4E1703]"
                >
                  <Currency quantity={74.99} currency="MAD" />
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-row justify-between pt-6">
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-xl text-[#7B420E]"
            >
              Total
            </Text>
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-3xl text-[#4E1703]"
            >
              <Currency quantity={basketTotal + 74.99} currency="MAD" />
            </Text>
          </View>
        </View>
        <View className="place-items-end items-center mt-6">
          <TouchableOpacity
            onPress={() => navigation.navigate("Payment")}
            className="bg-[#4E1703] rounded-2xl px-[94] py-4"
          >
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-center text-white text-2xl"
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
