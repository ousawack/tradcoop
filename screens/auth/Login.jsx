import React, { useState } from "react";
import { supabase } from "../../src/initSupabase";

///////////

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import SignIn from "../../assets/SignIn.png";

///////////

export default function ({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function login() {
    setLoading(true);
    const { user, error } = await supabase.auth.signIn({
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
        onPress={() => navigation.navigate("Register")}
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
            Email
          </Text>
          <TextInput
            style={{ fontFamily: "Poppins_500Medium" }}
            className="flex-1 bg-white rounded-lg p-2"
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
            className="flex-1 bg-white rounded-lg p-2"
            placeholder="Enter your password"
            value={password}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ForgetPassword");
            }}
          >
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="py-2 self-end text-red-600"
            >
              Forgot password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="place-items-end items-center mt-6">
        <TouchableOpacity
          onPress={() => {
            login();
          }}
          disabled={loading}
          className="bg-[#4E1703] rounded-2xl px-[100] py-4"
        >
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-center text-white text-2xl"
          >
            {loading ? "Loading" : "Sign In"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
