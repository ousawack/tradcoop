import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const PaymentScreen = () => {
  return (
    <SafeAreaView className="bg-[#EFDEBE] flex-1 pt-10">
      <View className="px-8 space-y-2 pb-4">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-2xl text-[#4E1703]"
        >
          Payment
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
        <View className="flex-row justify-between pt-6 px-3">
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
        <View className="border border-[#C3700D] rounded-lg p-4 my-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-xl text-[#7B420E]  mb-2"
          >
            Personal informations
          </Text>
          <View className="space-y-1">
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4E1703]"
            >
              John Doe
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4E1703]"
            >
              +212 1 23 456-789
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4E1703]"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium.
            </Text>
          </View>
        </View>
        <View className="my-4 mx-3">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-xl text-[#7B420E]  mb-3"
          >
            Payment methods
          </Text>
          <View className="flex-row space-x-4">
            <TouchableOpacity>
              <FontAwesome name="cc-visa" size={48} color="#7B420E" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="cc-stripe" size={48} color="#7B420E" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="cc-paypal" size={48} color="#7B420E" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="place-items-end items-center mt-6">
          <TouchableOpacity className="bg-[#4E1703] rounded-2xl px-[65] py-4">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-center text-white text-2xl"
            >
              Confirm order
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;
