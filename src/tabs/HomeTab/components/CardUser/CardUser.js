import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './CardUserStyle';

const CardUser = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.profileContainer}>
        <Image
          source={require('../../../../assets/images/profile_blank.png')}
          style={styles.imgProfile}
        />
        <View>
          <Text style={styles.hello}>Hello,</Text>
          <Text style={styles.nama}>Sallie Mansurina</Text>
          <View style={styles.noTelpContainer}>
            <Text style={styles.noTelp}>081243942304</Text>
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
