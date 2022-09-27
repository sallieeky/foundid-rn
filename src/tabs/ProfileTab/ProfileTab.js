import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {requestLocationPermission} from '../../config/permission';

const ProfileTab = () => {
  const getLocationPermission = async () => {
    const request = await requestLocationPermission();
    console.log(request);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={getLocationPermission}
        style={{
          marginHorizontal: 24,
          borderWidth: 1,
          borderColor: '#242424',
          paddingHorizontal: 16,
          paddingVertical: 8,
          marginTop: 24,
        }}>
        <Text>Get Location Permission</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({});
