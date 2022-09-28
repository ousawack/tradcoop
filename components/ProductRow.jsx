import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ProductCard from "./ProductCard";
import { useNavigation } from "@react-navigation/native";
const ProductRow = ({ id, title, description }) => {
  const navigation=useNavigation()
  return (
    <View>
            <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductList")
        }
      >
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
          id={1234}
          imgUrl="https://links.papareact.com/gn7"
          title="Product name 1"
          rating={4.5}
          price="13 $"
          address="Agadir"
          description="Handmade is one of the most effective descriptors to help emphasize the quality and uniqueness of a product. Like any other word, though, it comes with baggage and must be used with care."
          long={20}
          lat={0}
        />
        <ProductCard
          id={1235}
          imgUrl="https://links.papareact.com/gn7"
          title="Product name 2"
          rating={4.5}
          price="12 $"
          address="Agadir"
          description="Handmade is one of the most effective descriptors to help emphasize the quality and uniqueness of a product. Like any other word, though, it comes with baggage and must be used with care. Handmade is one of the most effective descriptors to help emphasize the quality and uniqueness of a product. Like any other word, though, it comes with baggage and must be used with care. Handmade is one of the most effective descriptors to help emphasize the quality and uniqueness of a product. Like any other word, though, it comes with baggage and must be used with care. Handmade is one of the most effective descriptors to help emphasize the quality and uniqueness of a product. Like any other word, though, it comes with baggage and must be used with care.Handmade is one of the most effective descriptors to help emphasize the quality and uniqueness of a product. Like any other word, though, it comes with baggage and must be used with care. Handmade is one of the most effective descriptors to help emphasize the quality and uniqueness of a product. Like any other word, though, it comes with baggage and must be used with care. Handmade is one of the most effective descriptors to help emphasize the quality and uniqueness of a product. Like any other word, though, it comes with baggage and must be used with care."
          long={20}
          lat={0}
        />
        <ProductCard
          id={1237}
          imgUrl="https://links.papareact.com/gn7"
          title="Product name 3 "
          rating={4.5}
          price="11 $"
          address="Agadir"
          description="Handmade is one of the most effective descriptors to help emphasize the quality and uniqueness of a product. Like any other word, though, it comes with baggage and must be used with care."
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default ProductRow;
