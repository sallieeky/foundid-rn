import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../tabs/HomeTab/HomeTab';
import ProfileTab from '../tabs/ProfileTab/ProfileTab';
import SearchTab from '../tabs/SearchTab/SearchTab';
import AddTab from '../tabs/AddTab/AddTab';
import HistoryTab from '../tabs/HistoryTab/HistoryTab';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#ffffff',
          height: 64,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarIcon: ({focused, size}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <MaterialCommunityIcons
                name="home"
                color={focused ? '#474A56' : '#C8D1E1'}
                size={size}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#474A56' : '#C8D1E1'}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchTab}
        options={{
          tabBarIcon: ({focused, size}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <MaterialIcons
                name="search"
                color={focused ? '#474A56' : '#C8D1E1'}
                size={size}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#474A56' : '#C8D1E1'}}>
                Search
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddTab"
        component={AddTab}
        options={{
          tabBarIcon: ({focused, size}) => (
            <View
              style={{
                backgroundColor: focused ? '#1687D1' : '#FFF',
                padding: 4,
                borderWidth: 1,
                borderColor: '#1687D1',
                borderRadius: 4,
              }}>
              <IonIcons
                name="ios-add"
                color={focused ? '#FFF' : '#1687D1'}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HistoryTab"
        component={HistoryTab}
        options={{
          tabBarIcon: ({focused, size}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <MaterialCommunityIcons
                name="history"
                color={focused ? '#474A56' : '#C8D1E1'}
                size={size}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#474A56' : '#C8D1E1'}}>
                History
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          tabBarIcon: ({focused, size}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <IonIcons
                name="person"
                color={focused ? '#474A56' : '#C8D1E1'}
                size={size}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#474A56' : '#C8D1E1'}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
