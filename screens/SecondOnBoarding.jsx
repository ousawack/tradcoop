import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import { FontAwesome } from "@expo/vector-icons";
import OnBoardTwo from "../assets/OnBoardTwo.png";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";

const SecondOnBoarding = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="bg-[#EFDEBE] flex-1 pt-3 px-6">
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        className="flex-row-reverse space-x-[1] place-items-end items-center mb-2"
      >
        <ChevronRightIcon size={23} color="#7B420E" />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-xl text-[#7B420E]"
        >
          Skip
        </Text>
      </TouchableOpacity>
      <View className="items-center my-4">
        <Image source={OnBoardTwo} style={{ width: 275, height: 160 }} />
      </View>
      <View className="flex flex-row justify-center space-x-2 my-8">
        <FontAwesome name="circle-o" size={15} color="#4E1703" />
        <FontAwesome name="circle" size={15} color="#4E1703" />
        <FontAwesome name="circle-o" size={15} color="#4E1703" />
      </View>
      <View className="items-center space-y-2">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-center text-3xl text-[#4E1703]"
        >
          Smooth & Seamless.
        </Text>
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-center text-lg text-[#4E1703] px-4"
        >
          We are here to eliminate the traditional middleman and create a smooth
          process.
        </Text>
      </View>
      <View className="place-items-end items-center mt-6">
        <TouchableOpacity
          onPress={() => navigation.navigate("TOB")}
          className="bg-[#4E1703] rounded-2xl px-20 py-4"
        >
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-center text-white text-2xl"
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SecondOnBoarding;
