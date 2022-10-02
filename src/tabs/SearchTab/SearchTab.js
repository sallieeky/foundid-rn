import {
  View,
  Text,
  Button,
  Pressable,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Header from '../../components/Header/Header';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './SearchTabStyle';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItem from '../../components/ListItem/ListItem';
import API from '../../config/api';
import {RadioGroup} from 'react-native-radio-buttons-group';

const radioButtonsDataOrder = [
  {
    id: '1',
    label: 'Terbaru',
    value: 'DESC',
    labelStyle: styles.radioItem,
    selected: true,
  },
  {
    id: '2',
    label: 'Terlama',
    value: 'ASC',
    labelStyle: styles.radioItem,
  },
];
const radioButtonsDataStatus = [
  {
    id: '1',
    label: 'Belum Selesai',
    value: false,
    labelStyle: styles.radioItem,
    selected: true,
  },
  {
    id: '2',
    label: 'Selesai',
    value: true,
    labelStyle: styles.radioItem,
  },
];

const SearchTab = ({location, onReload}) => {
  const refRBSheet = useRef();
  const [filterActive, setFilterActive] = useState();
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState({
    order: null,
    kategori: null,
    status: null,
  });
  const [dataHistory, setDataHistory] = useState();
  const [radioButtonsOrder, setRadioButtonsOrder] = useState(
    radioButtonsDataOrder,
  );
  const [radioButtonsStatus, setRadioButtonsStatus] = useState(
    radioButtonsDataStatus,
  );

  useEffect(() => {
    getSearchHistory();
  }, []);

  function onPressRadioButtonOrder(radioButtonsArray) {
    setRadioButtonsOrder(radioButtonsArray);
    radioButtonsArray.map(rb => {
      if (rb.selected) {
        setFilter({...filter, order: rb.value});
      }
    });
  }
  function onPressRadioButtonStatus(radioButtonsArray) {
    setRadioButtonsStatus(radioButtonsArray);
    radioButtonsArray.map(rb => {
      if (rb.selected) {
        setFilter({...filter, status: rb.value});
      }
    });
  }

  const getSearchHistory = async () => {
    const search = await AsyncStorage.getItem('search');
    if (search) {
      const response = await API.get(`/search-tab/get-data-history?id=[1,4,5]`);
      setDataHistory(response.data);
      console.log(response.data);
    } else {
      setDataHistory();
    }
  };

  const onOpenFilter = () => {
    refRBSheet.current.open();
    setFilterOpen(true);
  };

  const onPressHilang = async () => {
    setFilterActive('hilang');
  };

  const onPressDitemukan = async () => {
    setFilterActive('ditemukan');
  };

  const onPressAll = () => {
    setFilterActive();
  };

  return (
    <View style={{height: '100%'}}>
      <Header location={location} onReload={onReload} />
      {console.log(filter)}
      {/* INPUT SEARCH SECTION */}
      <View style={styles.searchSectionContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Ketikkan nama barang"
        />
        <Pressable onPress={onOpenFilter}>
          <MaterialCommunityIcons
            style={{marginLeft: 8}}
            name="filter"
            size={32}
            color={filterOpen ? '#1687D1' : '#4A4B4D'}
          />
        </Pressable>
      </View>
      {/* END INPUT SEARCH SECTION */}

      {/* FILTER SECTION */}
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
      {/* END FILTER SECTION */}

      {/* NO SEARCH HISTORY */}
      {!dataHistory && (
        <View style={styles.noSearchHistoryContainer}>
          <Text style={styles.noSearchHistoryText}>
            Cari nama barang yang hilang atau ditemukan
          </Text>
        </View>
      )}
      {/* END NO SEARCH HISTORY */}

      {/* TERKINI SECTION */}
      {dataHistory && (
        <View style={styles.terkiniSectionContainer}>
          <View style={styles.terkiniSectionHead}>
            <Text style={styles.terkiniSectionTitle}>Terkini</Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.terkiniSectionHapus}>Hapus</Text>
            </TouchableOpacity>
          </View>

          <ListItem data={dataHistory} />
        </View>
      )}
      {/* END TERKINI SECTION */}

      {/* BOTTOM SHEET */}
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={false}
        height={Dimensions.get('window').height * 0.5}
        closeOnPressBack={true}
        animationType={'none'}
        onClose={() => setFilterOpen(false)}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000030',
          },
          container: {
            borderRadius: 8,
            padding: 16,
          },
        }}>
        <View>
          <View style={styles.bottomSheetHead}>
            <Text style={styles.bottomSheetHeadTitle}>Filter</Text>
            <Pressable onPress={() => refRBSheet.current.close()}>
              <MaterialCommunityIcons name="close" size={32} />
            </Pressable>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.bottomSheetOrderContainer}>
            <Text style={styles.bottomSheetOrderTitle}>Urutkan</Text>
            <RadioGroup
              radioButtons={radioButtonsOrder}
              onPress={onPressRadioButtonOrder}
              containerStyle={{
                alignItems: 'flex-start',
              }}
            />
          </View>
          <View style={styles.bottomSheetOrderContainer}>
            <Text style={styles.bottomSheetOrderTitle}>Status</Text>
            <RadioGroup
              radioButtons={radioButtonsStatus}
              onPress={onPressRadioButtonStatus}
              containerStyle={{
                alignItems: 'flex-start',
              }}
            />
          </View>
        </View>
      </RBSheet>
      {/* END BOTTOM SHEET SECTION */}
    </View>
  );
};

export default SearchTab;
