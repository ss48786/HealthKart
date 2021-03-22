

import React, { Component } from 'react';
 import Routes from './src/Navigation/Routes';
 import FlashMessage from "react-native-flash-message";


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import store from './src/redux/reducers/store';
import { Provider } from 'react-redux';
import { getUserData } from './src/utils/Utils';







class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      isLoggedin: false
    }
  }
  componentDidMount() {

    getUserData().then(res => {
      if (res) {
        this.setState({
          isLoggedin: true
        })
      }
    }
    )

  }

  render(){
    return(
    
     <Provider store ={store}>
     <Routes/>
     <FlashMessage position="top" />
     </Provider>
   
  //  <View><Text>hkvhggg</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

