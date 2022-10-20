import {View, Text} from 'react-native';
import React from 'react';
import styles from './DetailSectionStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const DetailSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.title}>Lokasi Barang (di sekitar)</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons name="location-sharp" color={'#242424'} size={24} />
          <Text style={styles.subTitle}>Kota Balikpapan</Text>
        </View>
      </View>
      <View style={styles.kategoriContainer}>
        <Text style={styles.title}>Kategori</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo name="laptop" color={'#242424'} size={24} />
          <Text style={styles.subTitle}>Laptop</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailSection;
