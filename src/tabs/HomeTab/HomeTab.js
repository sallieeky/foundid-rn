import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeTab = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontFamily: 'Frijole-Regular', fontSize: 24}}>HomeTab</Text>
      <Icon name="rocket" size={30} color="#900" />
      <Button
        title="Halaman Maps"
        onPress={() => navigation.push('MapScreen')}
      />
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
