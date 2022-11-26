import {RefreshControl, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import styles from './HomeTabStyle';
import ListItem from './components/ListItem/ListItem';
import Kategori from './components/Kategori/Kategori';
import Tips from './components/Tips/Tips';
import MapSekitar from './components/MapSekitar/MapSekitar';

const HomeTab = ({navigation, location, onReload, error, user}) => {
  const [isRefresh, setIsRefresh] = useState(false);

  return (
    <View>
      <ScrollView
        style={styles.body}
        refreshControl={
          <RefreshControl
            refreshing={isRefresh}
            onRefresh={async () => {
              setIsRefresh(true);
              await onReload();
              setIsRefresh(false);
            }}
          />
        }>
        <Header location={location} onReload={onReload} error={error} />
        <CardUser navigation={navigation} user={user} />
        <MapSekitar navigation={navigation} location={location} />
        <Kategori />

        <ListItem
          navigation={navigation}
          header={'Barang Ditemukan'}
          location={location}
          name={'ditemukan'}
        />
        <ListItem
          navigation={navigation}
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
