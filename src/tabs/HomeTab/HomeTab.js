import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeTab = () => {
  return (
    <View>
      <Text style={{fontFamily: 'Frijole-Regular', fontSize: 24}}>HomeTab</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
