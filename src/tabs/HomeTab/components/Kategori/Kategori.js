import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './KategoriStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import API from '../../../../config/api';

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

const Kategori = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getKategori();
  }, []);

  const getKategori = async () => {
    const response = await API.get(`/home-tab/get-kategori`);
    setData(response.data);
  };

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
        </View>
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default Kategori;
