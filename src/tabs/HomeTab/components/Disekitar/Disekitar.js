import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DisekitarStyle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Disekitar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.disekitarHeading}>Disekitar</Text>
      <View style={styles.disekitarContainer}>
        <View style={styles.disekitarMainBox}>
          <Image
            source={require('../../../../assets/images/disekitar.png')}
            style={styles.disekitarMainBoxImage}
          />
          <Text style={styles.disekitarMainBoxText}>
            Cari Tau Tentang Keberadaan Barang di Sekitar Anda
          </Text>
          <View style={styles.disekitarMainBoxBottomContainer}>
            <Text style={styles.disekitarMainBoxBottomText}>
              Kehilangan : 100
            </Text>
            <Text style={styles.disekitarMainBoxBottomText}>
              Ditemukan : 100
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.disekitarDetailBox}
          onPress={navigation}>
          <Image
            source={require('../../../../assets/images/disekitar.png')}
            style={styles.disekitarDetailBoxImage}
          />
          <SimpleLineIcons
            name="arrow-right-circle"
            size={32}
            color={'#FFFFFF'}
          />
          <Text style={styles.disekitarDetailBoxText}>Lihat Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Disekitar;
