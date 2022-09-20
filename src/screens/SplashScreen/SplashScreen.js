import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Spinner from 'react-native-spinkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);

      setTimeout(async () => {
        const isOnboarding = await AsyncStorage.getItem('isOnboarding');
        if (isOnboarding) {
          navigation.replace('MainScreen');
        } else {
          navigation.replace('OnboardingScreen');
        }
      }, 2000);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Spinner
        style={styles.spinner}
        isVisible={isVisible}
        size={50}
        type={'FadingCircleAlt'}
        color={'#1687D1'}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 252,
    height: 266,
  },
  spinner: {
    position: 'absolute',
    bottom: 32,
  },
});
