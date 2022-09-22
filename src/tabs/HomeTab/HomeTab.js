import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import API from '../../config/api';
const HomeTab = ({navigation}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await API.get('/tes');
    setData(data.data);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontFamily: 'Frijole-Regular', fontSize: 24}}>HomeTab</Text>
      <Text style={{fontFamily: 'Frijole-Regular', fontSize: 16}}>
        {data[0].pesan}
      </Text>
      <Icon name="rocket" size={30} color="#900" />
      <Button
        title="Halaman Maps"
        onPress={() => navigation.push('MapScreen')}
      />
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
