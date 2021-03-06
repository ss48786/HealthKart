


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


import Button from "../../Components/Button";
import Textinput from "../../Components/Textinput";
import navigationString from "../../constants/navigationString";
import store from "../../redux/reducers/store";




export default class Cartpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  // componentDidMount(){
  //   store.subscribe(()=>this.setState({}))
  // }

  // const unsubscribe = store.subscribe(()=>this.setState({}))

  
  render() {
    const {myarray}=store.getState();

    console.log("idhr agya" , myarray) ;

    const unsubscribe = store.subscribe(()=>this.setState({}))
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <View>
            <Image source ={myarray[0].image}
            /> 
        </View> */}
        <View>
          <Text>
            cartpageeeeeee
          </Text>
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
