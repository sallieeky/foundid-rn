import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {globalFont} from '../../../assets/style/globalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreenFourth = ({route, navigation}) => {
  const {data} = route.params;

  useEffect(() => {
    setUser();
  }, []);

  const setUser = async () => {
    try {
      await AsyncStorage.setItem('user_id', JSON.stringify(data.id));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View
      style={{
        paddingHorizontal: 32,
        backgroundColor: '#ffffff',
        height: '100%',
        justifyContent: 'center',
      }}>
      <Text style={{...globalFont.bold, fontSize: 24, marginBottom: 16}}>
        HAI {data.nama}
      </Text>
      <Text style={{...globalFont.bold, fontSize: 24}}>
        Selamat Bergabung di
      </Text>
      <Text style={{...globalFont.bold, fontSize: 24, color: '#1687D1'}}>
        Found.id
      </Text>
      <Image source={require('../../../assets/images/register_4.png')} />
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: '#1687D1',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          marginTop: 48,
          paddingVertical: 16,
        }}
        onPress={() => navigation.replace('MainScreen')}>
        <Text style={{...globalFont.bold, color: '#FFFFFF'}}>
          Mulai Sekarang
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreenFourth;
