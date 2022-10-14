import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ListItemStyleSearch';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {URL_STORAGE} from '../../../../config/variable';

const Item = ({nama, gambar, kota, status, no_telp}) => (
  <View style={styles.content}>
    <View style={styles.contentImageContainer}>
      <Image
        source={{uri: `${URL_STORAGE}/item/${gambar}`}}
        style={styles.contentImage}
      />
      <View
        style={{
          ...styles.contentStatusContainer,
          backgroundColor: status == 'Kehilangan' ? '#FC6011' : '#1F6BAA',
        }}>
        <Text style={styles.contentStatus}>{status}</Text>
      </View>
    </View>

    <View style={styles.contentDetail}>
      <Text style={styles.contentDetailNama}>{nama}</Text>
      <View style={styles.contentInfo}>
        <MaterialCommunityIcons name="map-marker-outline" size={16} />
        <Text style={styles.detail}>{kota}</Text>
      </View>
      <View style={styles.contentInfo}>
        <MaterialCommunityIcons name="account-outline" size={16} />
        <Text style={styles.detail}>{no_telp}</Text>
      </View>

      <View style={styles.contentBottom}>
        <TouchableOpacity
          style={styles.contentBottomDetail}
          activeOpacity={0.6}>
          <Text style={styles.contentBottomDetailText}>KUNJUNGI DETAIL</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const ListItemSearch = ({data}) => {
  const renderItem = ({item}) => {
    return (
      <Item
        nama={item.item.nama}
        gambar={item.item.gambar[0].nama}
        kota={item.item.lokasi.kota}
        status={item.hilang_ditemukan}
        no_telp={item.user.no_telp}
      />
    );
  };

  return (
    <View style={styles.container}>
      {data && (
        <FlatList
          style={styles.flatList}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ListItemSearch;
