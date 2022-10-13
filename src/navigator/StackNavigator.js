import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import MainScreen from '../screens/MainScreen/MainScreen';
import MapScreen from '../screens/MapScreen/MapScreen';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreenFirst from '../screens/RegisterScreen/RegisterScreenFirst/RegisterScreenFirst';
import ListAllItemScreen from '../screens/ListAllItemScreen/ListAllItemScreen';
import DetailPostinganScreen from '../screens/DetailPostinganScreen/DetailPostinganScreen';
import TesScreen from '../screens/TesScreen';
import RegisterScreenSecond from '../screens/RegisterScreen/RegisterScreenSecond/RegisterScreenSecond';
import RegisterScreenThird from '../screens/RegisterScreen/RegisterScreenThird/RegisterScreenThird';
import RegisterScreenFourth from '../screens/RegisterScreen/RegisterScreenFourth/RegisterScreenFourth';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      {/* TES */}
      <Stack.Screen name="TesScreen" component={TesScreen} />
      {/* ENDTES */}
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {/* REGISTER */}
      <Stack.Screen
        name="RegisterScreenFirst"
        component={RegisterScreenFirst}
      />
      <Stack.Screen
        name="RegisterScreenSecond"
        component={RegisterScreenSecond}
      />
      <Stack.Screen
        name="RegisterScreenThird"
        component={RegisterScreenThird}
      />
      <Stack.Screen
        name="RegisterScreenFourth"
        component={RegisterScreenFourth}
      />
      {/*  */}
      <Stack.Screen name="ListAllItem" component={ListAllItemScreen} />
      <Stack.Screen
        name="DetailPostinganScreen"
        component={DetailPostinganScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
