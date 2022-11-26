import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './HeaderStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({location, onReload, error}) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.lokasiTitle}>Lokasi Saat Ini</Text>
        <View style={styles.lokasiContainer}>
          <MaterialCommunityIcons
            name="map-marker"
            size={24}
            color={'#1687D1'}
          />
          <Text style={styles.lokasi}>
            {error && 'Lokasi tidak ditemukan'}
            {!error &&
              (location ? location.detail[0].subAdminArea : 'Melacak lokasi')}
          </Text>

          {error && (
            <TouchableOpacity activeOpacity={0.6} onPress={onReload}>
              <MaterialIcons name="refresh" size={24} color={'#242424'} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <MaterialCommunityIcons name="bell" color={'#4A4B4D'} size={28} />
    </View>
  );
};

export default Header;
