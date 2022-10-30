import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { TouchableOpacity } from "react-native";
import ProductListCard from "../components/ProductListCard";
import sanityClient, { urlFor } from "../src/sanity";

import { useState, useEffect } from "react";
const width = Dimensions.get("window").width / 2 - 30;

const ProductListScreen = () => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ["ALL", "POTTERY", "ORGANIC", "DECORATION", "SYNTHETIC"];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
            *[_type =="product"]{
              ...,
            }
        `
      )
      .then((data) => {
        setProducts(data);
      });
  }, []);
  // const CategoryListCard = () => {
  //   return (
  //     <ScrollView
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       className="flex-row mb-3 space-x-6 mx-4 content-between"
  //       // contentContainerStyle={{ justifyContent: "space-between" }}
  //       style={style.categoryContainer}
  //     >
  //       {categories.map((item, index) => (
  //         <TouchableOpacity
  //           key={index}
  //           activeOpacity={0.8}
  //           onPress={() => setCategoryIndex(index)}
  //         >
  //           <Text
  //             style={[
  //               style.categoryText,
  //               catergoryIndex === index && style.categoryTextSelected,
  //             ]}
  //           >
  //             {item}
  //           </Text>
  //         </TouchableOpacity>
  //       ))}
  //     </ScrollView>
  //   );
  // };
  return (
    <View className="bg-[#EFDEBE] flex-1">
      {/* Header */}
      <View className="flex-row items-center my-4 space-x-2 mx-4">
        <View className="flex-row flex-1 p-3 pb-2 space-x-2 bg-white border border-[#7B420E] mt-2 rounded-lg ">
          <MagnifyingGlassIcon color="#7B420E" size={20} />
          <TextInput
            style={{ fontFamily: "Poppins_600SemiBold" }}
            placeholder="Search for rugs, clothing..."
            keyboardType="default"
            className="flex-1 text-[#7B420E]"
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 20,
        }}
      >
        {/* <CategoryListCard /> */}
        {products?.map((product) => (
          <View className="flex flex-row flex-wrap">
            <ProductListCard
              key={product._id}
              id={product._id}
              imgUrl={urlFor(product.image).url()}
              title={product.name}
              rating={product.rating}
              price={product.price}
              address={product.address}
              description={product.short_description}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  // categoryContainer: {
  //   flexDirection: "row",
  //   marginTop: 30,
  //   marginBottom: 20,
  // justifyContent: "space-between",
  // },
  categoryText: { fontSize: 16, color: "grey", fontWeight: "bold" },
  categoryTextSelected: {
    color: "#4E1703",
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "#4E1703",
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Card: {
    height: 225,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  searchContainer: {
    height: 50,
    backgroundColor: "#4E1703",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProductListScreen;
