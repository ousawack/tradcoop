import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import ToggleSwitch from "toggle-switch-react-native";

const UserNotificationsScreen = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState(false);
  const handleNotifications = () => {
    setNotifications((s) => !s);
  };

  return (
    <ScrollView className="flex-1 bg-[#EFDEBE] pt-10">
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
              isOn={notifications}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleNotifications}
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
              isOn={notifications}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleNotifications}
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
              isOn={notifications}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleNotifications}
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
              isOn={notifications}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleNotifications}
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
              isOn={notifications}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleNotifications}
            />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default UserNotificationsScreen;
