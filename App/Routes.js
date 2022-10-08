import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SplashScreen, LoginScreen} from './Pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};