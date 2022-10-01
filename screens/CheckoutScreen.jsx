import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import { XMarkIcon } from "react-native-heroicons/outline";

const CheckoutScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#EFDEBE] flex-1 pt-5">
      <View className="px-8 space-y-2 pb-4">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-2xl text-[#4E1703]"
        >
          Checkout
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}
        vertical
        showsVerticalScrollIndicator={false}
        className="space-y-6"
      >
        <View className="border border-[#C3700D] rounded-lg p-4">
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
        </View>
        <View className="border border-[#C3700D] rounded-lg p-4 divide-y divide-[#C3700D]">
          <View className="flex-row justify-between pb-4">
            <View className="flex-row space-x-4">
              <Image
                source={Product1}
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
          </View>
          <View className="flex-row justify-between py-4">
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
          </View>
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
                  $00.00
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
                  $00.00
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
              $00.00
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
