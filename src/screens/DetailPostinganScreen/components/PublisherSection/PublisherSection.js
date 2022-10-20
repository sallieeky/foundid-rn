import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './PublisherSectionStyle';
import {SocialIcon} from 'react-native-elements';

const PublisherSection = () => {
  return (
    <View style={styles.container}>
      <View style={{...styles.sectionContainer}}>
        <Text style={styles.title}>Diupload oleh:</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <Image
            source={require('../../../../assets/images/profile_blank.png')}
            style={{width: 56, height: 56, borderRadius: 28}}
          />
          <View
            style={{
              flex: 1,
              marginLeft: 4,
            }}>
            <Text style={styles.nama}>Sallie Mansurina</Text>
            <Pressable style={styles.btnLihatProfile}>
              <Text style={styles.btnLihatProfileText}>Lihat Profile</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Hubungi melalui:</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
          }}>
          <SocialIcon
            button
            onPress={() => console.log('dawdaw')}
            iconSize={20}
            style={{...styles.btnSosmed, backgroundColor: '#55F371'}}
            type="whatsapp"
          />
          <SocialIcon
            button
            onPress={() => console.log('dawdaw')}
            iconSize={20}
            style={{...styles.btnSosmed, backgroundColor: '#27A6E6'}}
            type="telegram"
          />
          <SocialIcon
            button
            onPress={() => console.log('dawdaw')}
            iconSize={20}
            style={{...styles.btnSosmed, backgroundColor: '#FE0099'}}
            type="instagram"
          />
        </View>
      </View>
    </View>
  );
};

export default PublisherSection;
