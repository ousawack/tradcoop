import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import CategoryListCard from "../components/CategoryListCard";

const CategoriesScreen = () => {
  return (
    <SafeAreaView className="bg-[#EFDEBE] flex-1 pt-10">
      <View className="px-8 space-y-2 pb-4">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-2xl text-[#4E1703]"
        >
          Categories
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 40,
        }}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <CategoryListCard />
        <CategoryListCard />
        <CategoryListCard />
        <CategoryListCard />
        <CategoryListCard />
        <CategoryListCard />
        <CategoryListCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
