import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const FAQScreen = () => {
  const navigation = useNavigation();

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
          FAQ
        </Text>
      </TouchableOpacity>
      <View className="m-10 pb-10 space-y-8">
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            Can I change the shipping address for my order?
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            We will be happy to change the shipping address for you order!
            Please email our Customer Care team by clicking HERE with your order
            number and the updated address ASAP, as we are only able to make
            changes to your order if it has not yet entered the packing process.
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            Can I change the billing address for my order?
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            Oops! Unfortunately, we are unable to edit the billing address once
            an order has been placed. Not to worry! It appears that you were
            able to successfully place your order.
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            Can I change the email address to my order?
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            Yes! Please email our Customer Care team by clicking HERE with your
            order number, original email address, and the updated email address
            so that we may make the changes for you.
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            My package says delivered, but I didn’t receive it.
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            Sometimes USPS tracking information can be incorrect, and packages
            are marked as delivered before they actually arrive – oops! Your
            package will most likely be delivered within a few days, but it’s
            great to check with your neighbors and/or post office for more
            information in the meantime!
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            How are shipping rates calculated?
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            We offer shipping at the following rates: Domestic shipping* Under
            $30 – $5.99 flat rate $30 and over – Free shipping *Within the
            contiguous United States. 2-Day shipping* $15.00 for orders up to
            $100.
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            Do you combine orders?
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            Orders are subject to being automatically combined by our system if
            placed on the same day and shipping to the same address. Please note
            that orders cannot be combined manually by our team, and shipping
            fees for orders that may be combined by our system are
            non-refundable.
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            Why is my order unfulfilled?
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            No need to worry, unfulfilled just means your order is processing
            and has not yet shipped! Once your order ships, it will be marked as
            Fulfilled/Shipped. You'll receive an email with tracking once this
            happens!
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            Do you have a phone number I can contact?
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            We currently don’t have a phone number for customer service
            inquiries, but we recommend taking a look around our Help Center to
            find answers to your questions/concerns.
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            Delayed order confirmation emails
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            Confirmation emails are typically received shortly after an order is
            placed. If you do not receive your confirmation email right away,
            however, don’t fret! Your confirmation email may experience a delay
            if your order was placed during a period of high order volume, such
            as an exciting new launch or promotion.
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            Return Policy
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            Unfortunately, due to the low-cost nature of our products, once an
            order has shipped, we are unable to offer refunds, returns, or
            exchanges. All sales are final. ColourPop reserves the right to
            refuse any returns at any time.
          </Text>
        </View>
        <View className="space-y-2 mr-4">
          <Text
            style={{ fontFamily: "Poppins_700Bold" }}
            className="text-lg text-[#4E1703]"
          >
            I need my refund redirected to a different account.
          </Text>
          <Text
            style={{ fontFamily: "Poppins_600SemiBold" }}
            className="text-sm text-[#4e170367]"
          >
            So sorry for the issue! Unfortunately, we are only able to issue a
            refund to the original point of purchase for the order. Please reach
            out to your bank for more information on how to reroute the funds to
            the correct account.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default FAQScreen;
