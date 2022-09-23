import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './KategoriStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Kategori = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.kategoriHeading}>Kategori</Text>
      <View style={styles.kategoriContainer}>
        <TouchableOpacity activeOpacity={0.6} style={styles.kategori}>
          <MaterialCommunityIcons name="car" size={32} color={'#1262A5'} />
          <Text style={styles.namaKategori}>Kendaraan</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.kategori}>
          <MaterialCommunityIcons
            name="cellphone"
            size={32}
            color={'#1262A5'}
          />
          <Text style={styles.namaKategori}>Smartphone</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.kategori}>
          <MaterialCommunityIcons name="car" size={32} color={'#1262A5'} />
          <Text style={styles.namaKategori}>Kendaraan</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.kategori}>
          <MaterialCommunityIcons name="car" size={32} color={'#1262A5'} />
          <Text style={styles.namaKategori}>Kendaraan</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.kategori}>
          <MaterialCommunityIcons name="car" size={32} color={'#1262A5'} />
          <Text style={styles.namaKategori}>Kendaraan</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.kategori}>
          <MaterialCommunityIcons name="car" size={32} color={'#1262A5'} />
          <Text style={styles.namaKategori}>Kendaraan</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.kategori}>
          <MaterialCommunityIcons name="car" size={32} color={'#1262A5'} />
          <Text style={styles.namaKategori}>Kendaraan</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.kategori}>
          <MaterialCommunityIcons name="car" size={32} color={'#1262A5'} />
          <Text style={styles.namaKategori}>Kendaraan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Kategori;
