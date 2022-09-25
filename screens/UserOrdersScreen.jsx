import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const UserOrdersScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-[#EFDEBE] pt-10">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex-row items-end px-8 space-y-2 space-x-2"
      >
        <ChevronLeftIcon size={35} color="#4E1703" />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-2xl text-[#4E1703]"
        >
          My orders
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UserOrdersScreen;
