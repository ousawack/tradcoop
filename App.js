import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstOnBoarding from "./screens/FirstOnBoarding";
import SecondOnBoarding from "./screens/SecondOnBoarding";
import ThirdOnBoarding from "./screens/ThirdOnBoarding";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import PhoneNumberScreen from "./screens/PhoneNumberScreen";
import PhoneVerificationScreen from "./screens/PhoneVerificationScreen";
import HomeScreen from "./screens/HomeScreen";
import CoopScreen from "./screens/CoopScreen";
import CoopListScreen from "./screens/CoopListScreen";

import HomeScreen from "./screens/HomeScreen";
import CoopScreen from "./screens/CoopScreen";
import CoopListScreen from "./screens/CoopListScreen";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FOB"
          component={FirstOnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SOB"
          component={SecondOnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TOB"
          component={ThirdOnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen} 
          />
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Coop"
          component={CoopScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CoopList"
          component={CoopListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PhoneNumber"
          component={PhoneNumberScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PhoneVerification"
          component={PhoneVerificationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
