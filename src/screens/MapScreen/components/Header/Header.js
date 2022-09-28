import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './HeaderStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({location, onReload, navigation}) => {
  return (
    <View style={styles.header}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={32}
              color={'#242424'}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.lokasiTitle}>Lokasi Saat Ini</Text>
            <View style={styles.lokasiContainer}>
              <MaterialCommunityIcons
                name="map-marker"
                size={24}
                color={'#1687D1'}
              />
              <Text style={styles.lokasi}>
                {location ? location.detail[0].subAdminArea : 'Melacak lokasi'}
              </Text>

              {!location && (
                <TouchableOpacity activeOpacity={0.6} onPress={onReload}>
                  <MaterialIcons name="refresh" size={24} color={'#242424'} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
