import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const Categories = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View className="mx-2">
      <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
        <View className="mt-3 flex-row items-center justify-between px-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-xl text-[#4E1703]"
          >
            {title}
          </Text>
          <ArrowRightIcon color="#C3700D" />
        </View>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* Categoy Card */}
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="Testing 1"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="Testing 2"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="Testing 3"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="Testing 4"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="Testing 5"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="Testing 6"
        />
      </ScrollView>
    </View>
  );
};

export default Categories;
