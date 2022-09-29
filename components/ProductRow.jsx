import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ProductCard from "./ProductCard";
import { useNavigation } from "@react-navigation/native";

const ProductRow = ({ id, title, description }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View className="mx-2 my-3">
        <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
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
    </View>
  );
};

export default ProductRow;
