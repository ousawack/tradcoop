import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import OTPTextView from "react-native-otp-textinput";
import { useState } from "react";
import { supabase } from "../../src/initSupabase";

const PhoneVerificationScreen = (phonenumber) => {
  const [token, setToken] = useState("");

  async function phoneverification() {
    setLoading(true);
    let { session, error } = await supabase.auth.verifyOTP({
      phone: phonenumber,
      token: token,
    });
    if (!error && !user) {
      setLoading(false);
      alert("Tap in our SMS verification code!");
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  }

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
    <SafeAreaView className="bg-[#EFDEBE] flex-1 pt-4 px-8">
      <View className="space-y-2">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-2xl text-[#4E1703]"
        >
          OTP Verification
        </Text>
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-base text-[#7B420E]"
        >
          Enter your OTP verification code and verify your account.
        </Text>
      </View>
      <View className="my-10 mx-4">
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-xl text-center text-[#4E1703]"
        >
          Enter the 6-pin code you have received to verify your account.
        </Text>
      </View>
      <OTPTextView
        style={{ fontFamily: "Poppins_600SemiBold" }}
        className="flex-1 items-center justify-center m-1 p-1 rounded-full border-solid border-2 border-[#7B420E] text-xl text-center"
        inputCount={6}
        defaultValue={token}
        handleTextChange={(text) => setToken(text)}
      />
      <TouchableOpacity
        onPress={() => phoneverification()}
        className="bg-[#4E1703] rounded-2xl px-[20] my-14 mx-10 py-4"
      >
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-center text-white text-2xl"
        >
          Verify
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="items-center justify-center"
      >
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-sm text-[#7B420E]"
        >
          Didn't receive my OTP verification code
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PhoneVerificationScreen;
