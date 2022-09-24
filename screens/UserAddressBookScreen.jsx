import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const UserAddressBookScreen = () => {
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
          Address book
        </Text>
      </TouchableOpacity>
      <View className="space-y-6 my-12 mx-8">
        <View className="space-y-[1]">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-[#4E1703]"
          >
            Full Name
          </Text>
          <TextInput
            style={{ fontFamily: "Poppins_500Medium" }}
            placeholder="Enter your name"
            className="flex-1 bg-white rounded-lg p-2 "
          />
        </View>
        <View className="space-y-[1]">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-[#4E1703]"
          >
            Phone number
          </Text>
          <TextInput
            style={{ fontFamily: "Poppins_500Medium" }}
            placeholder="Enter your phone number"
            className="flex-1 bg-white rounded-lg p-2 "
          />
        </View>
        <View className="space-y-[1]">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-[#4E1703]"
          >
            Country
          </Text>
          <TextInput
            style={{ fontFamily: "Poppins_500Medium" }}
            placeholder="Enter your country"
            className="flex-1 bg-white rounded-lg p-2 "
          />
        </View>
        <View className="space-y-[1]">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-[#4E1703]"
          >
            Address
          </Text>
          <TextInput
            style={{ fontFamily: "Poppins_500Medium" }}
            placeholder="Enter your address"
            className="flex-1 bg-white rounded-lg p-2 "
          />
        </View>
        <View className="space-y-[1]">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-[#4E1703]"
          >
            City
          </Text>
          <TextInput
            style={{ fontFamily: "Poppins_500Medium" }}
            placeholder="Enter your city"
            className="flex-1 bg-white rounded-lg p-2 "
          />
        </View>
        <View className="space-y-[1]">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-[#4E1703]"
          >
            Region
          </Text>
          <TextInput
            style={{ fontFamily: "Poppins_500Medium" }}
            placeholder="Enter your region"
            className="flex-1 bg-white rounded-lg p-2 "
          />
        </View>
        <View className="space-y-[1]">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-[#4E1703]"
          >
            Zip code
          </Text>
          <TextInput
            style={{ fontFamily: "Poppins_500Medium" }}
            placeholder="Enter your zip code"
            className="flex-1 bg-white rounded-lg p-2 "
          />
        </View>
        <View className="place-items-end items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-[#4E1703] rounded-2xl px-12 py-4 mt-2"
          >
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-center text-white text-2xl"
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserAddressBookScreen;
