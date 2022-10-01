import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const UserPaymentMethodsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-[#EFDEBE] pt-5">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex-row items-end px-8 space-y-2 space-x-2"
      >
        <ChevronLeftIcon size={35} color="#4E1703" />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-2xl text-[#4E1703]"
        >
          Payment methods
        </Text>
      </TouchableOpacity>
      <View className="my-6 p-6 bg-[#e7cfa2] items-center">
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-base text-center text-[#4e170381]"
        >
          You do not have any saved payment method, feel free to add one.
        </Text>
      </View>
      <View className="mx-8 items-center space-y-6">
        <TouchableOpacity className="flex-row border-4 border-[#4E1703] px-10 py-4 space-x-3">
          <AntDesign name="creditcard" size={24} color="#4E1703" />
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            DEBIT / CREDIT CARD
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-base text-[#4E1703]"
          >
            OR
          </Text>
        </View>
        <TouchableOpacity className="flex-row border-4 border-[#4E1703] px-24 py-4 space-x-3">
          <FontAwesome name="cc-paypal" size={24} color="#4E1703" />
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            PAYPAL
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserPaymentMethodsScreen;
