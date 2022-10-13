import {ScrollView, View} from 'react-native';
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
import Toast from '../../helper/toast';

const HomeTab = ({navigation, location, onReload, error}) => {
  return (
    <View>
      <ScrollView style={styles.body}>
        <Header location={location} onReload={onReload} />
        <CardUser navigation={navigation} />
        <MapSekitar navigation={navigation} location={location} />
        <Kategori />
        <PeringkatKota navigation={navigation} />
        <ListItem
          header={'Barang Ditemukan'}
          location={location}
          name={'ditemukan'}
        />
        <TopFounder navigation={navigation} />
        <ListItem
          header={'Barang Hilang'}
          location={location}
          name={'hilang'}
        />
        <Tips />
      </ScrollView>
      {error && <Toast />}
    </View>
  );
};

export default HomeTab;
