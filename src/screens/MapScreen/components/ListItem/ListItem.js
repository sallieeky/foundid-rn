import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './ListItemStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Loader = () => (
  <SkeletonPlaceholder>
    <SkeletonPlaceholder.Item
      width={'100%'}
      height={100}
      marginTop={8}
      borderRadius={8}
    />
    <SkeletonPlaceholder.Item
      width={'100%'}
      height={100}
      marginTop={8}
      borderRadius={8}
    />
    <SkeletonPlaceholder.Item
      width={'100%'}
      height={100}
      marginTop={8}
      borderRadius={8}
    />
    <SkeletonPlaceholder.Item
      width={'100%'}
      height={100}
      marginTop={8}
      borderRadius={8}
    />
  </SkeletonPlaceholder>
);

const Item = ({
  nama,
  gambar,
  kota,
  status,
  no_telp,
  showLocation,
  lat,
  lng,
}) => (
  <View style={styles.content}>
    <View style={styles.contentImageContainer}>
      <Image
        source={{uri: `https://api.foundid.my.id/storage/item/${gambar}`}}
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
        <TouchableOpacity
          style={styles.contentBottomLocation}
          activeOpacity={0.6}
          onPress={() => {
            showLocation(lat, lng);
          }}>
          <MaterialCommunityIcons
            name="crosshairs-gps"
            size={16}
            color={'#FFFFFF'}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const ListItem = ({data, showLocation}) => {
  const renderItem = ({item}) => {
    return (
      <Item
        nama={item.item.nama}
        gambar={item.item.gambar}
        kota={item.item.lokasi.kota}
        status={item.hilang_ditemukan}
        no_telp={item.user.no_telp}
        showLocation={showLocation}
        lat={item.item.lokasi.lat}
        lng={item.item.lokasi.lng}
      />
    );
  };

  return (
    <View style={styles.container}>
      {data ? (
        <FlatList
          style={styles.flatList}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          extraData={showLocation}
        />
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default ListItem;
