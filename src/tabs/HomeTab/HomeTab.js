import {ScrollView, View} from 'react-native';
import React from 'react';
import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import styles from './HomeTabStyle';
import ListItem from './components/ListItem/ListItem';
import Kategori from './components/Kategori/Kategori';
import Tips from './components/Tips/Tips';
import MapSekitar from './components/MapSekitar/MapSekitar';

const HomeTab = ({navigation, location, onReload, error}) => {
  return (
    <View>
      <ScrollView style={styles.body}>
        <Header location={location} onReload={onReload} error={error} />
        <CardUser navigation={navigation} />
        <MapSekitar navigation={navigation} location={location} />
        <Kategori />
        <ListItem
          header={'Barang Ditemukan'}
          location={location}
          name={'ditemukan'}
        />
        <ListItem
          header={'Barang Hilang'}
          location={location}
          name={'hilang'}
        />
        <Tips />
      </ScrollView>
    </View>
  );
};

export default HomeTab;
