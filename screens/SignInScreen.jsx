import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import SignIn from "../assets/SignIn.png";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="bg-[#EFDEBE] flex-1 pt-9 px-6">
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        className="flex space-x-[1] items-center justify-center mb-1"
      >
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-sm text-[#7B420E]"
        >
          Don’t have an account ? Sign up
        </Text>
      </TouchableOpacity>
      <View className="items-center my-2">
        <Image source={SignIn} style={{ width: 125, height: 125 }} />
      </View>
      <View className="items-center">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-4xl py-2 text-[#4E1703]"
        >
          Sign in
        </Text>
      </View>
      <View className="space-y-3">
        <View className="space-y-[1]">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-[#4E1703]"
          >
            Full Name
          </Text>
          <TextInput
            style={{ fontFamily: "Poppins_500Medium" }}
            placeholder="ex: John Doe"
            className="flex-1 bg-white rounded-lg p-2 "
          />
        </View>
        <View className="space-y-[1]">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-[#4E1703]"
          >
            Password
          </Text>
          <TextInput
            style={{ fontFamily: "Poppins_500Medium" }}
            placeholder="password"
            className="flex-1 bg-white rounded-lg p-2 "
          />
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="py-2 self-end text-red-600"
          >
            Forgot password
          </Text>
        </View>
      </View>
      <View className="place-items-end items-center mt-6">
        <TouchableOpacity className="bg-[#4E1703] rounded-2xl px-[113] py-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-center text-white text-2xl"
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
