import {View, Text, TouchableOpacity, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './LoginScreenStyle';
import FormInput from './components/FormInput/FormInput';
import Spinner from 'react-native-spinkit';
import API from '../../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [formData, setFormData] = useState({
    email: null,
    password: null,
  });
  const [formDataError, setFormDataError] = useState({
    email: null,
    password: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [wrong, setWrong] = useState(false);

  const setState = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const onPressLogin = async () => {
    setIsLoading(true);
    try {
      const response = await API.post('/auth/login', formData);
      setFormDataError(response.data);
      if (response.data.status === true) {
        setUser(response.data.data.id);
        navigation.replace('MainScreen');
      } else {
        setWrong(true);
      }
    } catch (e) {
      Alert.alert(
        'Gagal Terhubung',
        'Gagal terhubung ke internet, periksa jaringan internet anda',
      );
    }
    setIsLoading(false);
  };

  const setUser = async id => {
    try {
      await AsyncStorage.setItem('user_id', JSON.stringify(id));
    } catch (e) {
      //
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/login_accent.png')}
        style={styles.imgAccent}
      />
      <Text style={styles.title}>
        Masuk Ke{' '}
        <Text style={{...styles.title, color: '#1687D1'}}>Found.Id</Text>
      </Text>
      <Text style={styles.subTitle}>Silakan isi semua data berikut</Text>

      <FormInput
        label={'Email'}
        placeholder={'Masukkan Alamat Email'}
        value={formData.email}
        error={formDataError.email && formDataError.email[0]}
        objKey="email"
        setState={setState}
        keyboardType="email-address"
      />

      <FormInput
        label={'Password'}
        placeholder={'Masukkan Karakter Minimal 8 Digit'}
        value={formData.password}
        error={formDataError.password && formDataError.password[0]}
        objKey="password"
        setState={setState}
        tipe={'password'}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onPressLogin}>
        {isLoading ? (
          <Spinner
            isVisible={isLoading}
            size={16}
            type={'Circle'}
            color={'#FFFFFF'}
          />
        ) : (
          <Text style={styles.buttonText}>Masuk</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.wrong}>{wrong && 'Email atau password salah'}</Text>

      <Text style={styles.bottomText}>Belum memiliki akun?</Text>
      <Pressable
        style={{alignItems: 'center', marginTop: 8}}
        onPress={() => navigation.navigate('RegisterScreenFirst')}>
        <Text style={styles.daftarAkun}>Daftar Akun</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
