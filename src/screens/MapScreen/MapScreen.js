import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{width: '100%', height: '50%'}}
        region={{
          latitude: -1.1422530476444959,
          longitude: 116.86781753652434,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: -1.1422530476444959,
            longitude: 116.86781753652434,
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
