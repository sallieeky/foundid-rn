import {Dimensions, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './AddTabStyle';
import CustomText from '../../components/CustomText/CustomText';
import {Pressable} from 'react-native';
import FormInput from './components/FormInput/FormInput';
import {Picker} from '@react-native-picker/picker';
import API from '../../config/api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';
import {ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Image} from 'react-native';
import Modal from '../../components/Modal/Modal';
import Spinner from 'react-native-spinkit';

const AddTab = ({navigation, user}) => {
  const [formData, setFormData] = useState({
    userId: user.id,
    kategoriId: null,
    lokasi: null,
    tanggal: new Date(),
    namaBarang: null,
    deskripsi: null,
    gambar: null,
    status: 'Kehilangan',
  });
  const [formDataError, setFormDataError] = useState({
    userId: null,
    kategoriId: null,
    lokasi: null,
    tanggal: null,
    namaBarang: null,
    deskripsi: null,
    gambar: null,
    status: null,
  });

  const setState = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
    setFormDataError({
      ...formDataError,
      [key]: null,
    });
  };

  useEffect(() => {
    getKategori();
  }, []);

  const hari = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    "Jum'at",
    'Sabtu',
  ];
  const bulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [kategori, setKategori] = useState([]);
  const [foto, setFoto] = useState([]);
  const [status, setStatus] = useState('Kehilangan');
  const [openTanggal, setOpenTanggal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [berhasilModal, setBerhasilModal] = useState(false);

  const getKategori = async () => {
    try {
      const response = await API.get('/global/get-kategori');
      setKategori(response.data);
    } catch (e) {
      alert('Koneksi eror', 'Gagal terhubung ke jaringan');
    }
  };

  const pickImage = async () => {
    const images = await ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      includeBase64: true,
    });

    let files = [];
    let ft = [];
    images.slice(0, 5).map(image => {
      let pathParts = image.path.split('/');
      files.push({
        uri: image.path,
        type: image.mime,
        name: `${
          formData.userId
        }_${formData.tanggal.getDate()}_${formData.tanggal.getMonth()}_${formData.tanggal.getFullYear()}_${formData.tanggal.getHours()}_${formData.tanggal.getMinutes()}_${formData.tanggal.getSeconds()}_${
          pathParts[pathParts.length - 1]
        }`,
        size: image.size,
        base64: image.data,
      });
      ft.push(image.path);
    });
    setState('gambar', files);
    setFoto(ft);
  };

  const upload = async () => {
    setOpenModal(false);
    setIsLoading(true);
    try {
      const response = await API.post('/add-tab/upload', formData);
      setFormDataError(response.data);
      if (response.data.status === true) {
        setBerhasilModal(true);
      }
    } catch (e) {
      alert(
        'Gagal Terhubung',
        'Gagal terhubung ke internet, periksa jaringan internet anda',
      );
    }
    setIsLoading(false);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <CustomText style={{fontSize: 24, paddingVertical: 24}} bold>
          Tambah Barang
        </CustomText>

        {!formData.userId && (
          <View
            style={{
              height: Dimensions.get('window').height - 156,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/images/login_first.png')}
              style={{width: '100%', height: '60%'}}
            />
            <CustomText bold>Silakan Login Terlebih Dahulu</CustomText>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.push('LoginScreen')}
              style={{
                marginTop: 16,
                borderRadius: 4,
                backgroundColor: '#1262A5',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 8,
              }}>
              <CustomText style={{color: '#F9F9F9'}}>Login</CustomText>
            </TouchableOpacity>
          </View>
        )}
        {formData.userId && (
          <View>
            <View>
              <CustomText style={{marginBottom: 4}}>Status Barang</CustomText>
              <View style={styles.statusContainer}>
                <Pressable
                  onPress={() => {
                    setState('status', 'Kehilangan');
                    setStatus('Kehilangan');
                  }}
                  style={{
                    ...styles.status,
                    backgroundColor:
                      status === 'Kehilangan' ? '#FC6011' : '#FFFFFF',
                    borderTopRightRadius: 4,
                    borderBottomRightRadius: 4,
                  }}>
                  <CustomText
                    style={{
                      color: status === 'Kehilangan' ? '#F9F9F9' : '#C8D1E1',
                      fontSize: 16,
                    }}>
                    Kehilangan
                  </CustomText>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setState('status', 'Ditemukan');
                    setStatus('Ditemukan');
                  }}
                  style={{
                    ...styles.status,
                    backgroundColor:
                      status === 'Ditemukan' ? '#1262A5' : '#FFFFFF',
                    borderTopRightRadius: 4,
                    borderBottomRightRadius: 4,
                  }}>
                  <CustomText
                    style={{
                      color: status === 'Ditemukan' ? '#FFFFFF' : '#C8D1E1',
                      fontSize: 16,
                    }}>
                    Ditemukan
                  </CustomText>
                </Pressable>
              </View>
            </View>

            <View style={{marginTop: 24}}>
              <View style={{marginBottom: 4}}>
                <CustomText>Gambar</CustomText>
                {formData.gambar && (
                  <View style={styles.imageList}>
                    {formData.gambar.map((item, idx) => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.push('ImageViewer', {
                            data: foto,
                            index: idx,
                          })
                        }
                        activeOpacity={0.8}
                        key={idx}
                        style={styles.imageContainer}>
                        <Image source={{uri: item.uri}} style={styles.foto} />
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                <Pressable
                  onPress={pickImage}
                  style={{
                    ...styles.pickFoto,
                    borderColor: formDataError.gambar ? '#FF5959' : '#000000',
                  }}>
                  <MaterialCommunityIcons
                    name="upload-multiple"
                    size={40}
                    color={'#8A8A8A'}
                  />
                  <CustomText>Pilih Foto (Maksimal 5 Foto)</CustomText>
                </Pressable>
                <CustomText style={styles.imageError}>
                  {formDataError.gambar && formDataError.gambar[0]}
                </CustomText>
              </View>

              <FormInput
                label={'Nama Barang'}
                placeholder={'Masukkan Nama Barang'}
                objKey="namaBarang"
                error={formDataError.namaBarang && formDataError.namaBarang[0]}
                setState={setState}
                value={formData.namaBarang}
              />

              <View style={{marginBottom: 16}}>
                <CustomText>Kategori</CustomText>
                <View
                  style={{
                    ...styles.select,
                    borderColor: formDataError.kategoriId
                      ? '#FF5959'
                      : '#000000',
                  }}>
                  <Picker
                    mode="dropdown"
                    selectedValue={formData.kategoriId}
                    onValueChange={(itemValue, itemIndex) => {
                      setState('kategoriId', itemValue);
                    }}>
                    {kategori &&
                      kategori.map((item, i) => (
                        <Picker.Item
                          key={i}
                          label={item.nama}
                          value={item.id}
                        />
                      ))}
                  </Picker>
                </View>
              </View>

              <Pressable onPress={() => setOpenTanggal(true)}>
                <FormInput
                  label={`Tanggal ${status}`}
                  placeholder={`Pilih Tanggal ${status}`}
                  objKey="namaBarang"
                  error={formDataError.tanggal && formDataError.tanggal[0]}
                  setState={setState}
                  value={`${
                    hari[formData.tanggal.getDay()]
                  }, ${formData.tanggal.getDate()} ${
                    bulan[formData.tanggal.getMonth()]
                  } ${formData.tanggal.getFullYear()}`}
                  editable={false}
                  icon={<Ionicons name="calendar" size={24} />}
                />
                <DatePicker
                  modal
                  open={openTanggal}
                  mode="date"
                  date={formData.tanggal}
                  onConfirm={date => {
                    setState('tanggal', date);
                    setOpenTanggal(false);
                  }}
                  onCancel={() => {
                    setOpenTanggal(false);
                  }}
                />
              </Pressable>

              <Pressable
                onPress={() =>
                  navigation.push('PickLocationScreen', {
                    formData,
                    setState,
                  })
                }>
                <FormInput
                  label={`Lokasi ${status}`}
                  placeholder={`Pilih Lokasi ${status}`}
                  objKey="lokasi"
                  error={formDataError.lokasi && formDataError.lokasi[0]}
                  setState={setState}
                  value={formData.lokasi && formData.lokasi.detail}
                  editable={false}
                  icon={<Ionicons name="location" size={24} />}
                />
              </Pressable>

              <FormInput
                label={'Deskripsi'}
                placeholder={'Masukkan Deskripsi'}
                objKey="deskripsi"
                error={formDataError.deskripsi && formDataError.deskripsi[0]}
                setState={setState}
                value={formData.deskripsi}
                multiline={true}
                numberOfLines={5}
                style={{textAlignVertical: 'top'}}
              />

              <Pressable
                style={styles.btnUpload}
                onPress={() => setOpenModal(true)}>
                <Spinner
                  style={{}}
                  isVisible={isLoading}
                  size={19}
                  type={'FadingCircleAlt'}
                  color={'#F9F9F9'}
                />
                {!isLoading && (
                  <CustomText style={{color: '#F9F9F9'}}>Upload</CustomText>
                )}
              </Pressable>
            </View>
          </View>
        )}
      </ScrollView>
      {openModal && (
        <Modal
          icon={<Ionicons name="md-alert-circle" size={56} color={'#FF5959'} />}
          title={'Apakah anda sudah yakin untuk mengupload postingan ini ?'}
          negativeAction={() => setOpenModal(false)}
          positiveAction={upload}
        />
      )}

      {berhasilModal && (
        <Modal
          icon={
            <Ionicons name="checkmark-circle" size={56} color={'#50B240'} />
          }
          title={'Postingan anda berhasil diupload!'}
          positiveAction={() => {
            setBerhasilModal(false);
            navigation.reset({
              index: 0,
              routes: [{name: 'MainScreen'}],
            });
          }}
          single
        />
      )}
    </View>
  );
};

export default AddTab;
