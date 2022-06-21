import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthenticationRoutes } from "../Components/Navigation";
export { Text, Box } from "../Theme";

import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import OnBoarding from "./OnBoarding";
import Welcome from "./Welcome";
import PasswordChanged from "./PasswordChanged";

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();
export const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator
    headerMode="none"
    initialRouteName="OnBoarding"
  >
    <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Login" component={Login} />
    <AuthenticationStack.Screen name="SignUp" component={SignUp} />
    <AuthenticationStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
    />
    <AuthenticationStack.Screen
      name="PasswordChanged"
      component={PasswordChanged}
    />
  </AuthenticationStack.Navigator>
);
