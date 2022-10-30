import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import ToggleSwitch from "toggle-switch-react-native";

const UserNotificationsScreen = () => {
  const navigation = useNavigation();
  const [discountNotifications, setDiscountNotifications] = useState(false);
  const handleDiscountNotifications = () => {
    setDiscountNotifications((s) => !s);
  };
  const [newNotifications, setNewNotifications] = useState(false);
  const handleNewNotifications = () => {
    setNewNotifications((s) => !s);
  };
  const [exclusiveNotification, setExclusiveNotification] = useState(false);
  const handleExclusiveNotification = () => {
    setExclusiveNotification((s) => !s);
  };
  const [stockNotification, setStockNotification] = useState(false);
  const handleStockNotification = () => {
    setStockNotification((s) => !s);
  };
  const [orderNotification, setOrderNotification] = useState(false);
  const handleOrderNotification = () => {
    setOrderNotification((s) => !s);
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
          <View className="space-y-2 mr-6 w-52">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-xl text-[#4E1703]"
            >
              Discounts and sales
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4e170367]"
            >
              Be first in line to nab the stuff you love for less.
            </Text>
          </View>
          <View className="justify-center">
            <ToggleSwitch
              isOn={discountNotifications}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleDiscountNotifications}
            />
          </View>
        </View>
        <View className="flex-row">
          <View className="space-y-2 mr-6 w-52">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-xl text-[#4E1703]"
            >
              New stuff
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4e170367]"
            >
              New drops, news and cultural informations; hear it first,
              experience it first.
            </Text>
          </View>
          <View className="justify-center">
            <ToggleSwitch
              isOn={newNotifications}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleNewNotifications}
            />
          </View>
        </View>
        <View className="flex-row">
          <View className="space-y-2 mr-6 w-52">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-xl text-[#4E1703]"
            >
              Your exclusives
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4e170367]"
            >
              Enjoy a birthday treat, as well as tailord rewards and account
              updates.
            </Text>
          </View>
          <View className="justify-center">
            <ToggleSwitch
              isOn={exclusiveNotification}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleExclusiveNotification}
            />
          </View>
        </View>
        <View className="flex-row">
          <View className="space-y-2 mr-6 w-52">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-xl text-[#4E1703]"
            >
              Stock notifications
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4e170367]"
            >
              If that product you're into comes back in stock, get a heads-up so
              you can add to bag pronto.
            </Text>
          </View>
          <View className="justify-center">
            <ToggleSwitch
              isOn={stockNotification}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleStockNotification}
            />
          </View>
        </View>
        <View className="flex-row">
          <View className="space-y-2 mr-6 w-52">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-xl text-[#4E1703]"
            >
              Order & return updates
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-sm text-[#4e170367]"
            >
              We'll keep you updated on the status of your order.
            </Text>
          </View>
          <View className="justify-center">
            <ToggleSwitch
              isOn={orderNotification}
              onColor="#4e1703b7"
              offColor="#4e170352"
              size="medium"
              onToggle={handleOrderNotification}
            />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default UserNotificationsScreen;
