import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './MapSekitarStyle';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import IonIcons from 'react-native-vector-icons/Ionicons';

const MapSekitar = ({navigation, data, count}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.mapHeading}>Di Sekitar Anda</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.push('MapScreen')}>
          <Text style={styles.headingLihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.infoTextContainer}>
            <View style={{...styles.circle, backgroundColor: '#FC6011'}} />
            <Text>Kehilangan: {count ? count.kehilangan : 'Memuat'}</Text>
          </View>
          <View style={styles.infoTextContainer}>
            <View style={{...styles.circle, backgroundColor: '#1262A5'}} />
            <Text>Ditemukan: {count ? count.ditemukan : 'Memuat'}</Text>
          </View>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: -1.142232852071283,
            longitude: 116.86777883563393,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {data &&
            data.map((item, i) => (
              <Marker
                key={i}
                coordinate={{
                  latitude: parseFloat(item.item.lokasi.lat),
                  longitude: parseFloat(item.item.lokasi.lng),
                }}
                image={require('../../../../assets/images/marker.png')}>
                <Callout>
                  <View>
                    <Text>{item.item.nama}</Text>
                  </View>
                </Callout>
              </Marker>
            ))}
        </MapView>
      </View>

      <View style={styles.filterContainer}>
        <IonIcons name="grid" size={32} color={'#1262A5'} />
        <View style={styles.filter}>
          <Text style={styles.filterText}>BARANG HILANG</Text>
        </View>
        <View style={styles.filter}>
          <Text style={styles.filterText}>BARANG DITEMUKAN</Text>
        </View>
      </View>
    </View>
  );
};

export default MapSekitar;
