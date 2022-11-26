import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import BottomSheet from './components/BottomSheet/BottomSheet';
import styles from './MapScreenStyle';
import Header from './components/Header/Header';
import Geocoder from 'react-native-geocoder';
import API from '../../config/api';
import {URL_STORAGE} from '../../config/variable';

const MapScreen = ({navigation}) => {
  const [isError, setIsError] = useState(false);
  const [location, setLocation] = useState();
  const [count, setCount] = useState();
  const [filterActive, setFilterActive] = useState();
  const [filterData, setFilterData] = useState();
  const [filterDataCount, setFilterDataCount] = useState();
  const [showLocation, setShowLocation] = useState();

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getData();
    getCountKehilanganDitemukan();
  }, [location]);

  const customMapStyle = [
    {
      featureType: 'poi',
      elementType: 'labels.icon',
      stylers: [
        {
          color: '#bababa',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bababa',
        },
      ],
    },
  ];

  const getLocation = () => {
    setIsError(false);
    try {
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
          setIsError(true);
        },
        {enableHighAccuracy: true},
      );
    } catch (e) {
      setIsError(true);
    }
  };

  const getData = async () => {
    const response = await API.get(
      `/home-tab/get-terbaru?kota=${
        location ? location.detail[0].subAdminArea : ''
      }`,
    );
    setFilterData(response.data.data);
    setFilterDataCount(response.data.total);
  };

  const getCountKehilanganDitemukan = async () => {
    const response = await API.get(
      `/home-tab/get-count-hilang-ditemukan?kota=${
        location ? location.detail[0].subAdminArea : ''
      }`,
    );
    setCount(response.data);
  };

  const onPressHilang = async () => {
    setFilterActive('hilang');
    setFilterData();
    const response = await API.get(
      `/home-tab/get-hilang?kota=${
        location ? location.detail[0].subAdminArea : ''
      }`,
    );
    getCountKehilanganDitemukan();
    setFilterData(response.data.data);
    setFilterDataCount(response.data.total);
  };

  const onPressDitemukan = async () => {
    setFilterActive('ditemukan');
    setFilterData();
    const response = await API.get(
      `/home-tab/get-ditemukan?kota=${
        location ? location.detail[0].subAdminArea : ''
      }`,
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

  const showLocationHandle = (lat, lng) => {
    setShowLocation({
      lat,
      lng,
    });
  };

  return (
    <View style={styles.container}>
      <Header
        location={location}
        navigation={navigation}
        onReload={getLocation}
        error={isError}
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoTextContainer}>
          <View
            style={{
              ...styles.circle,
              backgroundColor:
                filterActive === 'hilang' || !filterActive
                  ? '#FC6011'
                  : '#C8D1E1',
            }}
          />
          <Text
            style={{
              color:
                filterActive === 'hilang' || !filterActive
                  ? '#4A4B4D'
                  : '#C8D1E1',
            }}>
            Kehilangan: {count ? count.kehilangan : 'Memuat'}
          </Text>
        </View>
        <View style={styles.infoTextContainer}>
          <View
            style={{
              ...styles.circle,
              backgroundColor:
                filterActive === 'ditemukan' || !filterActive
                  ? '#1262A5'
                  : '#C8D1E1',
            }}
          />
          <Text
            style={{
              color:
                filterActive === 'ditemukan' || !filterActive
                  ? '#4A4B4D'
                  : '#C8D1E1',
            }}>
            Ditemukan: {count ? count.ditemukan : 'Memuat'}
          </Text>
        </View>
      </View>
      <MapView
        customMapStyle={customMapStyle}
        showsUserLocation={true}
        loadingEnabled={true}
        provider={PROVIDER_GOOGLE}
        style={{...styles.map}}
        region={{
          latitude: location
            ? showLocation
              ? parseFloat(showLocation.lat) - 0.0005
              : parseFloat(location.coords.lat)
            : -6.2,

          longitude: location
            ? showLocation
              ? parseFloat(showLocation.lng)
              : parseFloat(location.coords.lng)
            : 120.816666,
          latitudeDelta: location ? (showLocation ? 0.001 : 0.015) : 50,
          longitudeDelta: location ? (showLocation ? 0.001 : 0.015) : 50,
        }}>
        {filterData &&
          filterData.map((item, i) => (
            <Marker
              key={i}
              coordinate={{
                latitude: parseFloat(item.item.lokasi.lat),
                longitude: parseFloat(item.item.lokasi.lng),
              }}>
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
        data={filterData}
        showLocation={showLocationHandle}
        location={location}
        navigation={navigation}
      />
    </View>
  );
};

export default MapScreen;
