


import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image
} from "react-native";
import imagePath from "../../constants/imagePath";
import navigationString from "../../constants/navigationString";

import Button from "../../Components/Button";
import Textinput from "../../Components/Textinput";



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  onButtonPress = () => {
    this.props.navigation.navigate(navigationString.TAB_ROUTES);
  };

  
  render() {
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.loginScreen}>
           
         
         
         <View style={{flexDirection:'row', justifyContent:'center'}}>
           <Text style={{fontSize:40}}>OTP verification</Text>
         </View>
         <View style={{flexDirection:'row', marginLeft:30}}>
           <Textinput/>
           <Textinput/>
           <Textinput/>
           <Textinput/>
         </View>
         <View style={{margin:20, marginTop:50}}>
           <Text>Enter the OTP sent to your registered email and phone number</Text>
         </View>
         
         <View>
           <Button buttonName="Verify account" onButtonPress={this.onButtonPress}/>
         </View>
       
         
         
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop:20
  },
  forFlex: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  ajioLogo: {
    width: 80,
    height: 80,
  },
  fbLogo: {
    width: 20,
    height: 20,
  },
  googleLogo: {
    width: 30,
    height: 30,
  },
  forForm: {
    flex: 0.6,
    alignItems: "center",
  },
  orThing: {
    flexDirection: "row",
  },
  buttonStyle: {
    borderWidth: 1,
    padding: 15,
    width: 250,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  fbbuttonStyle: {
    borderWidth: 1,
    padding: 15,
    width: 250,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  googlebuttonStyle: {
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
});
