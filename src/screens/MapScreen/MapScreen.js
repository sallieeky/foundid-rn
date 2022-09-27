import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const MapScreen = () => {
  const [location, setLocation] = useState({
    lat: -2.548926,
    lng: 118.0148634,
  });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
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
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{width: '100%', height: '50%'}}
        region={{
          latitude: location.lat && location.lat,
          longitude: location.lng && location.lng,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
          image={{
            uri: 'https://api.foundid.my.id/storage/images/marker.png',
          }}>
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
