import {View} from 'react-native';
import React from 'react';
import styles from './DetailPostinganScreenStyle';
import ImageSwiper from './components/ImageSwiper/ImageSwiper';
import TitleSection from './components/TitleSection/TitleSection';
import DetailSection from './components/DetailSection/DetailSection';

const DetailPostinganScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageSwiper navigation={navigation} />
      <TitleSection />
      <DetailSection />
    </View>
  );
};

export default DetailPostinganScreen;
