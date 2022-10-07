import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import HomeScreenBanner from "../assets/HomeScreenBanner.jpg";
import CoopRow from "../components/CoopRow";
import Categories from "../components/Categories";
import ProductRow from "../components/ProductRow";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView className="bg-[#EFDEBE] pt-3 flex-1">
      <SafeAreaView>
        {/* Header */}
        <View className="flex-row items-center space-x-2 pb-4 mx-4">
          <View className="flex-row flex-1 p-3 pb-2 space-x-2 bg-white border border-[#7B420E] mt-2 rounded-lg ">
            <MagnifyingGlassIcon color="#7B420E" size={20} />
            <TextInput
              style={{ fontFamily: "Poppins_600SemiBold" }}
              placeholder="Search for rugs, clothing..."
              keyboardType="default"
              className="flex-1 text-[#7B420E]"
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserProfile")}
            className="left-1 top-1"
          >
            <UserCircleIcon color="#7B420E" size={35} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View>
        <Image
          source={HomeScreenBanner}
          // className="h-[230] w-[460] relative"
          className="h-44 w-full opacity-25 relative"
        />
        <View className="absolute px-5 py-3">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-[#4E1703] text-3xl"
          >
            the best and most natural products ...
          </Text>
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-[#4E1703] text-3xl"
          >
            Straight from the source !
          </Text>
        </View>
      </View>
      {/* Body */}
      <View className="my-4 divide-y">
        {/* Catgories */}

        <Categories title="Categories" />
        {/* Coopratives */}
        <CoopRow
          title="Cooperatives"
          description="Some cooperatives located in Morocco"
        />

        {/* Products  */}
        <ProductRow
          title="Products"
          description="Some products our customers have liked"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
