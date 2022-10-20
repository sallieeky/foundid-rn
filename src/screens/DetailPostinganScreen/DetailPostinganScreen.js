import React from 'react';
import styles from './DetailPostinganScreenStyle';
import ImageSwiper from './components/ImageSwiper/ImageSwiper';
import TitleSection from './components/TitleSection/TitleSection';
import DetailSection from './components/DetailSection/DetailSection';
import PublisherSection from './components/PublisherSection/PublisherSection';
import {ScrollView} from 'react-native';
import DeskripsiSection from './components/DeskripsiSection/DeskripsiSection';

const DetailPostinganScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <ImageSwiper navigation={navigation} />
      <TitleSection />
      <DetailSection />
      <PublisherSection />
      <DeskripsiSection />
    </ScrollView>
  );
};

export default DetailPostinganScreen;
