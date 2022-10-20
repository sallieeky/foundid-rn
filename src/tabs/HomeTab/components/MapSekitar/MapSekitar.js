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

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {URL_STORAGE} from '../../../../config/variable';

const Loader = () => (
  <SkeletonPlaceholder>
    <View style={styles.skeletonContainer}>
      <SkeletonPlaceholder.Item
        marginHorizontal={8}
        width={312}
        height={112}
        borderRadius={8}
      />
      <SkeletonPlaceholder.Item
        marginHorizontal={8}
        width={312}
        height={112}
        borderRadius={8}
      />
    </View>
  </SkeletonPlaceholder>
);

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

const customMapStyle = [
  {
    featureType: 'poi',
    elementType: 'labels.icon',
    stylers: [
      {
        color: '#bababa',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bababa',
      },
    ],
  },
];

const MapSekitar = ({navigation, location}) => {
  const [isError, setIsError] = useState(false);
  const [count, setCount] = useState();
  const [filterActive, setFilterActive] = useState();
  const [filterData, setFilterData] = useState();
  const [filterDataCount, setFilterDataCount] = useState();

  useEffect(() => {
    getData();
    getCountKehilanganDitemukan();
  }, [location]);

  const getData = async () => {
    setIsError(false);
    try {
      const response = await API.get(
        `/home-tab/get-terbaru?kota=${
          location ? location.detail[0].subAdminArea : ''
        }`,
      );
      setFilterData(response.data.data);
      setFilterDataCount(response.data.total);
    } catch (e) {
      setIsError(true);
    }
  };

  const getCountKehilanganDitemukan = async () => {
    const response = await API.get(
      `/home-tab/get-count-hilang-ditemukan?kota=${
        location ? location.detail[0].subAdminArea : ''
      }`,
    );
    setCount(response.data);
  };

  const onPressHilang = async () => {
    setFilterActive('hilang');
    setFilterData();
    const response = await API.get(
      `/home-tab/get-hilang?kota=${
        location ? location.detail[0].subAdminArea : ''
      }`,
    );
    getCountKehilanganDitemukan();
    setFilterData(response.data.data);
    setFilterDataCount(response.data.total);
  };

  const onPressDitemukan = async () => {
    setFilterActive('ditemukan');
    setFilterData();
    const response = await API.get(
      `/home-tab/get-ditemukan?kota=${
        location ? location.detail[0].subAdminArea : ''
      }`,
    );
    getCountKehilanganDitemukan();
    setFilterData(response.data.data);
    setFilterDataCount(response.data.total);
  };

  const onPressAll = () => {
    getCountKehilanganDitemukan();
    setFilterActive();
    setFilterData();
    getData();
  };

  const Item = ({nama, gambar, kota, status, username}) => (
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
          <Text style={styles.detail}>{username}</Text>
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
        gambar={item.item.gambar[0].nama}
        kota={item.item.lokasi.kota}
        status={item.hilang_ditemukan}
        username={item.user.username}
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
          showsUserLocation={true}
          loadingEnabled={true}
          style={styles.map}
          customMapStyle={customMapStyle}
          region={{
            latitude: location
              ? parseFloat(location.coords.lat)
              : -1.142232852071283,
            longitude: location
              ? parseFloat(location.coords.lng)
              : 116.86777883563393,
            latitudeDelta: location ? 0.015 : 30,
            longitudeDelta: location ? 0.0121 : 30,
          }}>
          {filterData &&
            filterData.map((item, i) => (
              <Marker
                key={i}
                coordinate={{
                  latitude: parseFloat(item.item.lokasi.lat),
                  longitude: parseFloat(item.item.lokasi.lng),
                }}
                image={{
                  uri: `${URL_STORAGE}/images/marker.png`,
                }}>
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
        <Pressable onPress={onPressAll}>
          <IonIcons
            name={filterActive ? 'grid-outline' : 'grid'}
            size={32}
            color={'#1262A5'}
          />
        </Pressable>
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

      {filterDataCount === 0 && filterData && (
        <Text style={styles.contentBlank}>Data masih Kosong</Text>
      )}
      {isError && !filterData && <Error />}
      <View style={styles.contentContainer}>
        {filterData ? (
          <FlatList
            data={filterData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.contentContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          !isError && <Loader />
        )}
      </View>
    </View>
  );
};

export default MapSekitar;
