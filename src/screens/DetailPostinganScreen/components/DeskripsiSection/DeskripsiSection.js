import {View, Text} from 'react-native';
import React from 'react';
import styles from './DeskripsiSectionStyle';
import ViewMoreText from 'react-native-view-more-text';

const DeskripsiSection = ({deskripsi}) => {
  const renderViewMore = onPress => {
    return (
      <Text onPress={onPress} style={styles.viewMore}>
        Lihat lebih banyak
      </Text>
    );
  };

  const renderViewLess = onPress => {
    return (
      <Text onPress={onPress} style={styles.viewMore}>
        Lihat lebih sedikit
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deskripsi</Text>

      <ViewMoreText
        numberOfLines={5}
        renderViewMore={renderViewMore}
        renderViewLess={renderViewLess}
        textStyle={{textAlign: 'justify', paddingHorizontal: 16}}>
        <Text style={styles.deskripsi}>{deskripsi}</Text>
      </ViewMoreText>
    </View>
  );
};

export default DeskripsiSection;
