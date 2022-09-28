import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { TouchableOpacity } from "react-native";
import ProductCard from "../components/ProductCard";
const width = Dimensions.get("window").width / 2 - 30;

const ProductListScreen = () => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ["POTERY", "ORGANIC", "DECORATION", "SYNTHETIC"];

  const CategoryListCard = () => {
    return (
      <View style={style.categoryContainer}>
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
      </View>
    );
  };
  const Card = ({ ProductCard }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Details", ProductCard)}
      >
        <View>
          <View style={{ alignItems: "flex-end" }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: "center",
            }}
          ></View>

          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
            {ProductCard.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>
              ${ProductCard.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>+</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View className="bg-[#EFDEBE] pt-8  flex-1">
      <SafeAreaView>
        {/* Header */}

        <View className="mt-4  items-center justify-between px-4">
          <Text className="font-bold text-lg text-[#4E1703]">Product list</Text>
        </View>
        <View className="flex-row items-center space-x-2 pb-0 mx-4">
          <View className="flex-row flex-1  p-3 space-x-2  bg-white border-black mt-2 rounded-lg ">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              placeholder="coop list "
              keyboardType="default"
              className="flex-1"
            />
          </View>
          <AdjustmentsVerticalIcon color="#7B420E" size={20} />
        </View>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          data={ProductCard}
          renderItem={({ item }) => {
            return <Card ProductCard={item} />;
          }}
        />
        <CategoryListCard />
      </SafeAreaView>
    </View>
  );
};
const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
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
