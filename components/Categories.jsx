import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import sanityClient, { urlFor } from "../src/sanity";

const Categories = ({ imgUrl, title }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type =="category"]
        `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

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
        {/* CategoryCard */}
        {categories?.map((category) => {
          return (
            <CategoryCard
              key={category._id}
              id={category._id}
              imgUrl={urlFor(category.image).url()}
              title={category.name}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
