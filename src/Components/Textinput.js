import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
  
} from "react-native";
import colors from "../styles/colors";


export default function Textinput(props) {
    const { style} = props;
 
  return (
   <View>
       <TextInput style={styles.textinput}/>
   </View>
  );
}

const styles = StyleSheet.create({
   textinput:{ borderWidth:1, 
   borderBottomColor:colors.textcolor , 
    borderTopColor:'white', 
   borderLeftColor:'white',
    borderRightColor:'white',
    margin:20,

   }

});
