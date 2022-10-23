import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './PublisherSectionStyle';
import {SocialIcon} from 'react-native-elements';

const PublisherSection = ({user}) => {
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
              marginLeft: 8,
            }}>
            <Text style={styles.nama}>{user.nama}</Text>
          </View>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Hubungi melalui:</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
          }}>
          {user.whatsapp && (
            <SocialIcon
              button
              onPress={() => console.log('dawdaw')}
              iconSize={20}
              style={{
                ...styles.btnSosmed,
                backgroundColor: '#55F371',
                marginRight: 4,
              }}
              type="whatsapp"
            />
          )}
          {user.telegram && (
            <SocialIcon
              button
              onPress={() => console.log('dawdaw')}
              iconSize={20}
              style={{
                ...styles.btnSosmed,
                backgroundColor: '#27A6E6',
                marginRight: 4,
              }}
              type="telegram"
            />
          )}
          {user.instagram && (
            <SocialIcon
              button
              onPress={() => console.log('dawdaw')}
              iconSize={20}
              style={{
                ...styles.btnSosmed,
                backgroundColor: '#FE0099',
                marginRight: 4,
              }}
              type="instagram"
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default PublisherSection;
