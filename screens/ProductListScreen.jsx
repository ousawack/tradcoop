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
const width = Dimensions.get("window").width / 2 - 30;

const ProductListScreen = () => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ["ALL", "POTTERY", "ORGANIC", "DECORATION", "SYNTHETIC"];

  const CategoryListCard = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row mb-7 space-x-6 mx-4 content-between"
        // contentContainerStyle={{ justifyContent: "space-between" }}
        style={style.categoryContainer}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}
          >
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  return (
    <View className="bg-[#EFDEBE] pt-8 flex-1">
      <SafeAreaView>
        {/* Header */}
        <View className="flex-row items-center space-x-2 mx-4">
          <View className="flex-row flex-1 p-3 my-6 space-x-2  bg-white border-black mt-2 rounded-lg ">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              placeholder="coop list "
              keyboardType="default"
              className="flex-1"
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
          <CategoryListCard />
          <View className="flex flex-row flex-wrap">
            <ProductListCard
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
            <ProductListCard
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
            <ProductListCard
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
          </View>
        </ScrollView>
      </SafeAreaView>
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
