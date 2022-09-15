import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";

import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import HomeScreenBanner from "../assets/HomeScreenBanner.jpg";
import CoopRow from "../components/CoopRow";
import Categories from "../components/Categories";
import ProductRow from "../components/ProductRow";

const HomeScreen = () => {
  return (
    <View className="bg-[#EFDEBE] pt-8 flex-1">
      <ScrollView>
        <SafeAreaView>
          {/* Header */}
          <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1  p-3 space-x-2  bg-white border-black mt-2 rounded-lg ">
              <MagnifyingGlassIcon color="gray" size={20} />
              <TextInput
                placeholder="Cooperatives"
                keyboardType="default"
                className="flex-1"
              />
            </View>
            <AdjustmentsVerticalIcon color="#7B420E" size={20} />
          </View>
        </SafeAreaView>
        <View>
          <Image
            source={HomeScreenBanner}
            className="h-[230] w-[460] relative "
          />
          <Text className="absolute text-[#EFDEBE] text-xl font-bold p-3 py-5">
            the best and most natural products... Straight from the source
          </Text>
        </View>
        {/* Body */}
        <View>
          {/* Catgories */}

          <Categories title="Categories" />
          {/* Coopratives */}
          <CoopRow
            id="123"
            title="Cooperatives"
            description="the Coop located in Morocco"
          />

          {/* Products  */}
          <ProductRow
            id="1234"
            title="Products"
            description="jesus some good ass products"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
