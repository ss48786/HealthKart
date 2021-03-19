import React,{Fragment} from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import navigationString from "../constants/navigationString";
import TabRoutes from "./TabRoutes"
import Login from "../Screens/Login/Login";
import Signup from "../Screens/Signup/Signup";

const Stack = createStackNavigator();

function AuthStack(Stack) {
  return (
    <Fragment>
      

      
      <Stack.Screen
        name={navigationString.SIGNUP}
        options={{
          headerShown: false,
        }}
        component={Signup}
      />
      <Stack.Screen
        name={navigationString.LOGIN}
        options={{
          headerShown: false,
        }}
        component={Login}
      />

      
    </Fragment>
  );
}

export default AuthStack;
