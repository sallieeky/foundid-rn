import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import FormInput from '../components/FormInput/FormInput';
import styles from './RegisterScreenSecondStyle';
import API from '../../../config/api';

const RegisterScreenSecond = ({navigation}) => {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    password: '',
    konfirmasiPassword: '',
  });
  const [formDataError, setFormDataError] = useState({
    namaLengkap: '',
    email: '',
    password: '',
    konfirmasiPassword: '',
  });

  const setState = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const onPressNext = async () => {
    const response = await API.post('/auth/register/first', formData);
    setFormDataError(response.data);
    response.data === true &&
      navigation.push('RegisterScreenSecond', {data: formData});
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
          label={'Nama Lengkap'}
          placeholder={'Masukkan Nama Lengkap'}
          value={formData.namaLengkap}
          error={formDataError.namaLengkap && formDataError.namaLengkap[0]}
          objKey="namaLengkap"
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
        <Text style={styles.buttonText}>Selanjutnya</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreenSecond;
