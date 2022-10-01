import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import CoopListCard from "../components/CoopListCard";
import sanityClient, { urlFor } from "../sanity";
import { useState, useEffect } from "react";

const CoopListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [Cooperatives, setCooperatives] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
            *[_type =="cooperative"]{
              ...,
            }
        `
      )
      .then((data) => {
        setCooperatives(data);
      });
  }, []);
  return (
    <View className="bg-[#EFDEBE] pt-8  flex-1">
      <ScrollView>
        <SafeAreaView>
          {/* Header */}
          <View className="flex-row items-center space-x-2 pb-4 mx-4">
            <View className="flex-row flex-1 p-3 pb-2 space-x-2 bg-white border border-[#7B420E] mt-2 rounded-lg ">
              <MagnifyingGlassIcon color="#7B420E" size={20} />
              <TextInput
                style={{ fontFamily: "Poppins_600SemiBold" }}
                placeholder="Search for cooperatives..."
                keyboardType="default"
                className="flex-1 text-[#7B420E]"
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("UserProfile")}
              className="left-1 top-1"
            >
              <UserCircleIcon color="#7B420E" size={35} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
          showsHorizontalScrollIndicator={false}
          className="pt-2"
        >
          {/* Coop  Cards... */}
          {Cooperatives?.map((cooperative) => (
            <CoopListCard
              key={cooperative._id}
              id={cooperative._id}
              imgUrl={urlFor(cooperative.image).url()}
              title={cooperative.name}
              rating={cooperative.rating}
              address={cooperative.address}
              short_description={cooperative.short_description}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default CoopListScreen;
