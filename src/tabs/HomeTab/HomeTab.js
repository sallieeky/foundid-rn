import {ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import API from '../../config/api';
import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import styles from './HomeTabStyle';
import ListItem from './components/ListItem/ListItem';
import Kategori from './components/Kategori/Kategori';
import Disekitar from './components/Disekitar/Disekitar';
import Tips from './components/Tips/Tips';
import MapSekitar from './components/MapSekitar/MapSekitar';

const HomeTab = ({navigation}) => {
  const [itemTerbaru, setItemTerbaru] = useState();
  const [countKehilanganDitemukan, setCountKehilanganDitemukan] = useState();
  const [kategori, setKategori] = useState();
  const [hilang, setHilang] = useState();
  const [ditemukan, setDitemukan] = useState();
  useEffect(() => {
    getTerbaru();
    getCountKehilanganDitemukan();
    getKategori();
    getHilang();
    getDitemukan();
  }, []);

  const getTerbaru = async () => {
    const response = await API.get('/home-tab/get-terbaru');
    setItemTerbaru(response.data);
  };
  const getCountKehilanganDitemukan = async () => {
    const response = await API.get('/home-tab/get-count-hilang-ditemukan');
    setCountKehilanganDitemukan(response.data);
  };

  const getKategori = async () => {
    const response = await API.get('/home-tab/get-kategori');
    setKategori(response.data);
  };

  const getHilang = async () => {
    const response = await API.get('/home-tab/get-hilang');
    setHilang(response.data);
  };

  const getDitemukan = async () => {
    const response = await API.get('/home-tab/get-ditemukan');
    setDitemukan(response.data);
  };

  return (
    <ScrollView style={styles.body}>
      <Header />
      <CardUser />
      <MapSekitar navigation={navigation} count={countKehilanganDitemukan} />
      <ListItem header={'Terbaru'} data={itemTerbaru} />
      <Kategori data={kategori} />
      <Disekitar navigation={navigation} />
      <ListItem header={'Barang Ditemukan'} data={ditemukan} />
      <ListItem header={'Barang Hilang'} data={hilang} />
      <Tips />
    </ScrollView>
  );
};

export default HomeTab;
