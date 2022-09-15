import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ProductCard from "./ProductCard";
const ProductRow = ({ id, title, description }) => {
  return (
    <View>
      <TouchableOpacity>
        <View className="mt-4 flex-row items-center justify-between px-4">
          <Text className="font-bold text-lg text-[#4E1703]">{title}</Text>
          <ArrowRightIcon color="#C3700D" />
        </View>
      </TouchableOpacity>
      <Text className="text-xs text-[#7B420E] px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
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
