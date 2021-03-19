import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TabRoutes from "./TabRoutes";
import navigationString from "../constants/navigationString"
const Stack=createStackNavigator();

export default function(){


    return(
      <>
      <Stack.Screen
        name={navigationString.TAB_ROUTES}
        options={{
          headerShown:false
        }}
        component={TabRoutes}
      />
      
        </>
    )
  }
