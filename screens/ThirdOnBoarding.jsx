import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import OnBoardThree from "../assets/OnBoardThree.png";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";

const ThirdOnBoarding = () => {
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
        onPress={() => navigation.navigate("SignIn")}
        className="flex space-x-[1] items-center justify-center mb-2"
      >
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-sm text-[#7B420E]"
        >
          Already have an account ? Sign in
        </Text>
      </TouchableOpacity>
      <View className="items-center my-4">
        <Image source={OnBoardThree} style={{ width: 275, height: 160 }} />
      </View>
      <View className="flex flex-row justify-center space-x-2 my-8">
        <FontAwesome name="circle-o" size={15} color="#4E1703" />
        <FontAwesome name="circle-o" size={15} color="#4E1703" />
        <FontAwesome name="circle" size={15} color="#4E1703" />
      </View>
      <View className="items-center space-y-2">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-center text-3xl text-[#4E1703]"
        >
          Pay Lower & Support More.
        </Text>
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-center text-lg text-[#4E1703] px-4"
        >
          You pay a lower price while the cooperative gets a higher profit.
        </Text>
      </View>
      <View className="place-items-end items-center mt-6">
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          className="bg-[#4E1703] rounded-2xl px-20 py-4"
        >
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-center text-white text-2xl"
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ThirdOnBoarding;
