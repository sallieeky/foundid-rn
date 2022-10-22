import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import styles from './ImageViewerScreenStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ImageViewerScreen = ({route, navigation}) => {
  const {data, index} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialCommunityIcons name="close" color={'#F9F9F9'} size={24} />
        </Pressable>
      </View>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        loop={false}
        index={index}
        dot={
          <View
            style={{
              backgroundColor: '#F9F9F950',
              width: 8,
              height: 8,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#FFFFFF',
              width: 8,
              height: 8,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        prevButton={<Text style={{fontSize: 64, color: '#F9F9F9'}}>‹</Text>}
        nextButton={<Text style={{fontSize: 64, color: '#F9F9F9'}}>›</Text>}>
        {data &&
          data.map((item, idx) => (
            <View style={styles.slide} key={idx}>
              <Image
                source={{uri: item}}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
            </View>
          ))}
      </Swiper>
    </View>
  );
};

export default ImageViewerScreen;
