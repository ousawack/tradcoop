// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import FirstOnBoarding from "./screens/FirstOnBoarding";
// import SecondOnBoarding from "./screens/SecondOnBoarding";
// import ThirdOnBoarding from "./screens/ThirdOnBoarding";
// import SignUpScreen from "./screens/SignUpScreen";
// import SignInScreen from "./screens/SignInScreen";
// import PhoneNumberScreen from "./screens/PhoneNumberScreen";
// import PhoneVerificationScreen from "./screens/PhoneVerificationScreen";
// import CategoriesScreen from "./screens/CategoriesScreen";
// import CoopScreen from "./screens/CoopScreen";
// import CoopListScreen from "./screens/CoopListScreen";
// import UserProfileScreen from "./screens/UserProfileScreen";
// import UserDetailsScreen from "./screens/UserDetailsScreen";
// import HomeScreen from "./screens/HomeScreen";
// import UserOrdersScreen from "./screens/UserOrdersScreen";
// import UserAddressBookScreen from "./screens/UserAddressBookScreen";
// import UserPaymentMethodsScreen from "./screens/UserPaymentMethodsScreen";
// import UserNotificationsScreen from "./screens/UserNotificationsScreen";
// import FAQScreen from "./screens/FAQScreen";
// import CheckoutScreen from "./screens/CheckoutScreen";
// import PaymentScreen from "./screens/PaymentScreen";
// import { Provider } from "react-redux";
// import { store } from "./store";
// import BasketScreen from "./screens/BasketScreen";
// import ProductListScreen from "./screens/ProductListScreen";
// import ProductDetailsScreen from "./screens/ProductDetailsScreen";

// export default function App() {
//   const Stack = createNativeStackNavigator();

//   return (
//     <NavigationContainer>
//       <Provider store={store}>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="FOB"
//             component={FirstOnBoarding}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="SOB"
//             component={SecondOnBoarding}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="TOB"
//             component={ThirdOnBoarding}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="SignUp"
//             component={SignUpScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="SignIn"
//             component={SignInScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Coop"
//             component={CoopScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="CoopList"
//             component={CoopListScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="PhoneNumber"
//             component={PhoneNumberScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="PhoneVerification"
//             component={PhoneVerificationScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Categories"
//             component={CategoriesScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="UserProfile"
//             component={UserProfileScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="UserDetails"
//             component={UserDetailsScreen}
//             options={{ presentation: "modal", headerShown: false }}
//           />
//           <Stack.Screen
//             name="UserOrders"
//             component={UserOrdersScreen}
//             options={{ presentation: "modal", headerShown: false }}
//           />
//           <Stack.Screen
//             name="UserAddressBook"
//             component={UserAddressBookScreen}
//             options={{ presentation: "modal", headerShown: false }}
//           />
//           <Stack.Screen
//             name="UserPaymentMethods"
//             component={UserPaymentMethodsScreen}
//             options={{ presentation: "modal", headerShown: false }}
//           />
//           <Stack.Screen
//             name="UserNotifications"
//             component={UserNotificationsScreen}
//             options={{ presentation: "modal", headerShown: false }}
//           />
//           <Stack.Screen
//             name="FAQ"
//             component={FAQScreen}
//             options={{ presentation: "modal", headerShown: false }}
//           />
//           <Stack.Screen
//             name="Checkout"
//             component={CheckoutScreen}
//             options={{ presentation: "modal", headerShown: false }}
//           />
//           <Stack.Screen
//             name="Payment"
//             component={PaymentScreen}
//             options={{ presentation: "modal", headerShown: false }}
//           />
//           <Stack.Screen
//             name="Basket"
//             component={BasketScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="ProductList"
//             component={ProductListScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="ProductDetails"
//             component={ProductDetailsScreen}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       </Provider>
//     </NavigationContainer>
//   );
// }

import React from "react";
import { ThemeProvider } from "react-native-rapi-ui";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/provider/AuthProvider";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  const images = [
    require("./assets/SignIn.png"),
    require("./assets/SignUp.png"),
    require("./assets/SignIn.png"),
  ];
  return (
    <ThemeProvider images={images}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </ThemeProvider>
  );
}
