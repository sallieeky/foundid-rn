import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OnboardingScreen = ({navigation}) => {
  const onDone = async () => {
    try {
      await AsyncStorage.setItem('isOnboarding', 'true');
      navigation.replace('MainScreen');
    } catch (e) {
      alert('Kesalahan');
    }
  };

  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      showsButtons={true}
      scrollEnabled={false}
      nextButton={
        <View style={styles.nextContainer}>
          <Text style={styles.next}>Selanjutnya</Text>
          <Icon name="chevron-right" size={16} color="#fff" />
        </View>
      }
      prevButton={<></>}
      buttonWrapperStyle={{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
      dotStyle={{
        bottom: 96,
        width: 16,
      }}
      activeDotStyle={{
        bottom: 96,
        width: 24,
      }}>
      <View style={styles.slide1}>
        <View style={styles.titleContainer}>
          <Text style={styles.welcome}>Selamat Datang Di</Text>
          <Text style={styles.title}>Found.Id</Text>
        </View>
        <Image
          source={require('../../assets/images/onboarding_welcome.png')}
          style={styles.img}
        />
        <Text style={styles.subtitle}>
          Found.id merupakan aplikasi yang dapat membantu anda dalam bertukar
          informasi tentang barang yang hilang maupun barang yang ditemukan
        </Text>
      </View>
      {/* SLIDE 2 */}
      <View style={styles.slide1}>
        <Image
          source={require('../../assets/images/onboarding_foundid.png')}
          style={styles.img2}
        />
        <Text style={styles.title2}>Saling Membantu</Text>
        <Text style={styles.subtitle2}>
          Dengan Found.id anda dapat menemukan barang anda yang hilang dengan
          mudah. Selain itu, anda juga dapat membantu orang lain dalam menemukan
          barang mereka yang hilang
        </Text>
      </View>
      {/* SLIDE 3 */}
      <View style={styles.slide1}>
        <Image
          source={require('../../assets/images/onboarding_mulai.png')}
          style={styles.img2}
        />
        <Text style={styles.title2}>Ayo Bergabung !</Text>
        <Text style={styles.subtitle2}>
          Mulai sekarang, ayo temukan barangmu dan bantu orang lain untuk
          menemukan barang mereka di Found.id
        </Text>
        <TouchableOpacity style={styles.mulaiContainer} onPress={onDone}>
          <Text style={styles.mulai}>Mulai</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  wrapper: {},
  titleContainer: {
    marginLeft: 32,
    marginTop: 64,
  },
  welcome: {
    fontFamily: 'Nunito-Medium',
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  title: {
    fontFamily: 'Nunito-Black',
    color: '#1687D1',
    fontSize: 32,
  },
  img: {
    height: 294,
    width: 312,
    alignSelf: 'center',
    marginTop: 32,
  },
  subtitle: {
    textAlign: 'center',
    marginHorizontal: 32,
    marginTop: 40,
    fontFamily: 'Nunito-Medium',
    fontSize: 16,
  },
  nextContainer: {
    paddingVertical: 8,
    paddingHorizontal: 64,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1687D1',
    marginBottom: 48,
  },
  next: {
    color: '#fff',
    fontSize: 16,
    marginRight: 16,
    fontFamily: 'Nunito-Black',
  },
  slide1: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  // SLIDE 2
  slide2: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  img2: {
    height: 294,
    width: 312,
    alignSelf: 'center',
    marginTop: 96,
  },
  title2: {
    fontFamily: 'Nunito-Black',
    color: '#000000',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 48,
  },
  subtitle2: {
    textAlign: 'center',
    marginHorizontal: 32,
    marginTop: 24,
    fontFamily: 'Nunito-Medium',
    fontSize: 16,
  },
  // SLIDE 3
  slide3: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Nunito-Black',
  },

  mulaiContainer: {
    position: 'absolute',
    bottom: 0,
    width: '60%',
    paddingVertical: 8,
    paddingHorizontal: 64,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1687D1',
    marginBottom: 58,
    alignSelf: 'center',
  },
  mulai: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Nunito-Black',
  },
});
