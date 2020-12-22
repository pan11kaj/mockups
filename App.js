import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/Welcome';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Teachers from './Screens/teachersignup';
import Students from './Screens/Students';


export default function App() {
  return (
    <View style={{flex:1}}>
    <AppContainer/>
    </View>
  );
}
const AppNavigator = createSwitchNavigator({
 welcome:WelcomeScreen,
 teacher:Teachers,
 sutdent:Students
})
const AppContainer = createAppContainer(AppNavigator);

