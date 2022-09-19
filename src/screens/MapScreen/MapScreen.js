import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {requestLocationPermission} from '../../config/permission';
import Geolocation from '@react-native-community/geolocation';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const MapScreen = () => {
  const [location, setLocation] = useState({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (requestLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        error => {
          console.log(error);
        },
        {enableHighAccuracy: true},
      );
    }
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{width: '100%', height: '50%'}}
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
          image={require('../../assets/images/marker.png')}>
          <Callout>
            <View>
              <Text>Kos ITK (Bougenville Putra)</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
