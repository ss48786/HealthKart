import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainStack from "./Mainstack";
import AuthStack from "./AuthStack";
import FlashMessage from "react-native-flash-message";

const Stack = createStackNavigator();
Stack.Screen;

export default function ({isLoggedin}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       {!isLoggedin && AuthStack(Stack)}
      {MainStack(Stack)}
      </Stack.Navigator>

  
    </NavigationContainer>
  );
}