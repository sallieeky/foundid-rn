import {View} from 'react-native';
import React from 'react';
import styles from './ModalStyle';
import CustomText from '../CustomText/CustomText';
import {TouchableOpacity} from 'react-native';

const Modal = ({icon, title, negativeAction, positiveAction, single}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {icon}
        <CustomText style={{textAlign: 'center', marginTop: 16}}>
          {title}
        </CustomText>

        {single ? (
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={positiveAction}
              activeOpacity={0.8}
              style={{
                ...styles.btn,
                backgroundColor: '#1687D1',
                flexBasis: '100%',
              }}>
              <CustomText style={{color: '#F9F9F9'}}>OK</CustomText>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={positiveAction}
              activeOpacity={0.8}
              style={{...styles.btn, backgroundColor: '#1687D1'}}>
              <CustomText style={{color: '#F9F9F9'}}>Iya</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={negativeAction}
              activeOpacity={0.8}
              style={styles.btn}>
              <CustomText style={{color: '#4A4B4D'}}>Tidak</CustomText>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Modal;
