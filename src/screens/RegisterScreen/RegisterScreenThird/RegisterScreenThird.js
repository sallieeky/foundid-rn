import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import FormInput from '../components/FormInput/FormInput';
import styles from './RegisterScreenThirdStyle';
import API from '../../../config/api';
import Spinner from 'react-native-spinkit';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';

const RegisterScreenThird = ({route, navigation}) => {
  const {data} = route.params;
  const [formData, setFormData] = useState({
    ...data,
    foto: null,
    namaLengkap: null,
    noTelp: null,
    noWa: null,
    instagram: null,
  });
  const [formDataError, setFormDataError] = useState({
    foto: null,
    namaLengkap: null,
    noTelp: null,
    noWa: null,
    instagram: null,
  });

  const [fp, setFp] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const setState = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const chooseFile = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 1600,
      maxHeight: 900,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setFp(response.uri);
    });
  };

  const onPressNext = async () => {
    setIsLoading(true);
    try {
      const response = await API.post('/auth/register/third', formData);
      setFormDataError(response.data);
      response.data.status === true &&
        navigation.replace('RegisterScreenFourth', {data: formData});
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
        <View style={styles.fpContainer}>
          <Pressable style={styles.fp} onPress={chooseFile}>
            {fp ? (
              <Image
                source={{uri: fp}}
                style={{width: '100%', height: '100%'}}
              />
            ) : (
              <MaterialCommunityIcons
                name="upload-outline"
                size={40}
                color={'#4A4B4D'}
              />
            )}
          </Pressable>
          <Text style={styles.fpTitle}>Pilih Foto Profile</Text>
        </View>
        <FormInput
          label={'Nama Lengkap'}
          placeholder={'Masukkan Nama Lengkap'}
          value={formData.namaLengkap}
          error={formDataError.namaLengkap && formDataError.namaLengkap[0]}
          objKey="namaLengkap"
          setState={setState}
        />

        <FormInput
          label={'Nomor Telepon'}
          placeholder={'Masukkan Nomor Telepon'}
          value={formData.noTelp}
          error={formDataError.noTelp && formDataError.noTelp[0]}
          objKey="noTelp"
          setState={setState}
          keyboardType="number-pad"
        />

        <FormInput
          label={'Nomor WhatsApp'}
          placeholder={'Masukkan Nomor WhatsApp'}
          value={formData.noWa}
          error={formDataError.noWa && formDataError.noWa[0]}
          objKey="noWa"
          setState={setState}
          keyboardType="number-pad"
        />

        <FormInput
          label={'Instagram'}
          placeholder={'Masukkan Instagram'}
          value={formData.instagram}
          error={formDataError.instagram && formDataError.instagram[0]}
          objKey="instagram"
          setState={setState}
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

      <Pressable style={styles.btnKembali} onPress={() => navigation.goBack()}>
        <Text style={styles.btnKembaliText}>Kembali</Text>
      </Pressable>
    </View>
  );
};

export default RegisterScreenThird;
