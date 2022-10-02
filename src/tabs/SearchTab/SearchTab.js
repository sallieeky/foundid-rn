import {
  View,
  Text,
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
import CheckBox from '@react-native-community/checkbox';
import ListItemSearch from './components/ListItemSearch/ListItemSearch';
import Spinner from 'react-native-spinkit';

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
  const [data, setData] = useState();
  const [totalData, setTotalData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [filterActive, setFilterActive] = useState();
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState({
    order: 'DESC',
    kategori: [],
    status: false,
    jenis: '',
  });
  const [namaBarang, setNamaBarang] = useState('');

  const [dataHistory, setDataHistory] = useState();
  const [kategori, setKategori] = useState();
  const [cbKategori, setCbKategori] = useState();
  const [radioButtonsOrder, setRadioButtonsOrder] = useState(
    radioButtonsDataOrder,
  );
  const [radioButtonsStatus, setRadioButtonsStatus] = useState(
    radioButtonsDataStatus,
  );

  useEffect(() => {
    getSearchHistory();
    getKategori();
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

  const onChangeNamaBarang = txt => {
    if (txt === '') {
      setData();
      getSearchHistory();
    } else {
      setDataHistory();
      getData();
    }
  };

  const getData = async (jenis = filter.jenis) => {
    setIsLoading(true);
    const response = await API.get(
      `/search-tab/get-data?kota=${location.detail[0].subAdminArea}&nama=${namaBarang}&order=${filter.order}&kategori=${filter.kategori}&status=${filter.status}&jenis=${jenis}`,
    );
    setData(response.data.data);
    setTotalData(response.data.total);
    setIsLoading(false);
  };

  const getSearchHistory = async () => {
    const search = await AsyncStorage.getItem('search');
    if (search) {
      const response = await API.get(
        `/search-tab/get-data-history?id=${search}`,
      );
      setDataHistory(response.data);
    } else {
      setDataHistory();
    }
  };

  const getKategori = async () => {
    const response = await API.get(`/search-tab/get-kategori`);
    setKategori(response.data);

    let kategoriValue = {};
    let kategoriFilter = [];
    response.data.map(kt => {
      kategoriValue[kt.nama] = true;
      kategoriFilter.push(kt.nama);
    });
    setCbKategori(kategoriValue);
    setFilter({...filter, kategori: kategoriFilter});
  };

  const kategoriCheck = (nama, value) => {
    setCbKategori({...cbKategori, [nama]: value});

    const dt = {...cbKategori, [nama]: value};
    const arr = [];
    for (const key in dt) {
      dt[key] && arr.push(key);
    }
    setFilter({...filter, kategori: arr});
  };

  const terapkanFilter = async () => {
    getData();
  };

  const onOpenFilter = () => {
    refRBSheet.current.open();
    setFilterOpen(true);
  };

  const onPressHilang = async () => {
    setFilterActive('hilang');
    setFilter({...filter, jenis: 'Kehilangan'});
    let jenis = 'Kehilangan';
    getData(jenis);
  };

  const onPressDitemukan = async () => {
    setFilterActive('ditemukan');
    setFilter({...filter, jenis: 'Ditemukan'});
    let jenis = 'Ditemukan';
    getData(jenis);
  };

  const onPressAll = () => {
    setFilterActive();
    setFilter({...filter, jenis: ''});
    getData('');
  };

  return (
    <View style={{height: '100%', backgroundColor: '#FEFEFE'}}>
      <Header location={location} onReload={onReload} />
      {/* INPUT SEARCH SECTION */}
      <View style={styles.searchSectionContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Ketikkan nama barang"
          value={namaBarang}
          onChangeText={txt => setNamaBarang(txt)}
          onEndEditing={e => onChangeNamaBarang(e.nativeEvent.text)}
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
                filterActive === 'hilang' ? '#1262A5' : '#FEFEFE',
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
                filterActive === 'ditemukan' ? '#1262A5' : '#FEFEFE',
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
      {!dataHistory && !data && (
        <View style={styles.noSearchHistoryContainer}>
          <Text style={styles.noSearchHistoryText}>
            Cari nama barang yang hilang atau ditemukan
          </Text>
        </View>
      )}
      {/* END NO SEARCH HISTORY */}

      {/* TERKINI SECTION */}
      {dataHistory && !data && (
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

      {/* DATA SEARCH SECTION */}
      <Spinner
        isVisible={isLoading}
        size={40}
        type={'Circle'}
        color={'#1687D1'}
        style={styles.loadingData}
      />
      {data && !isLoading && totalData > 0 && (
        <View style={styles.dataSectionContainer}>
          <ListItemSearch data={data} />
        </View>
      )}
      {data && totalData < 1 && !isLoading && (
        <Text style={styles.dataSectionNoData}>Data Tidak Ditemukan</Text>
      )}
      {/* ENDDATA SEARCH SECTION */}

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
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            padding: 24,
          },
        }}>
        <View>
          <View style={styles.bottomSheetHead}>
            <Text style={styles.bottomSheetHeadTitle}>Filter</Text>
            <Pressable onPress={() => refRBSheet.current.close()}>
              <MaterialCommunityIcons name="close" size={32} />
            </Pressable>
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
          <View style={{marginTop: 16}}>
            <Text style={styles.bottomSheetOrderTitle}>Kategori</Text>
            <View style={styles.bottomSheetCheckBoxContainer}>
              {cbKategori &&
                kategori.map((kt, i) => (
                  <View
                    key={i}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flexBasis: '50%',
                    }}>
                    <CheckBox
                      disabled={false}
                      value={cbKategori[kt.nama]}
                      onValueChange={newValue => {
                        kategoriCheck(kt.nama, newValue);
                      }}
                    />
                    <Text style={styles.bottomSheetCheckBoxName}>
                      {kt.nama}
                    </Text>
                  </View>
                ))}
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonTerapkan}
            activeOpacity={0.6}
            onPress={terapkanFilter}>
            <Text style={styles.buttonText}>Terapkan</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
      {/* END BOTTOM SHEET SECTION */}
    </View>
  );
};

export default SearchTab;
