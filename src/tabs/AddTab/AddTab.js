import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './AddTabStyle';
import CustomText from '../../components/CustomText/CustomText';
import {Pressable} from 'react-native';
import FormInput from './components/FormInput/FormInput';
import {Picker} from '@react-native-picker/picker';
import API from '../../config/api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import {ScrollView} from 'react-native';

const AddTab = ({navigation}) => {
  const [formData, setFormData] = useState({
    userId: null,
    kategoriId: null,
    lokasi: null,
    tanggal: new Date(),
    namaBarang: null,
    deskripsi: null,
    gambar: null,
  });
  const [formDataError, setFormDataError] = useState({
    userId: null,
    kategoriId: null,
    lokasi: null,
    tanggal: null,
    namaBarang: null,
    deskripsi: null,
    gambar: null,
  });

  const setState = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
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
  const [kategori, setKategori] = useState([]);
  const [status, setStatus] = useState('Kehilangan');
  const [openTanggal, setOpenTanggal] = useState(false);

  const getKategori = async () => {
    try {
      const response = await API.get('/add-tab/get-kategori');
      setKategori(response.data);
    } catch (e) {
      alert('Koneksi eror', 'Gagal terhubung ke jaringan');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <CustomText style={{fontSize: 24, paddingVertical: 24}} bold>
        Tambah Barang
      </CustomText>
      <View>
        <CustomText style={{marginBottom: 4}}>Status Barang</CustomText>
        <View style={styles.statusContainer}>
          <Pressable
            onPress={() => setStatus('Kehilangan')}
            style={{
              ...styles.status,
              backgroundColor: status === 'Kehilangan' ? '#FC6011' : '#FFFFFF',
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
            onPress={() => setStatus('Ditemukan')}
            style={{
              ...styles.status,
              backgroundColor: status === 'Ditemukan' ? '#1262A5' : '#FFFFFF',
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
              borderColor: formDataError.kategoriId ? '#FF5959' : '#000000',
            }}>
            <Picker
              mode="dropdown"
              selectedValue={formData.kategoriId}
              onValueChange={(itemValue, itemIndex) => {
                setState('kategoriId', itemValue);
              }}>
              {kategori &&
                kategori.map((item, i) => (
                  <Picker.Item key={i} label={item.nama} value={item.id} />
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
      </View>
    </ScrollView>
  );
};

export default AddTab;
