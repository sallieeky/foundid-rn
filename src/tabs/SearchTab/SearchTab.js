import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';

const SearchTab = ({location, onReload}) => {
  return (
    <View>
      {location && console.log(location)}
      <Header location={location} onReload={onReload} />
      <Text>SearchTab</Text>
    </View>
  );
};

export default SearchTab;
