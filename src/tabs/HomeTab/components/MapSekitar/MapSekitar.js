import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './MapSekitarStyle';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import API from '../../../../config/api';

const MapSekitar = ({navigation, count}) => {
  const [filterActive, setFilterActive] = useState();
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await API.get('/home-tab/get-terbaru');
    setFilterData(response.data);
  };

  const onPressHilang = async () => {
    setFilterActive('hilang');
    const response = await API.get('/home-tab/get-hilang');
    setFilterData(response.data);
  };

  const onPressDitemukan = async () => {
    setFilterActive('ditemukan');
    const response = await API.get('/home-tab/get-ditemukan');
    setFilterData(response.data);
  };

  const Item = ({nama, gambar, kota, status, no_telp}) => (
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
          <Text style={styles.detail}>Sekitar {kota}</Text>
        </View>
        <View style={styles.contentInfo}>
          <MaterialCommunityIcons name="account-outline" size={16} />
          <Text style={styles.detail}>{no_telp}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.floatingButtonContainer}
        activeOpacity={0.6}>
        <MaterialCommunityIcons
          name="note-text-outline"
          size={24}
          color={'#FFFFFF'}
        />
      </TouchableOpacity>
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
            <View
              style={{
                ...styles.circle,
                backgroundColor:
                  filterActive === 'hilang' || !filterActive
                    ? '#FC6011'
                    : '#C8D1E1',
              }}
            />
            <Text
              style={{
                color:
                  filterActive === 'hilang' || !filterActive
                    ? '#4A4B4D'
                    : '#C8D1E1',
              }}>
              Kehilangan: {count ? count.kehilangan : 'Memuat'}
            </Text>
          </View>
          <View style={styles.infoTextContainer}>
            <View
              style={{
                ...styles.circle,
                backgroundColor:
                  filterActive === 'ditemukan' || !filterActive
                    ? '#1262A5'
                    : '#C8D1E1',
              }}
            />
            <Text
              style={{
                color:
                  filterActive === 'ditemukan' || !filterActive
                    ? '#4A4B4D'
                    : '#C8D1E1',
              }}>
              Ditemukan: {count ? count.ditemukan : 'Memuat'}
            </Text>
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
          {filterData &&
            filterData.map((item, i) => (
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
        <Pressable onPress={onPressHilang}>
          <View
            style={{
              ...styles.filter,
              backgroundColor:
                filterActive === 'hilang' ? '#1262A5' : '#F9F9F9',
            }}>
            <Text
              style={{
                ...styles.filterText,
                color: filterActive === 'hilang' ? '#FFFFFF' : '#242424',
              }}>
              BARANG HILANG
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={onPressDitemukan}>
          <View
            style={{
              ...styles.filter,
              backgroundColor:
                filterActive === 'ditemukan' ? '#1262A5' : '#F9F9F9',
            }}>
            <Text
              style={{
                ...styles.filterText,
                color: filterActive === 'ditemukan' ? '#FFFFFF' : '#242424',
              }}>
              BARANG DITEMUKAN
            </Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.contentContainer}>
        {filterData && (
          <FlatList
            data={filterData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.contentContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default MapSekitar;
