import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const Categories = ({ title }) => {
  return (
    <View>
      <TouchableOpacity>
        <View className="mt-3 flex-row items-center justify-between px-3">
          <Text className="font-bold text-lg text-[#4E1703]">{title}</Text>
          <ArrowRightIcon color="#C3700D" />
        </View>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          paddingHorizonta: 15,
          paddingTop: 10,
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
