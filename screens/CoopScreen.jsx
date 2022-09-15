import { View, Text, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CoopScreen = () => {
  const {
    params: { id, imgUrl, title, rating, address, short_description },
  } = useRoute();
  const totalStars = 5;
  const gainStars = rating;
  return (
    <View className="bg-[#EFDEBE]   flex-1">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-full h-64 p-2 "
      />
      <View className="px-6">
        <Text className="p-5 self-center text-lg font-bold text-[#4E1703]">
          {title}
        </Text>
        <View className=" flex-row justify-left space-x-2 mt-3">
          <Text className="text-lg font-bold  py-0 px-1 text-[#4E1703]">
            Reviews :
          </Text>
          <View className="flex-row">
            {Array.from({ length: gainStars }, (x, i) => {
              return (
                <MaterialIcons key={i} name="star" size={30} color="#FFA000" />
              );
            })}

            {Array.from({ length: totalStars - gainStars }, (x, i) => {
              return (
                <MaterialIcons
                  key={i}
                  name="star-border"
                  size={30}
                  color="#FFA000"
                />
              );
            })}
          </View>
        </View>
        <View className=" mt-7">
          <Text className="text-left text-lg font-bold text-[#4E1703]">
            {" "}
            Description{" "}
          </Text>
          <Text className="py-7 text-center text-[#7B420E]">
            {short_description}
          </Text>
        </View>
        <View className="flex-1 ">
          <Text className="text-left text-lg font-bold self-center text-[#4E1703]">
            Address
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CoopScreen;
