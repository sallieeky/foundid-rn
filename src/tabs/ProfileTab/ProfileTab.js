import {StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../../components/CustomText/CustomText';

const ProfileTab = () => {
  return (
    <View>
      <CustomText style={{textAlign: 'center', marginTop: 24}}>
        Profile
      </CustomText>
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({});
