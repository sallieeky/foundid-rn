import {ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import API from '../../config/api';
import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import styles from './HomeTabStyle';
import ListItem from './components/ListItem/ListItem';
import Kategori from './components/Kategori/Kategori';
import PeringkatKota from './components/PeringkatKota/PeringkatKota';
import Tips from './components/Tips/Tips';
import MapSekitar from './components/MapSekitar/MapSekitar';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';

const HomeTab = ({navigation}) => {
  const [itemTerbaru, setItemTerbaru] = useState();
  const [countKehilanganDitemukan, setCountKehilanganDitemukan] = useState();
  const [kategori, setKategori] = useState();
  const [hilang, setHilang] = useState();
  const [ditemukan, setDitemukan] = useState();
  const [location, setLocation] = useState();
  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getTerbaru();
    getCountKehilanganDitemukan();
    getKategori();
    getHilang();
    getDitemukan();
  }, [location]);

  const getTerbaru = async () => {
    const response = await API.get(
      `/home-tab/get-terbaru?kota=${location.detail[0].subAdminArea}`,
    );
    setItemTerbaru(response.data);
  };
  const getCountKehilanganDitemukan = async () => {
    const response = await API.get(
      `/home-tab/get-count-hilang-ditemukan?kota=${location.detail[0].subAdminArea}`,
    );
    setCountKehilanganDitemukan(response.data);
  };

  const getKategori = async () => {
    const response = await API.get(`/home-tab/get-kategori`);
    setKategori(response.data);
  };

  const getHilang = async () => {
    const response = await API.get(
      `/home-tab/get-hilang?kota=${location.detail[0].subAdminArea}`,
    );
    setHilang(response.data);
  };

  const getDitemukan = async () => {
    const response = await API.get(
      `/home-tab/get-ditemukan?kota=${location.detail[0].subAdminArea}`,
    );
    setDitemukan(response.data);
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      async position => {
        const CO = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const geocoder = await Geocoder.geocodePosition(CO);
        setLocation({
          coords: CO,
          detail: geocoder,
        });
      },
      error => {
        alert('gagal');
      },
      {enableHighAccuracy: true},
    );
  };

  return (
    <ScrollView style={styles.body}>
      <Header location={location} />
      <CardUser />
      <MapSekitar
        navigation={navigation}
        count={countKehilanganDitemukan}
        location={location}
      />
      {/* <ListItem header={'Terbaru'} data={itemTerbaru} /> */}
      <Kategori data={kategori} />
      <PeringkatKota navigation={navigation} />
      <ListItem header={'Barang Ditemukan'} data={ditemukan} />
      <ListItem header={'Barang Hilang'} data={hilang} />
      <Tips />
    </ScrollView>
  );
};

export default HomeTab;
