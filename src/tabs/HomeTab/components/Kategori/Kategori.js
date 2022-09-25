import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './KategoriStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Loader = () => (
  <SkeletonPlaceholder>
    <View style={styles.kategoriContainer}>
      <SkeletonPlaceholder.Item height={64} width={64} borderRadius={8} />
      <SkeletonPlaceholder.Item height={64} width={64} borderRadius={8} />
      <SkeletonPlaceholder.Item height={64} width={64} borderRadius={8} />
      <SkeletonPlaceholder.Item height={64} width={64} borderRadius={8} />
    </View>
  </SkeletonPlaceholder>
);

const Kategori = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.kategoriHeading}>Kategori</Text>

      {data ? (
        <View style={styles.kategoriContainer}>
          {data &&
            data.map((item, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.6}
                style={styles.kategori}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={32}
                  color={'#1262A5'}
                />
                <Text style={styles.namaKategori}>{item.nama}</Text>
              </TouchableOpacity>
            ))}
          <TouchableOpacity activeOpacity={0.6} style={styles.kategori}>
            <MaterialCommunityIcons
              name="view-grid-outline"
              size={32}
              color={'#1262A5'}
            />
            <Text style={styles.namaKategori}>Lainnya</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default Kategori;
