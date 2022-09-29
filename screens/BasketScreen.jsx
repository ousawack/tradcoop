import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketTotal,
  selectedBasketItems,
} from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/outline";
import produit from "../assets/Product1.png";

const BasketScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectedBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);

  useMemo(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupItemsInBasket(groupItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white" style={style.container}>
      <View className="flex-1 bg-white">
        <View className="p-5 border-b border-[#EFDEBE] bg-white shadow-sm">
          <View>
            <Text className="text-lg font-bold text-center">My Cart</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon fill="#4E1703" color="white" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text>{items.length} x</Text>
              <Image source={produit} className="h-12 w-12 rounded-full" />
              <Text className="flex-1">{items[0]?.title}</Text>

              <Text className="text-#4E1703">{items[0]?.price}</Text>

              <TouchableOpacity>
                <Text
                  className="text-[#AC9F88] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-[#EFDEBE] mt-5 space-y-4">
          <View className="flex-row  justify-between">
            <Text className="text-#4E1703">Subtotal</Text>
            <Text className="text-#4E1703">{basketTotal}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-#4E1703">Delivery Fee</Text>
            <Text className="text-#4E1703">{"5.99$"}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">{basketTotal + 5.99}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            className="rounded-lg bg-[#4E1703] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

export default BasketScreen;
