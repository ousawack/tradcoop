import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryFilteredProductCard from "../../components/CategoryFilteredProductCard";
import sanityClient, { urlFor } from "../../src/sanity";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";

const ArganOilBasedProductScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "product" && references("7a87dcb1-1276-401b-8977-5ca41e7d873a")]
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

export default ArganOilBasedProductScreen;
