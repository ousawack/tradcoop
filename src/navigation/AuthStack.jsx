import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../screens/auth/Login";
import Register from "../../screens/auth/Register";
import ForgetPassword from "../../screens/auth/ForgetPassword";
// import PhoneNumberScreen from "../../screens/auth/PhoneNumberScreen";
// import PhoneVerificationScreen from "../../screens/auth/PhoneVerificationScreen";

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
      {/* <AuthStack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
      <AuthStack.Screen
        name="PhoneVerification"
        component={PhoneVerificationScreen}
      /> */}
    </AuthStack.Navigator>
  );
};

export default Auth;
