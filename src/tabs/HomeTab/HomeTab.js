import {ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import API from '../../config/api';
import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import styles from './HomeTabStyle';
import ListItem from './components/ListItem/ListItem';
import Kategori from './components/Kategori/Kategori';
import Disekitar from './components/Disekitar/Disekitar';
import Tips from './components/Tips/Tips';
const HomeTab = ({navigation}) => {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await API.get('/tes');
    setData(response.data);
  };
  return (
    <ScrollView style={styles.body}>
      <Header />
      <CardUser />
      <ListItem header={'Terbaru'} />
      <Kategori />
      <Disekitar navigation={() => navigation.push('MapScreen')} />
      <ListItem header={'Barang Ditemukan'} />
      <ListItem header={'Barang Hilang'} />
      <Tips />
    </ScrollView>
  );
};

export default HomeTab;
