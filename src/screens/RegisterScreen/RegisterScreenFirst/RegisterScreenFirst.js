import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import FormInput from '../components/FormInput/FormInput';
import styles from './RegisterScreenFirstStyle';
import API from '../../../config/api';
import Spinner from 'react-native-spinkit';

const RegisterScreenFirst = ({navigation}) => {
  const [formData, setFormData] = useState({
    username: null,
    email: null,
    password: null,
    konfirmasiPassword: null,
  });
  const [formDataError, setFormDataError] = useState({
    username: null,
    email: null,
    password: null,
    konfirmasiPassword: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const setState = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const onPressNext = async () => {
    setIsLoading(true);
    try {
      const response = await API.post('/auth/register/first', formData);
      setFormDataError(response.data);
      response.data.status === true &&
        navigation.push('RegisterScreenSecond', {data: formData});
    } catch (e) {
      Alert.alert(
        'Gagal Terhubung',
        'Gagal terhubung ke internet, periksa jaringan internet anda',
      );
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={8}>
        <Text style={styles.title}>
          Buat Akun{' '}
          <Text style={{...styles.title, color: '#1687D1'}}>Found.Id</Text>
        </Text>
        <Text style={styles.subTitle}>Silakan mengisi data berikut</Text>
        <FormInput
          label={'Username'}
          placeholder={'Masukkan Username'}
          value={formData.username}
          error={formDataError.username && formDataError.username[0]}
          objKey="username"
          setState={setState}
        />

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

        <FormInput
          label={'Konfirmasi Passsword'}
          placeholder={'Masukkan Ulang Password'}
          value={formData.konfirmasiPassword}
          error={
            formDataError.konfirmasiPassword &&
            formDataError.konfirmasiPassword[0]
          }
          objKey="konfirmasiPassword"
          setState={setState}
          tipe={'password'}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onPressNext}>
        {isLoading ? (
          <Spinner
            isVisible={isLoading}
            size={16}
            type={'Circle'}
            color={'#FFFFFF'}
          />
        ) : (
          <Text style={styles.buttonText}>Selanjutnya</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreenFirst;
