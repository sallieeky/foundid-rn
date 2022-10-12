import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FormInput from '../components/FormInput/FormInput';
import styles from './RegisterScreenSecondStyle';
import API from '../../../config/api';
import {Picker} from '@react-native-picker/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import Spinner from 'react-native-spinkit';

const RegisterScreenSecond = ({route, navigation}) => {
  const {data} = route.params;

  const [formData, setFormData] = useState({
    ...data,
    jenisKelamin: 'Laki-laki',
    nik: '',
    provinsi: '',
    kota: '',
    alamat: '',
    ktp: '',
  });
  const [formDataError, setFormDataError] = useState({
    jenisKelamin: '',
    nik: '',
    provinsi: '',
    kota: '',
    alamat: '',
    ktp: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [fotoKtp, setFotoKtp] = useState();
  const [provinsi, setProvinsi] = useState();
  const [selectedProvinsi, setSelectedProvinsi] = useState();
  const [kota, setKota] = useState();

  useEffect(() => {
    getProvinsi();
  }, []);

  const setState = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const getProvinsi = async () => {
    try {
      const response = await API.get(
        'http://dev.farizdotid.com/api/daerahindonesia/provinsi',
      );
      setProvinsi(response.data.provinsi);
    } catch (e) {
      Alert.alert(
        'Gagal Terhubung',
        'Gagal terhubung ke internet, periksa jaringan internet anda',
      );
    }
  };
  const getKota = async id_provinsi => {
    try {
      const response = await API.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id_provinsi}`,
      );
      setKota(response.data.kota_kabupaten);
    } catch (e) {
      Alert.alert(
        'Gagal Terhubung',
        'Gagal terhubung ke internet, periksa jaringan internet anda',
      );
    }
  };

  const onPressNext = async () => {
    setIsLoading(true);
    try {
      const response = await API.post('/auth/register/second', formData);
      setFormDataError(response.data);
      response.data.status === true &&
        navigation.push('RegisterScreenThird', {data: formData});
    } catch (e) {
      Alert.alert(
        'Gagal Terhubung',
        'Gagal terhubung ke internet, periksa jaringan internet anda',
      );
    }
    setIsLoading(false);
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
      setFotoKtp(response.uri);
      setState('ktp', response);
    });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={8}>
        <ScrollView>
          <Text style={styles.title}>
            Buat Akun{' '}
            <Text style={{...styles.title, color: '#1687D1'}}>Found.Id</Text>
          </Text>
          <Text style={styles.subTitle}>Silakan mengisi data berikut</Text>
          {/* JENIS KELAMIN */}
          <Text style={styles.label}>Jenis Kelamin</Text>
          <View
            style={{
              ...styles.select,
              borderColor: formDataError.jenisKelamin ? '#FF5959' : '#000000',
            }}>
            <Picker
              mode="dropdown"
              selectedValue={formData.jenisKelamin}
              onValueChange={(itemValue, itemIndex) =>
                setState('jenisKelamin', itemValue)
              }>
              <Picker.Item label="Laki-laki" value="Laki-laki" />
              <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
          </View>
          {/* NIK */}
          <FormInput
            label={'NIK'}
            placeholder={'Masukkan NIK'}
            setState={setState}
            objKey={'nik'}
            keyboardType="number-pad"
            error={formDataError.nik && formDataError.nik[0]}
          />
          {/* PROVINSI AND KOTA */}
          <View style={styles.prokotaContainer}>
            <View style={{flexGrow: 1, marginRight: 16}}>
              <Text style={styles.label}>Pilih Provinsi</Text>
              <View
                style={{
                  ...styles.select,
                  borderColor: formDataError.provinsi ? '#FF5959' : '#000000',
                }}>
                <Picker
                  selectedValue={selectedProvinsi}
                  mode="dropdown"
                  onValueChange={(itemValue, itemIndex) => {
                    const value = itemValue.split(',');
                    setState('provinsi', value[0]);
                    setSelectedProvinsi(itemValue);
                    getKota(value[1]);
                  }}>
                  {provinsi &&
                    provinsi.map((prov, i) => (
                      <Picker.Item
                        key={i}
                        label={prov.nama}
                        value={prov.nama + ',' + prov.id}
                      />
                    ))}
                </Picker>
              </View>
            </View>
            <View style={{flexGrow: 1}}>
              <Text style={styles.label}>Pilih Kota/Kabupaten</Text>
              <View
                style={{
                  ...styles.select,
                  borderColor: formDataError.kota ? '#FF5959' : '#000000',
                }}>
                <Picker
                  mode="dropdown"
                  selectedValue={formData.kota}
                  onValueChange={(itemValue, itemIndex) => {
                    setState('kota', itemValue);
                  }}>
                  {kota &&
                    kota.map((kt, i) => (
                      <Picker.Item key={i} label={kt.nama} value={kt.nama} />
                    ))}
                </Picker>
              </View>
            </View>
          </View>
          {/* ALAMAT */}
          <FormInput
            label={'Alamat'}
            placeholder={'Masukkan Alamat Lengkap'}
            setState={setState}
            objKey="alamat"
            error={formDataError.alamat && formDataError.alamat[0]}
          />
          {/* FOTO KTP */}
          <Text style={styles.label}>Pilih Foto KTP</Text>
          <Pressable
            style={{
              ...styles.ktpContainer,
              borderColor: formDataError.ktp ? '#FF5959' : '#000000',
            }}
            onPress={chooseFile}>
            {fotoKtp ? (
              <Image
                source={{uri: fotoKtp}}
                style={{width: '100%', height: 128}}
                resizeMode={'cover'}
              />
            ) : (
              <View style={{alignItems: 'center'}}>
                <MaterialCommunityIcons
                  name={'upload'}
                  color={'#1687D1'}
                  size={32}
                />
                <Text>Pilih Gambar</Text>
              </View>
            )}
          </Pressable>
        </ScrollView>
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

export default RegisterScreenSecond;
