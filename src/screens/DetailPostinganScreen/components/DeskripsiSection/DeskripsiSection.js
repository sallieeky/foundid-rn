import {View, Text} from 'react-native';
import React from 'react';
import styles from './DeskripsiSectionStyle';
import ViewMoreText from 'react-native-view-more-text';

const DeskripsiSection = () => {
  const renderViewMore = onPress => {
    return (
      <Text onPress={onPress} style={styles.viewMore}>
        View more
      </Text>
    );
  };

  const renderViewLess = onPress => {
    return (
      <Text onPress={onPress} style={styles.viewMore}>
        View less
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
        <Text style={styles.deskripsi}>
          Ditemukan sebuah laptop warna hitam bermerk Dell lengkap dengan stylus
          dan cover berwarna hitam dengan stiker nama di depan cover laptop
          bernamakan anna. Lorem ipsum sit dolor amet lorem ipsum sit olor amet
          Lorem ipsum sit dolor amet lorem ipsum sit olor amet Lorem ipsum sit
          dolor amet lorem ipsum sit olor amet
        </Text>
      </ViewMoreText>
    </View>
  );
};

export default DeskripsiSection;
