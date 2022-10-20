import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import styles from './ImageSwiperStyle';

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={styles.paginationText}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

const ImageSwiper = ({navigation}) => {
  return (
    <View style={styles.imageSwiperContainer}>
      <Pressable
        style={styles.btnBackContainer}
        onPress={() => {
          navigation.goBack();
        }}>
        <View>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            color={'#F9F9F9'}
            size={20}
          />
        </View>
      </Pressable>
      <View style={styles.waktuUploadContainer}>
        <MaterialCommunityIcons
          name="clock-time-five-outline"
          color={'#F9F9F9'}
          size={20}
        />
        <View>
          <Text style={styles.waktuUploadText}>Diupload</Text>
          <Text style={styles.waktuUploadText}>54 Detik Lalu</Text>
        </View>
      </View>
      <Pressable
        style={{flex: 1}}
        onPress={() => navigation.navigate('ImageViewer')}>
        <Swiper
          showsButtons={false}
          loop={false}
          renderPagination={renderPagination}>
          <View style={styles.slide}>
            <Image
              source={require('../../../../assets/images/dummy_item.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../../../assets/images/dummy_item.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../../../assets/images/dummy_item.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </Swiper>
      </Pressable>
    </View>
  );
};

export default ImageSwiper;
