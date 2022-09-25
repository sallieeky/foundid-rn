import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CardUserStyle';
import IonIcons from 'react-native-vector-icons/Ionicons';

const CardUser = () => {
  return (
    <View>
      <View style={styles.container}>
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
              source={require('../../../../assets/images/profile_blank.png')}
              style={styles.imgProfile}
            />
            <View style={styles.profileLvContainer}>
              <Text style={styles.profileLv}>Lv. 99</Text>
            </View>
            <View style={styles.profileXpContainer}>
              <Text style={styles.profileXp}>EXP</Text>
              <View style={styles.xpBack} />
              <View style={{...styles.xpFront, width: 30}} />
            </View>
          </View>
          <View>
            <Text style={styles.hello}>Hello,</Text>
            <Text style={styles.nama}>Sallie Mansurina</Text>
            <View style={styles.noTelpContainer}>
              <Text style={styles.noTelp}>081243942304</Text>
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
  );
};

export default CardUser;
