import { View, Text, ScrollView, SafeAreaView, TextInput } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import CoopListCard from "../components/CoopListCard";
const CoopListScreen = () => {
  const {
    params: { id, imgUrl, title, rating, address, short_description },
  } = useRoute();
  return (
    <View className="bg-[#EFDEBE] pt-8  flex-1">
      <ScrollView>
        <SafeAreaView>
          {/* Header */}

          <View className="mt-4  items-center justify-between px-4">
            <Text className="font-bold text-lg text-[#4E1703]">{title}</Text>
          </View>
          <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1  p-3 space-x-2  bg-white border-black mt-2 rounded-lg ">
              <MagnifyingGlassIcon color="gray" size={20} />
              <TextInput
                placeholder="coop list "
                keyboardType="default"
                className="flex-1"
              />
            </View>
            <AdjustmentsVerticalIcon color="#7B420E" size={20} />
          </View>
        </SafeAreaView>

        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          showsHorizontalScrollIndicator={false}
          className="pt-4 "
        >
          {/* Coop  Cards... */}
          <CoopListCard
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
          <CoopListCard
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
          <CoopListCard
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
      </ScrollView>
    </View>
  );
};

export default CoopListScreen;
