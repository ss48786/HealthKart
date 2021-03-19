import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainStack from "./Mainstack";
import AuthStack from "./AuthStack";
const Stack = createStackNavigator();
Stack.Screen;

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator>{AuthStack(Stack)}
      {MainStack(Stack)}
      </Stack.Navigator>

  
    </NavigationContainer>
  );
}