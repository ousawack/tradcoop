import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryListCard from "../components/CategoryListCard";
import sanityClient, { urlFor } from "../src/sanity";

const CategoriesScreen = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type=="category"]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-[#EFDEBE] flex-1 pt-5">
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
        {categories?.map((category) => {
          return (
            <CategoryListCard
              key={category._id}
              id={category._id}
              imgUrl={urlFor(category.image).url()}
              title={category.name}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
