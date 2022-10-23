import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './ListItemStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import API from '../../../../config/api';
import {URL_STORAGE} from '../../../../config/variable';

const Loader = () => (
  <SkeletonPlaceholder>
    <View style={styles.skeletonContainer}>
      <SkeletonPlaceholder.Item
        marginHorizontal={8}
        width={142}
        height={164}
        borderRadius={16}
      />
      <SkeletonPlaceholder.Item
        marginHorizontal={8}
        width={142}
        height={164}
        borderRadius={16}
      />
      <SkeletonPlaceholder.Item
        marginHorizontal={8}
        width={142}
        height={164}
        borderRadius={16}
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

const Item = ({nama, gambar, kota, status, username}) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.content}>
    <View style={styles.contentImageSection}>
      <Image
        source={{uri: `${URL_STORAGE}/item/${gambar}`}}
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
        <Text style={styles.detail}>{username}</Text>
      </View>
    </View>
  </TouchableOpacity>
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

const ListItem = ({header, location}) => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, [location]);

  const getData = async () => {
    setIsError(false);
    try {
      const response = await API.get(
        `/global/get-list-item-postingan?kota=${
          location ? location.detail[0].subAdminArea : ''
        }`,
      );
      console.log(response.data);
      setData(response.data);
    } catch (e) {
      setIsError(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.listItemHeadingContainer}>
        <Text style={styles.listItemHeading}>{header}</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.lihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      {isError && !data && <Error pressHandler={() => getData()} />}
      {!isError && !data && <Loader />}
      {data &&
        (data.total < 1 ? (
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
        ))}
    </View>
  );
};

export default ListItem;
