import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import CoopCard from "./CoopCard";
import { useNavigation } from "@react-navigation/native";
const CoopRow = ({
  id,
  title,
  description,
  rating,
  imgUrl,
  address,
  short_description,
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CoopList", {
            title,
            id,
            imgUrl,
            title,
            rating,
            address,
            short_description,
          })
        }
      >
        <View className="mt-4 flex-row items-center justify-between px-4">
          <Text className="font-bold text-lg text-[#4E1703]">{title}</Text>
          <ArrowRightIcon color="#C3700D" />
        </View>
      </TouchableOpacity>
      <Text className="text-xs text-[#7B420E] px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4 "
      >
        {/* Coop  Cards... */}
        <CoopCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Cooperative Timdokkals"
          rating={4}
          genre="Morocco"
          address="Agadir"
          short_description="Cooperative Timdokkals is one of the original cooperatives of the Ait
          Bouguemez valley. we are located at the heart of the Azilal province,
          we make some of the best, most consistent Azilal rugs today."
          long={20}
          lat={0}
        />
        <CoopCard
          id={1234}
          imgUrl="https://links.papareact.com/gn7"
          title="Coop jbira"
          rating={3}
          genre="Morocco"
          address="Agadir"
          short_description="this is a test description2"
          long={20}
          lat={0}
        />
        <CoopCard
          id={12345}
          imgUrl="https://links.papareact.com/gn7"
          title="Coop Bal3oune"
          rating={2}
          genre="Morocco"
          address="Agadir"
          short_description="this is a test description3"
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default CoopRow;
