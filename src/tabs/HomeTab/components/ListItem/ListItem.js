import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './ListItemStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Loader = () => (
  <SkeletonPlaceholder>
    <View style={styles.skeletonContainer}>
      <SkeletonPlaceholder.Item
        marginHorizontal={8}
        width={142}
        height={208}
        borderRadius={16}
      />
      <SkeletonPlaceholder.Item
        marginHorizontal={8}
        width={142}
        height={208}
        borderRadius={16}
      />
      <SkeletonPlaceholder.Item
        marginHorizontal={8}
        width={142}
        height={208}
        borderRadius={16}
      />
    </View>
  </SkeletonPlaceholder>
);

const Item = ({nama, gambar, kota, status, no_telp}) => (
  <View style={styles.content}>
    <View style={styles.contentImageSection}>
      <Image
        source={{uri: `https://api.foundid.my.id/storage/item/${gambar}`}}
        style={styles.contentImage}
      />
      <View style={styles.contentTitleSection}>
        <View
          style={{
            ...styles.contentKategoriContainer,
            backgroundColor: status == 'Kehilangan' ? '#FC6011' : '#1F6BAA',
          }}>
          <Text style={styles.contentKategori}>{status}</Text>
        </View>
        <Text style={styles.title}>{nama}</Text>
      </View>
    </View>

    <View style={styles.contentDetailContainer}>
      <View style={styles.contentDetail}>
        <MaterialCommunityIcons name="map-marker-outline" size={16} />
        <Text style={styles.detail}>{kota}</Text>
      </View>
      <View style={styles.contentDetail}>
        <MaterialCommunityIcons name="account-outline" size={16} />
        <Text style={styles.detail}>{no_telp}</Text>
      </View>
    </View>
  </View>
);

const renderItem = ({item}) => {
  return (
    <Item
      nama={item.item.nama}
      gambar={item.item.gambar}
      kota={item.item.lokasi.kota}
      status={item.hilang_ditemukan}
      no_telp={item.user.no_telp}
    />
  );
};

const ListItem = ({header, data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.listItemHeadingContainer}>
        <Text style={styles.listItemHeading}>{header}</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.lihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      {data ? (
        data.total < 1 ? (
          <Text style={styles.contentBlank}>Data masih Kosong</Text>
        ) : (
          <FlatList
            data={data.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.contentContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        )
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default ListItem;
