import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import BottomSheet from './components/BottomSheet/BottomSheet';
import styles from './MapScreenStyle';
import Header from './components/Header/Header';
import Geocoder from 'react-native-geocoder';
const MapScreen = () => {
  const [location, setLocation] = useState();
  const [count, setCount] = useState();
  const [filterActive, setFilterActive] = useState();
  const [filterData, setFilterData] = useState();
  const [filterDataCount, setFilterDataCount] = useState();

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getData();
    getCountKehilanganDitemukan();
  }, [location]);

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

  const getData = async () => {
    const response = await API.get(
      `/home-tab/get-terbaru?kota=${location.detail[0].subAdminArea}`,
    );
    setFilterData(response.data.data);
    setFilterDataCount(response.data.total);
  };

  const getCountKehilanganDitemukan = async () => {
    const response = await API.get(
      `/home-tab/get-count-hilang-ditemukan?kota=${location.detail[0].subAdminArea}`,
    );
    setCount(response.data);
  };

  const onPressHilang = async () => {
    setFilterActive('hilang');
    setFilterData();
    const response = await API.get(
      `/home-tab/get-hilang?kota=${location.detail[0].subAdminArea}`,
    );
    getCountKehilanganDitemukan();
    setFilterData(response.data.data);
    setFilterDataCount(response.data.total);
  };

  const onPressDitemukan = async () => {
    setFilterActive('ditemukan');
    setFilterData();
    const response = await API.get(
      `/home-tab/get-ditemukan?kota=${location.detail[0].subAdminArea}`,
    );
    getCountKehilanganDitemukan();
    setFilterData(response.data.data);
    setFilterDataCount(response.data.total);
  };

  const onPressAll = () => {
    getCountKehilanganDitemukan();
    setFilterActive();
    setFilterData();
    getData();
  };

  return (
    <View style={styles.container}>
      <Header location={location} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: location
            ? parseFloat(location.coords.lat)
            : -1.142232852071283,
          longitude: location
            ? parseFloat(location.coords.lng)
            : 116.86777883563393,
          latitudeDelta: location ? 0.015 : 30,
          longitudeDelta: location ? 0.0121 : 30,
        }}>
        {filterData &&
          filterData.map((item, i) => (
            <Marker
              key={i}
              coordinate={{
                latitude: parseFloat(item.item.lokasi.lat),
                longitude: parseFloat(item.item.lokasi.lng),
              }}
              image={{
                uri: 'https://api.foundid.my.id/storage/images/marker.png',
              }}
              // image={require('../../../../assets/images/marker.png')}
            >
              <Callout>
                <View>
                  <Text>{item.item.nama}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
      </MapView>
      <BottomSheet
        filterActive={filterActive}
        onPressAll={onPressAll}
        onPressHilang={onPressHilang}
        onPressDitemukan={onPressDitemukan}
      />
    </View>
  );
};

export default MapScreen;
