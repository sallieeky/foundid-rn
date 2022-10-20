import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CardUserStyle';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../../../../config/api';
import {URL_STORAGE} from '../../../../config/variable';

const CardUser = ({navigation}) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    getUserLogin();
  }, []);

  const getUserLogin = async () => {
    const userId = await AsyncStorage.getItem('user_id');
    if (userId) {
      try {
        const response = await API.get(`/home-tab/get-user-login?id=${userId}`);
        setUser(response.data);
      } catch (e) {
        //
      }
    }
  };

  return (
    <View>
      {!user && (
        <TouchableOpacity
          style={{...styles.container, height: 104}}
          activeOpacity={0.9}
          onPress={() => navigation.push('LoginScreen')}>
          <View style={styles.noLoginCircle} />
          <Image
            source={require('../../../../assets/images/login_hometab.png')}
            style={styles.noLoginImage}
            resizeMode="contain"
          />
          <View style={styles.noLoginTextContainer}>
            <Text style={styles.noLoginText}>
              Login lebih dulu untuk dapat mengakses profil
            </Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={40}
              color={'#F9F9F9'}
            />
          </View>
        </TouchableOpacity>
      )}
      {user && (
        <View>
          <View style={{...styles.container}}>
            <TouchableOpacity style={styles.accentRight} activeOpacity={0.6}>
              <View style={styles.circle} />
              <IonIcons
                name="grid-outline"
                size={32}
                color={'#1687D1'}
                style={styles.accentIcon}
              />
            </TouchableOpacity>
            <View style={styles.profileContainer}>
              <View>
                <Image
                  source={
                    user.foto
                      ? {
                          uri: `${URL_STORAGE}/foto/${user.foto}`,
                        }
                      : require('../../../../assets/images/profile_blank.png')
                  }
                  style={styles.imgProfile}
                />
                {/* <View style={styles.profileLvContainer}>
                  <Text style={styles.profileLv}>Lv. 99</Text>
                </View>
                <View style={styles.profileXpContainer}>
                  <Text style={styles.profileXp}>EXP</Text>
                  <View style={styles.xpBack} />
                  <View style={{...styles.xpFront, width: 30}} />
                </View> */}
              </View>
              <View>
                <Text style={styles.hello}>Hello,</Text>
                <Text style={styles.nama}>{user.nama}</Text>
                <View style={styles.noTelpContainer}>
                  <Text style={styles.noTelp}>{user.no_telp}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottom}>
              <Text style={styles.bottomText}>BARANG SAYA</Text>
            </View>
            <View style={styles.bottom}>
              <Text style={styles.bottomText}>KEHILANGAN</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default CardUser;
