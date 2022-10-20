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
  const [error, setError] = useState(false);
  useEffect(() => {
    getKategori();
  }, []);

  const getKategori = async () => {
    setError(false);
    try {
      const response = await API.get(`/home-tab/get-kategori`);
      setData(response.data);
    } catch (e) {
      setError(true);
    }
  };

  const Error = ({pressHandler}) => (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        marginHorizontal: 24,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#242424',
      }}
      onPress={pressHandler}>
      <Text>Refresh Page</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.kategoriHeading}>Kategori</Text>

      {error && <Error pressHandler={() => getKategori()} />}
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
    </View>
  );
};

export default Kategori;
