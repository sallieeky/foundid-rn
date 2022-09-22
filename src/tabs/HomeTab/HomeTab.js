import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import API from '../../config/api';
import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import styles from './HomeTabStyle';
import Terbaru from './components/Terbaru/Terbaru';
const HomeTab = ({navigation}) => {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await API.get('/tes');
    setData(response.data);
  };

  return (
    <View style={styles.body}>
      <Header />
      <CardUser />
      <Terbaru />
    </View>
  );
};

export default HomeTab;
