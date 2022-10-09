import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SplashScreen, LoginScreen, CovidTextScreen} from './Pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="CovidTextScreen">
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} />
      <Stack.Screen 
        name="SplashScreen" 
        component={SplashScreen} 
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="CovidTextScreen" 
        component={CovidTextScreen} 
        options={{title: "COVID -19 Test Results", headerShown: true, headerBackTitleVisible: false}}/>
    </Stack.Navigator>
  );
};