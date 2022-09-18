import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import API from '../../config/api';

const SplashScreen = () => {
  return (
    <View>
      <Text>SplashScreen</Text>
      <Button
        title="Tes"
        onPress={async () => {
          const tes = await API.get('/tes');
          alert(tes.data);
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
