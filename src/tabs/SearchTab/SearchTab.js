import {
  View,
  Text,
  Button,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Header from '../../components/Header/Header';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './SearchTabStyle';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItem from '../../components/ListItem/ListItem';

const SearchTab = ({location, onReload}) => {
  const refRBSheet = useRef();
  const [filterActive, setFilterActive] = useState();
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState();

  useEffect(() => {
    getSearchHistory();
  }, []);

  const getSearchHistory = async () => {
    const search = await AsyncStorage.getItem('search');
    setSearchHistory(search);
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
      {console.log(searchHistory)}
      <Header location={location} onReload={onReload} />

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
      {/* {!searchHistory && (
        <View style={styles.noSearchHistoryContainer}>
          <Text style={styles.noSearchHistoryText}>
            Cari nama barang yang hilang atau ditemukan
          </Text>
        </View>
      )} */}
      {/* END NO SEARCH HISTORY */}

      {/* TERKINI SECTION */}
      <View style={styles.terkiniSectionContainer}>
        <View style={styles.terkiniSectionHead}>
          <Text style={styles.terkiniSectionTitle}>Terkini</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.terkiniSectionHapus}>Hapus</Text>
          </TouchableOpacity>
        </View>

        <ListItem />
      </View>
      {/* END TERKINI SECTION */}

      {/* BOTTOM SHEET */}
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={false}
        height={500}
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
          <Text>Hallo</Text>
        </View>
      </RBSheet>
      {/* END BOTTOM SHEET SECTION */}
    </View>
  );
};

export default SearchTab;
