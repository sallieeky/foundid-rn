import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Geocoder from 'react-native-geocoder';

const SearchTab = () => {
  const [data, setData] = useState();

  var NY = {
    lat: -1.142232852071283,
    lng: 116.86777883563393,
  };

  useEffect(() => {
    Geocoder.geocodePosition(NY)
      .then(res => {
        setData(JSON.stringify(res));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <ScrollView>
      <Text>{data}</Text>
    </ScrollView>
  );
};

export default SearchTab;

const styles = StyleSheet.create({});
