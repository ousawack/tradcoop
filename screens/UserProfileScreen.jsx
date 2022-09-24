import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import UserProfile from "../assets/UserProfile.png";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const UserProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-[#EFDEBE] pt-10">
      <View className="px-8 space-y-2">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-2xl text-[#4E1703]"
        >
          My account
        </Text>
      </View>
      <View className="items-center my-10">
        <Image
          source={UserProfile}
          style={{ width: 100, height: 100 }}
          className="rounded-full"
        />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="mt-6 text-xl text-[#4E1703]"
        >
          John Doe
        </Text>
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="mt-2 text-sm text-[#7B420E]"
        >
          Agadir, Souss Massa, Morocco
        </Text>
      </View>
      <View className="space-y-2">
        <View className="border-y border-[#C3700D] px-10">
          <TouchableOpacity
            onPress={() => navigation.navigate("UserOrders")}
            className="flex-row py-8 space-x-6 items-center"
          >
            <Feather name="package" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              My orders
            </Text>
          </TouchableOpacity>
        </View>
        <View className="border-y border-[#C3700D] divide-y divide-[#C3700D]">
          <TouchableOpacity
            onPress={() => navigation.navigate("UserDetails")}
            className="flex-row py-8 px-10 space-x-6 items-center"
          >
            <FontAwesome name="id-card-o" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              My details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserAddressBook")}
            className="flex-row py-8 px-10 space-x-6 items-center"
          >
            <FontAwesome5 name="house-user" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              Address book
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserPaymentMethods")}
            className="flex-row py-8 px-10 space-x-6 items-center"
          >
            <MaterialIcons name="payment" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              Payment methods
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserNotifications")}
            className="flex-row py-8 px-10 space-x-6 items-center"
          >
            <FontAwesome name="bell-o" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              Notifications
            </Text>
          </TouchableOpacity>
        </View>
        <View className="border-y border-[#C3700D] px-10">
          <TouchableOpacity
            onPress={() => navigation.navigate("FAQ")}
            className="flex-row py-8 space-x-6 items-center"
          >
            <FontAwesome5 name="question-circle" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              FAQ
            </Text>
          </TouchableOpacity>
        </View>
        <View className="border-y border-[#C3700D] px-10 mb-10">
          <TouchableOpacity
            onPress={() => navigation.navigate("Checkout")}
            className="flex-row py-8 space-x-6 items-center"
          >
            <AntDesign name="logout" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              Sign out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;
