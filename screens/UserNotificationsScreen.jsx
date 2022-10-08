import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import ToggleSwitch from "toggle-switch-react-native";

const UserNotificationsScreen = () => {
  const navigation = useNavigation();
  const [notification1, setNotification1] = useState(false);
  const handleNotification1 = () => {
    setNotification1((s) => !s);
  };
  const [notification2, setNotification2] = useState(false);
  const handleNotification2 = () => {
    setNotification2((s) => !s);
  };
  const [notification3, setNotification3] = useState(false);
  const handleNotification3 = () => {
    setNotification3((s) => !s);
  };
  const [notification4, setNotification4] = useState(false);
  const handleNotification4 = () => {
    setNotification4((s) => !s);
  };
  const [notification5, setNotification5] = useState(false);
  const handleNotification5 = () => {
    setNotification5((s) => !s);
  };

  return (
    <ScrollView className="flex-1 bg-[#EFDEBE] pt-5">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex-row items-end px-8 space-y-2 space-x-2"
      >
        <ChevronLeftIcon size={35} color="#4E1703" />
        <Text
          style={{ fontFamily: "Poppins_700Bold" }}
          className="text-2xl text-[#4E1703]"
        >
          Notifications
        </Text>
      </TouchableOpacity>
      <ScrollView className="m-10 pb-10 space-y-8">
        <View className="flex-row">
          <View className="space-y-2 mr-8">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-xl text-[#4E1703]"
            >
              Title
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4e170367]"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
          <View className="justify-center">
            <ToggleSwitch
              isOn={notification1}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleNotification1}
            />
          </View>
        </View>
        <View className="flex-row">
          <View className="space-y-2 mr-8">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-xl text-[#4E1703]"
            >
              Title
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4e170367]"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
          <View className="justify-center">
            <ToggleSwitch
              isOn={notification2}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleNotification2}
            />
          </View>
        </View>
        <View className="flex-row">
          <View className="space-y-2 mr-8">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-xl text-[#4E1703]"
            >
              Title
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4e170367]"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
          <View className="justify-center">
            <ToggleSwitch
              isOn={notification3}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleNotification3}
            />
          </View>
        </View>
        <View className="flex-row">
          <View className="space-y-2 mr-8">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-xl text-[#4E1703]"
            >
              Title
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4e170367]"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
          <View className="justify-center">
            <ToggleSwitch
              isOn={notification4}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleNotification4}
            />
          </View>
        </View>
        <View className="flex-row">
          <View className="space-y-2 mr-8">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-xl text-[#4E1703]"
            >
              Title
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4e170367]"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
          <View className="justify-center">
            <ToggleSwitch
              isOn={notification5}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleNotification5}
            />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default UserNotificationsScreen;
