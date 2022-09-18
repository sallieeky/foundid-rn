import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../tabs/HomeTab/HomeTab';
import ProfileTab from '../tabs/ProfileTab/ProfileTab';
import SearchTab from '../tabs/SearchTab/SearchTab';
import AddTab from '../tabs/AddTab/AddTab';
import HistoryTab from '../tabs/HistoryTab/HistoryTab';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: '#e32f45',
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
          bottom: 12,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 56,
          ...styles.shadow,
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
                color={focused ? '#8a7ce1' : '#748c94'}
                size={size}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#8a7ce1' : '#748c94'}}>
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
                color={focused ? '#8a7ce1' : '#748c94'}
                size={size}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#8a7ce1' : '#748c94'}}>
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
            <IonIcons name="ios-add" color={'#ffffff'} size={size} />
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
                color={focused ? '#8a7ce1' : '#748c94'}
                size={size}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#8a7ce1' : '#748c94'}}>
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
                color={focused ? '#8a7ce1' : '#748c94'}
                size={size}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#8a7ce1' : '#748c94'}}>
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
