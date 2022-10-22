import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from './PickLocationScreenStyle';
import Header from './components/Header/Header';
import Geocoder from 'react-native-geocoder';
import CustomText from '../../../../components/CustomText/CustomText';
import {Pressable} from 'react-native';
import {ScrollView} from 'react-native';
import Spinner from 'react-native-spinkit';

const PickLocationScreen = ({navigation, route}) => {
  const {setState} = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [location, setLocation] = useState();
  const [markerLocation, setMarkerLocation] = useState();
  const [markerDetail, setMarkerDetail] = useState();

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

  useEffect(() => {
    getCurentLocation();
  }, []);

  const getCurentLocation = () => {
    setLocationError(false);
    Geolocation.getCurrentPosition(
      async position => {
        const CO = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        try {
          const geocoder = await Geocoder.geocodePosition(CO);
          const response = {
            coords: CO,
            detail: geocoder,
          };
          setLocation(response);
        } catch (e) {
          setLocationError(true);
        }
      },
      error => {
        setLocationError(true);
      },
      {enableHighAccuracy: true},
    );
  };

  const setMarker = async res => {
    setMarkerLocation({
      lat: res.nativeEvent.coordinate.latitude,
      lng: res.nativeEvent.coordinate.longitude,
    });
    try {
      const CO = {
        lat: res.nativeEvent.coordinate.latitude,
        lng: res.nativeEvent.coordinate.longitude,
      };
      const geocoder = await Geocoder.geocodePosition(CO);
      setMarkerDetail(geocoder);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Header
        location={location}
        navigation={navigation}
        onReload={getCurentLocation}
        error={locationError}
      />
      <MapView
        customMapStyle={customMapStyle}
        showsUserLocation={true}
        loadingEnabled={true}
        provider={PROVIDER_GOOGLE}
        style={{...styles.map}}
        region={{
          latitude: location ? parseFloat(location.coords.lat) : -6.2,
          longitude: location ? parseFloat(location.coords.lng) : 120.816666,
          latitudeDelta: location ? 0.015 : 50,
          longitudeDelta: location ? 0.015 : 50,
        }}
        onPress={res => {
          setMarkerDetail();
          setIsLoading(true);
          setMarker(res);
        }}>
        {markerLocation && (
          <Marker
            coordinate={{
              latitude: markerLocation && parseFloat(markerLocation.lat),
              longitude: markerLocation && parseFloat(markerLocation.lng),
            }}
            draggable={true}
            onDragEnd={res => {
              setMarkerDetail();
              setIsLoading(true);
              setMarker(res);
            }}
          />
        )}
      </MapView>

      <View style={styles.bottomContainer}>
        <CustomText bold style={{fontSize: 24}}>
          Rincian Lokasi
        </CustomText>
        {markerDetail ? (
          <View style={{flex: 1}}>
            <ScrollView
              style={{marginTop: 16, marginBottom: 48}}
              showsVerticalScrollIndicator={false}>
              <View style={styles.txt}>
                <CustomText bold>Latitude</CustomText>
                <CustomText>
                  {markerLocation ? markerLocation.lat : 'Tidak ada'}
                </CustomText>
              </View>
              <View style={styles.txt}>
                <CustomText bold>Longitude</CustomText>
                <CustomText>
                  {markerLocation ? markerLocation.lng : 'Tidak ada'}
                </CustomText>
              </View>
              <View style={styles.txt}>
                <CustomText bold>Detail</CustomText>
                <CustomText>{markerDetail[2].formattedAddress}</CustomText>
              </View>
            </ScrollView>

            <Pressable
              style={styles.btn}
              onPress={() => {
                setState('lokasi', {
                  lat: markerLocation.lat,
                  lng: markerLocation.lng,
                  kota: location.detail[0].subAdminArea,
                  detail: markerDetail[2].formattedAddress,
                });
                navigation.goBack();
              }}>
              <CustomText style={{color: '#F9F9F9'}}>Pilih Lokasi</CustomText>
            </Pressable>
          </View>
        ) : (
          <View style={{marginTop: 16, alignItems: 'center'}}>
            <Spinner
              isVisible={isLoading}
              size={24}
              type={'FadingCircleAlt'}
              color={'#1687D1'}
            />
            {!isLoading && (
              <CustomText style={{textAlign: 'center'}}>
                Tidak ada data, silakan ketuk map untuk memilih lokasi
              </CustomText>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default PickLocationScreen;
