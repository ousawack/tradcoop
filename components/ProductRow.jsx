import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ProductCard from "./ProductCard";
const ProductRow = ({ id, title, description }) => {
  return (
    <View className="mx-2 my-3">
      <TouchableOpacity>
        <View className="flex-row items-center justify-between px-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-xl text-[#4E1703]"
          >
            {title}
          </Text>
          <ArrowRightIcon color="#C3700D" />
        </View>
      </TouchableOpacity>
      <Text
        style={{ fontFamily: "Poppins_600SemiBold" }}
        className="text-sm text-[#7B420E] px-4"
      >
        {description}
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 5,
          paddingBottom: 30,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-3"
      >
        {/* Coop Product Cards... */}
        <ProductCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Coop"
          rating={4.5}
          genre="Morocco"
          address="Agadir"
          short_description="this is a test description"
          long={20}
          lat={0}
        />
        <ProductCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Coop"
          rating={4.5}
          genre="Morocco"
          address="Agadir"
          short_description="this is a test description"
          long={20}
          lat={0}
        />
        <ProductCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Coop"
          rating={4.5}
          genre="Morocco"
          address="Agadir"
          short_description="this is a test description"
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default ProductRow;
