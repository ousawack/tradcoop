import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import CoopCard from "./CoopCard";
import { useNavigation } from "@react-navigation/native";
import sanityClient, { urlFor } from "../sanity";

import { useState, useEffect } from "react";

const CoopRow = ({ id, title, description }) => {
  const navigation = useNavigation();
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
    <View className="mx-2 my-3">
      <TouchableOpacity onPress={() => navigation.navigate("CoopList")}>
        <View className="mt-4 flex-row items-center justify-between px-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-xl text-[#4E1703]"
          >
            {title}
          </Text>
          <ArrowRightIcon color="#C3700D" />
        </View>
      </TouchableOpacity>
      <Text
        style={{ fontFamily: "Poppins_600SemiBold" }}
        className="text-sm text-[#7B420E] px-4"
      >
        {description}
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 5,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {/* Coop  Cards... */}
        {Cooperatives?.map((cooperative) => (
          <CoopCard
            key={cooperative._id}
            id={cooperative._id}
            imgUrl={urlFor(cooperative.image).url()}
            title={cooperative.name}
            rating={cooperative.rating}
            address={cooperative.address}
            short_description={cooperative.short_description}
            long={cooperative.long}
            lat={cooperative.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CoopRow;
