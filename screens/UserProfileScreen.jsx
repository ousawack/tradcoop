import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import UserProfile from "../assets/UserProfile.png";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../src/initSupabase";

const UserProfileScreen = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      let { data, error, status } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setAvatarUrl(data.avatar_url);
        setFullname(data.full_name);
        setAddress(data.address);
        setCountry(data.country);
        setCity(data.city);
        setRegion(data.region);
        setZipcode(data.zip_code);
        setPhonenumber(data.phone_number);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-[#EFDEBE] pt-5">
      {/* <View className="px-8 pb-5 space-y-2">
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-2xl text-[#4E1703]"
        >
          My account
        </Text>
      </View>
      <View className="items-center my-10">
        <Image
          source={UserProfile}
          style={{ width: 100, height: 100 }}
          className="rounded-full"
        />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="mt-6 text-xl text-[#4E1703]"
        >
          {fullname}
        </Text>
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="mt-2 text-sm text-[#7B420E]"
        >
          {address}
        </Text>
      </View> */}
      <View className="space-y-2">
        <View className="border-y border-[#C3700D] px-10">
          <TouchableOpacity
            onPress={() => navigation.navigate("UserOrders")}
            className="flex-row py-8 space-x-6 items-center"
          >
            <Feather name="package" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              My orders
            </Text>
          </TouchableOpacity>
        </View>
        <View className="border-y border-[#C3700D] divide-y divide-[#C3700D]">
          <TouchableOpacity
            onPress={() => navigation.navigate("UserDetails")}
            className="flex-row py-8 px-10 space-x-6 items-center"
          >
            <FontAwesome name="id-card-o" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              My details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserAddressBook")}
            className="flex-row py-8 px-10 space-x-6 items-center"
          >
            <FontAwesome5 name="house-user" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              Address book
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserPaymentMethods")}
            className="flex-row py-8 px-10 space-x-6 items-center"
          >
            <MaterialIcons name="payment" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              Payment methods
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserNotifications")}
            className="flex-row py-8 px-10 space-x-6 items-center"
          >
            <FontAwesome name="bell-o" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              Notifications
            </Text>
          </TouchableOpacity>
        </View>
        <View className="border-y border-[#C3700D] px-10">
          <TouchableOpacity
            onPress={() => navigation.navigate("FAQ")}
            className="flex-row py-8 space-x-6 items-center"
          >
            <FontAwesome5 name="question-circle" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              FAQ
            </Text>
          </TouchableOpacity>
        </View>
        <View className="border-y border-[#C3700D] px-10 mb-10">
          <TouchableOpacity
            onPress={async () => {
              const { error } = await supabase.auth.signOut();
              if (!error) {
                alert("Signed out!");
              }
              if (error) {
                alert(error.message);
              }
            }}
            className="flex-row py-8 space-x-6 items-center"
          >
            <AntDesign name="logout" size={30} color="#4E1703" />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg text-[#4E1703]"
            >
              Sign out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;
