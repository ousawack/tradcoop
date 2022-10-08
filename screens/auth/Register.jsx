import React, { useState } from "react";

import { supabase } from "../../src/initSupabase";

//////////

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import SignUp from "../../assets/SignUp.png";

///////////

export default function ({ navigation }) {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function register() {
    setLoading(true);
    const { user, error } = await supabase.auth.signUp({
      full_name: fullname,
      email: email,
      password: password,
    });
    if (!error && !user) {
      setLoading(false);
      alert("Check your email for the login link!");
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  }
  return (
    <SafeAreaView className="bg-[#EFDEBE] flex-1 pt-3 px-6">
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className="flex space-x-[1] items-center justify-center mb-1"
      >
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-sm text-[#7B420E]"
        >
          Already have an account ? Sign in
        </Text>
      </TouchableOpacity>
      <View className="items-center my-2">
        <Image source={SignUp} style={{ width: 125, height: 125 }} />
      </View>
      <View className="items-center">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-4xl py-2 text-[#4E1703]"
        >
          Sign up
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
            className="bg-white rounded-lg p-2 "
            placeholder="Enter your full name"
            value={fullname}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            keyboardType="default"
            onChangeText={(text) => setFullname(text)}
          />
        </View>
        <View className="space-y-[1]">
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-[#4E1703]"
          >
            Email
          </Text>
          <TextInput
            style={{ fontFamily: "Poppins_500Medium" }}
            className="bg-white rounded-lg p-2 "
            placeholder="Enter your email"
            value={email}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
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
            className="bg-white rounded-lg p-2 "
            placeholder="Enter your password"
            value={password}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
      <View className="place-items-end items-center mt-6">
        <TouchableOpacity
          onPress={() => {
            register();
          }}
          disabled={loading}
          className="bg-[#4E1703] rounded-2xl px-[100] py-4"
        >
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-center text-white text-2xl"
          >
            {loading ? "Loading" : "Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
