import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import produit from "../assets/produit.jpg";
import HomeScreenBanner from "../assets/HomeScreenBanner.jpg";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectedBasketItemsWithId,
} from "../features/basketSlice";
import BasketIcon from "../components/BasketIcon";

const ProductDetailsScreen = () => {
  const {
    params: { title, description, rating, price, id },
  } = useRoute();
  const totalStars = 5;
  const gainStars = rating;
  const dispatch = useDispatch();
  const items = useSelector((state) => selectedBasketItemsWithId(state, id));
  const addItemToBasket = () => {
    dispatch(addToBasket({ title, description, price, id }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <BasketIcon></BasketIcon>

      <View className="bg-[#EFDEBE] pt-8 flex-1">
        <ScrollView>
          {/* Header */}
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={200}
              decelerationRate="fast"
              pagingEnabled
            >
              <Image source={produit} className="h-[330] w-[390] relative " />

              <Image
                source={HomeScreenBanner}
                className="h-[330] w-[390] relative "
              />

              <Image source={produit} className="h-[330] w-[390] relative " />
            </ScrollView>
          </View>
          <View className="mt-7">
            <Text className="px-3 text-left text-lg font-bold text-[#4E1703]">
              {title}
            </Text>
          </View>
          <View className=" mt-7">
            <Text className="px-3 text-left text-[#7B420E]">{description}</Text>
          </View>
          <View className=" flex-row justify-left space-x-2 mt-7">
            <Text className="text-lg font-bold  py-0 px-3 text-[#4E1703]">
              Reviews :
            </Text>
            <View className="flex-row">
              {Array.from({ length: gainStars }, (x, i) => {
                return (
                  <MaterialIcons
                    key={i}
                    name="star"
                    size={30}
                    color="#FFA000"
                  />
                );
              })}

              {Array.from({ length: totalStars - gainStars }, (x, i) => {
                return (
                  <MaterialIcons
                    key={i}
                    name="star-border"
                    size={30}
                    color="#FFA000"
                  />
                );
              })}
            </View>
          </View>
          <View className="mt-7 ">
            <Text className="px-3 text-left text-lg font-bold  text-[#4E1703]">
              Price : {price}
            </Text>
          </View>
          <View
            className="mt-5"
            style={[{ flexDirection: "row", alignItems: "center" }]}
          >
            <View style={[{ flex: 1, flexDirection: "row" }]}>
              <Text className="px-3 text-left text-lg font-bold  text-[#4E1703]">
                Quantity :
              </Text>
            </View>
            <View
              style={[{ justifyContent: "space-evenly", marginVertical: 10 }]}
            >
              <View className="flex-row items-center space-x-2 ">
                <TouchableOpacity>
                  <MinusCircleIcon
                    disabled={!items.length}
                    onPress={removeItemFromBasket}
                    fill={items.length ? "#4E1703" : "gray"}
                    color="white"
                    size={40}
                  />
                </TouchableOpacity>

                <Text>{items.length}</Text>

                <TouchableOpacity onPress={addItemToBasket}>
                  <PlusCircleIcon
                    fill="#4E1703"
                    color="white"
                    size={40}
                    padingright
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ProductDetailsScreen;
