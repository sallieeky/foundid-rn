import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from './TipsStyle';

const Tips = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tips</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{...styles.tipsContainer, backgroundColor: '#1262A5'}}>
          <Image
            source={require('../../../../assets/images/dummy_info.png')}
            style={styles.tipsImage}
          />
          <Text style={styles.tipsTitle}>
            Ini Dia 10 Tips Anti Kelupaan Barang Kamu!
          </Text>
        </View>
        <View style={{...styles.tipsContainer, backgroundColor: '#FC6011'}}>
          <Image
            source={require('../../../../assets/images/dummy_info.png')}
            style={styles.tipsImage}
          />
          <Text style={styles.tipsTitle}>5 Tips Powerful Anti Kemalingan</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Tips;
