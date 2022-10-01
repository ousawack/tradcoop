import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { supabase } from "../../src/initSupabase";

const PhoneNumberScreen = () => {
  const [phonenumber, setPhonenumber] = useState("");
  const [loading, setLoading] = useState(false);

  async function phoneregister() {
    setLoading(true);
    let { user, error } = await supabase.auth.signInWithOtp({
      phone: phonenumber,
    });
    if (!error && !user) {
      setLoading(false);
      alert("Check your SMS verification code!");
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
    <SafeAreaView className="bg-[#EFDEBE] flex-1 pt-10 px-8">
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
          Receive an OTP verification code and secure your account.
        </Text>
      </View>
      <View className="space-y-[1] mx-6 mt-20">
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-[#4E1703]"
        >
          Phone Number
        </Text>
        <TextInput
          style={{ fontFamily: "Poppins_500Medium" }}
          placeholder="Enter your phone number"
          className="flex-1 bg-white rounded-lg p-2"
          value={phonenumber}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          keyboardType="phone-pad"
          onChangeText={(text) => setPhonenumber(text)}
        />
        <View className="py-12">
          <TouchableOpacity
            onPress={() => {
              phoneregister() && navigation.navigate("PhoneVerification");
            }}
            disabled={loading}
            className="self-center "
          >
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-base text-[#7B420E]"
            >
              {loading ? "Loading" : "Send code"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PhoneNumberScreen;
