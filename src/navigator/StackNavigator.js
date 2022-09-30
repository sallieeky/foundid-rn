import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import MainScreen from '../screens/MainScreen/MainScreen';
import MapScreen from '../screens/MapScreen/MapScreen';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import ListAllItemScreen from '../screens/ListAllItemScreen/ListAllItemScreen';
import DetailPostinganScreen from '../screens/DetailPostinganScreen/DetailPostinganScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ListAllItem" component={ListAllItemScreen} />
      <Stack.Screen
        name="DetailPostinganScreen"
        component={DetailPostinganScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
