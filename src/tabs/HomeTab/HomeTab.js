import {ScrollView} from 'react-native';
import React from 'react';
import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import styles from './HomeTabStyle';
import ListItem from './components/ListItem/ListItem';
import Kategori from './components/Kategori/Kategori';
import PeringkatKota from './components/PeringkatKota/PeringkatKota';
import Tips from './components/Tips/Tips';
import MapSekitar from './components/MapSekitar/MapSekitar';
import TopFounder from './components/TopFounder/TopFounder';

const HomeTab = ({navigation, location, onReload}) => {
  return (
    <ScrollView style={styles.body}>
      <Header location={location} onReload={onReload} />
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
