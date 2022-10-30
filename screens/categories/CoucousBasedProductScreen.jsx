import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryFilteredProductCard from "../../components/CategoryFilteredProductCard";
import sanityClient, { urlFor } from "../../src/sanity";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";

const CoucousBasedProductScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type=="product" && references("b02643a3-e7af-4725-8df5-c9779b5035fc")]{
          ...,
        }
        `
      )
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <View className="bg-[#EFDEBE] flex-1">
      <ScrollView
        vertical
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 5,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
        className="py-5"
      >
        {/* Coop Product Cards... */}
        {products?.map((product) => (
          <CategoryFilteredProductCard
            key={product._id}
            id={product._id}
            imgUrl={urlFor(product.image).url()}
            title={product.name}
            rating={product.rating}
            price={product.price}
            address={product.address}
            description={product.short_description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CoucousBasedProductScreen;
