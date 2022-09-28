import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const FAQScreen = () => {
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
          FAQ
        </Text>
      </TouchableOpacity>
      <View className="m-10 pb-10 space-y-8">
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-xl text-[#4E1703]"
          >
            Title
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            dignissimos nobis sed similique dolores voluptates aperiam officiis
            blanditiis.
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-xl text-[#4E1703]"
          >
            Title
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            dignissimos nobis sed similique dolores voluptates aperiam officiis
            blanditiis.
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-xl text-[#4E1703]"
          >
            Title
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            dignissimos nobis sed similique dolores voluptates aperiam officiis
            blanditiis.
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-xl text-[#4E1703]"
          >
            Title
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            dignissimos nobis sed similique dolores voluptates aperiam officiis
            blanditiis.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default FAQScreen;
