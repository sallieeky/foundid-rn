import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './TopFounderStyle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TopFounder = ({navigation}) => {
  return (
    <View>
      <View style={styles.topFounderContainer}>
        <View style={styles.topFounderMainBox}>
          <Text style={styles.topFounderMainBoxTitle}>TOP FOUNDER</Text>
          <View style={styles.topFounderMainBoxContentContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  ...styles.topFounderMainBoxContentRank,
                  color: '#FFB02E',
                }}>
                #1
              </Text>
              <Text style={styles.topFounderMainBoxContentNama}>
                Sallie Mansurina
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="medal"
                size={12}
                color={'#FFB02E'}
              />
              <Text style={styles.topFounderMainBoxContentPoint}>299 pts</Text>
            </View>
          </View>
          <View style={styles.topFounderMainBoxContentContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  ...styles.topFounderMainBoxContentRank,
                  color: '#BEBEBE',
                }}>
                #1
              </Text>
              <Text style={styles.topFounderMainBoxContentNama}>
                Sallie Mansurina
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="medal"
                size={12}
                color={'#BEBEBE'}
              />
              <Text style={styles.topFounderMainBoxContentPoint}>299 pts</Text>
            </View>
          </View>
          <View style={styles.topFounderMainBoxContentContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  ...styles.topFounderMainBoxContentRank,
                  color: '#D3883E',
                }}>
                #1
              </Text>
              <Text style={styles.topFounderMainBoxContentNama}>
                Sallie Mansurina
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="medal"
                size={12}
                color={'#D3883E'}
              />
              <Text style={styles.topFounderMainBoxContentPoint}>299 pts</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.topFounderDetailBox}
          onPress={() => navigation.push('MapScreen')}>
          <Image
            source={require('../../../../assets/images/top_founder.png')}
            style={styles.topFounderDetailBoxImage}
            resizeMode="contain"
          />
          <SimpleLineIcons
            name="arrow-right-circle"
            size={32}
            color={'#FFFFFF'}
          />
          <Text style={styles.topFounderDetailBoxText}>Lihat Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopFounder;
