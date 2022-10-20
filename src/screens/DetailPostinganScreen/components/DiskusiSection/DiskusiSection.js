import {View, Text} from 'react-native';
import React from 'react';
import styles from './DiskusiSectionStyle';
import {Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Pressable} from 'react-native';

const DiskusiSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diskusi</Text>

      <View style={{paddingHorizontal: 16}}>
        <View style={styles.userContainer}>
          <Image
            source={require('../../../../assets/images/profile_blank.png')}
            style={{width: 32, height: 32, borderRadius: 16}}
          />
          <Text style={styles.nama}>Sallie Mansurina</Text>
        </View>
        <View
          style={{
            ...styles.userContainer,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <Text style={styles.komen}>
            dawdjawdja owjdao wjdoajwdoa jw doawdj aoiw awdawda wdiuhaw dhaiuwd
            haiuwhd iawhd ijd aojw awdad awd a wd awda dh uau a uhadw dha ha u
          </Text>
          <MaterialCommunityIcons
            name="heart"
            size={20}
            style={{flexBasis: '5%'}}
            color={'#F44336'}
          />
        </View>
        <View style={styles.userContainer}>
          <Text style={{...styles.bottom}}>24 menit lalu</Text>
          <Text style={{...styles.bottom}}>3 suka</Text>
          <Text style={{...styles.bottom}}>balas</Text>
        </View>
      </View>

      <View style={{paddingHorizontal: 16, marginTop: 16}}>
        <View style={styles.userContainer}>
          <Image
            source={require('../../../../assets/images/profile_blank.png')}
            style={{width: 32, height: 32, borderRadius: 16}}
          />
          <Text style={styles.nama}>Sallie Mansurina</Text>
        </View>
        <View
          style={{
            ...styles.userContainer,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <Text style={styles.komen}>
            haiuwhd iawhd ijd aojw awdad awd a wd awda dh uau a uhadw dha ha u
          </Text>
          <MaterialCommunityIcons
            name="heart-outline"
            size={20}
            style={{flexBasis: '5%'}}
            color={'#242424'}
          />
        </View>
        <View style={styles.userContainer}>
          <Text style={{...styles.bottom}}>24 menit lalu</Text>
          <Text style={{...styles.bottom}}>3 suka</Text>
          <Text style={{...styles.bottom}}>balas</Text>
        </View>
      </View>

      <Pressable style={{paddingVertical: 4}}>
        <Text style={styles.btnText}>Lihat semua</Text>
      </Pressable>
    </View>
  );
};

export default DiskusiSection;
