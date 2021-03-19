


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
import colors from "../../styles/colors";
import Textinput from "../../Components/Textinput";





export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  onButtonPress = () => {
    this.props.navigation.navigate(navigationString.LOGIN);
  };

  render() {
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.loginScreen}>
        <View style={{flexDirection:'row',marginBottom:10}}>
              <TouchableOpacity onPress={this.onButtonPress}>
          <Text style={{fontStyle:'bold', fontSize:30, marginLeft:10 }}>Sign Up</Text>
          </TouchableOpacity>
<Image  style={{height:30,width:30,marginLeft:'auto', marginRight:10, marginTop:10}} source={imagePath.cancel}/>
          </View>
          
          
        </View>
        <View style={{margin:20}}>
              <Text>Your number is safe with us. We won't share your details with anyone.</Text>
          </View>
          <View>
              <Text style={{color:"#36b6b0", margin:20}}>Mobile number</Text>
          </View>
          <View>
            <Textinput style={{}}/>
          </View>
          <View>
            <Button buttonName="Sign Up" />
          </View>
          <View style={{flexDirection:'row', margin:20}}>
              <Text> By signing up you agree to our </Text>
              <Text style={{color:colors.textcolor}}>Terms & Conditions</Text>
              
          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text>OR</Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.viewfacebook} >
            <Button buttonName="Facebook"  style={{ width:150,backgroundColor:'white',  }} textbtn={{color:"blue" }} />
            </View>
            <View style={styles.viewgoogle}>
             <Button buttonName="Google" style={{width:150, backgroundColor:'white'}} textbtn={{color:"red" }}/>
          </View>
          </View>
          <View style={{flexDirection:"row",justifyContent:'center'}}>
            <Text>Already have an account ?</Text>
            <TouchableOpacity onPress={this.onButtonPress}>
            <Text style={{color:colors.textcolor, marginLeft:10}}>Log In</Text>
            </TouchableOpacity>
          </View>
       
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loginScreen: {
    
    backgroundColor: "#ffffff",
    borderWidth:2,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 5,
borderColor:"white"




    
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
  viewfacebook:{
    flexDirection:'row', justifyContent:'space-between',
     marginTop:30, 
     marginBottom:30, 
     borderWidth:1, 
     marginLeft:20,
      borderColor:'blue',
      borderTopLeftRadius:5,
      borderTopRightRadius:5,
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
  },
  viewgoogle:{
    flexDirection:'row',
     justifyContent:'space-between',
      marginTop:30, 
      marginBottom:30,
       borderWidth:1,
       marginRight:20,borderColor:'red',
       borderTopLeftRadius:5,
       borderTopRightRadius:5,
       borderBottomLeftRadius:5,
       borderBottomRightRadius:5,
  }
});