import {ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import TopFounder from './components/TopFounder/TopFounder';

const HomeTab = ({navigation}) => {
  const [location, setLocation] = useState();
  useEffect(() => {
    getLocation();
  }, []);

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
      <Header location={location} onReload={getLocation} />
      <CardUser />
      <MapSekitar navigation={navigation} location={location} />
      <Kategori />
      <PeringkatKota navigation={navigation} />
      <ListItem
        header={'Barang Ditemukan'}
        location={location}
        name={'ditemukan'}
      />
      <TopFounder navigation={navigation} />
      <ListItem header={'Barang Hilang'} location={location} name={'hilang'} />
      <Tips />
    </ScrollView>
  );
};

export default HomeTab;
