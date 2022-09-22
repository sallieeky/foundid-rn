import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../tabs/HomeTab/HomeTab';
import ProfileTab from '../tabs/ProfileTab/ProfileTab';
import SearchTab from '../tabs/SearchTab/SearchTab';
import AddTab from '../tabs/AddTab/AddTab';
import HistoryTab from '../tabs/HistoryTab/HistoryTab';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <View
        style={{
          width: 60,
          height: 60,
          bottom: 16,
          borderWidth: 1,
          borderRadius: 30,
          borderColor: '#fff',
          backgroundColor: '#fff',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

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
                color={focused ? '#1687D1' : '#9C9C9C'}
                size={size}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#1687D1' : '#9C9C9C'}}>
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
                color={focused ? '#1687D1' : '#9C9C9C'}
                size={size}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#1687D1' : '#9C9C9C'}}>
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
                backgroundColor: '#1687D1',
                padding: 12,
                borderRadius: size,
              }}>
              <AntDesign name="plus" color="#FFF" size={size} />
            </View>
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
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
                color={focused ? '#1687D1' : '#9C9C9C'}
                size={size}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#1687D1' : '#9C9C9C'}}>
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
                color={focused ? '#1687D1' : '#9C9C9C'}
                size={size}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#1687D1' : '#9C9C9C'}}>
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
