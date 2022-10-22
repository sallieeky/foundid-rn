import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
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

const ImageSwiper = ({navigation, foto, timestamps}) => {
  const [index, setIndex] = useState(0);

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
          <Text style={styles.waktuUploadText}>{timestamps}</Text>
        </View>
      </View>
      <Pressable
        style={{flex: 1}}
        onPress={() => navigation.navigate('ImageViewer', {data: foto, index})}>
        <Swiper
          showsButtons={false}
          loop={false}
          renderPagination={renderPagination}
          onIndexChanged={idx => setIndex(idx)}>
          {foto &&
            foto.map((ft, idx) => (
              <View style={styles.slide} key={idx}>
                <Image
                  source={{uri: ft}}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
            ))}
        </Swiper>
      </Pressable>
    </View>
  );
};

export default ImageSwiper;
