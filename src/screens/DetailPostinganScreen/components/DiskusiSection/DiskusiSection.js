import {View, Text} from 'react-native';
import React from 'react';
import styles from './DiskusiSectionStyle';
import {Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Pressable} from 'react-native';
import {URL_STORAGE} from '../../../../config/variable';
import CustomText from '../../../../components/CustomText/CustomText';

const DiskusiSection = ({komentar}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diskusi</Text>

      {komentar.length > 0 ? (
        komentar.map((km, idx) => (
          <View style={{paddingHorizontal: 16}} key={idx}>
            <View style={styles.userContainer}>
              <Image
                source={{uri: `${URL_STORAGE}/foto/${komentar.user.foto}`}}
                style={{width: 32, height: 32, borderRadius: 16}}
              />
              <Text style={styles.nama}>{komentar.user.nama}</Text>
            </View>
            <View
              style={{
                ...styles.userContainer,
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <Text style={styles.komen}>{komentar.pesan}</Text>
              <MaterialCommunityIcons
                name="heart"
                size={20}
                style={{flexBasis: '5%'}}
                color={'#F44336'}
              />
            </View>
            <View style={styles.userContainer}>
              <Text style={{...styles.bottom}}>{komentar.diffForHumans}</Text>
              <Text style={{...styles.bottom}}>
                {komentar.komentar_suka.length} suka
              </Text>
              <Text style={{...styles.bottom}}>balas</Text>
            </View>
            <Pressable style={{paddingVertical: 8}}>
              <Text style={styles.btnText}>Lihat semua</Text>
            </Pressable>
          </View>
        ))
      ) : (
        <CustomText style={{paddingHorizontal: 16, paddingBottom: 16}}>
          Belum ada diskusi
        </CustomText>
      )}
    </View>
  );
};

export default DiskusiSection;
