import {
  View,
  Text,
  Pressable,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import styles from './TitleSectionStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';

const TitleSection = ({status, isDone, title}) => {
  const refRBSheetStatus = useRef();
  const refRBSheetCase = useRef();

  const onOpenStatus = () => {
    refRBSheetStatus.current.open();
  };
  const onOpenCase = () => {
    refRBSheetCase.current.open();
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Pressable
          onPress={onOpenStatus}
          style={{
            ...styles.info,
            backgroundColor: status === 'Kehilangan' ? '#FC6011' : '#1F6BAA',
            justifyContent: 'center',
          }}>
          <Text style={styles.infoText}>{status}</Text>
        </Pressable>
        <Pressable
          onPress={onOpenCase}
          style={{
            ...styles.info,
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderColor: isDone == true ? '#00AA5B' : '#FFD700',
          }}>
          <Ionicons
            name="search-circle"
            size={32}
            color={isDone == true ? '#00AA5B' : '#FFD700'}
          />
          <Text style={{...styles.infoText, color: '#242424'}}>
            {isDone == true ? 'Case Closed' : 'Case Open'}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => console.log('Berhasil')}
          style={{
            ...styles.info,
            backgroundColor: '#1687D1',
            justifyContent: 'center',
          }}>
          <Ionicons name="md-chatbox-ellipses" size={24} color={'#FFFFFF'} />
          <Text style={{...styles.infoText, marginLeft: 4}}>Diskusi</Text>
        </Pressable>
      </View>
      <Text style={styles.title}>{title}</Text>

      {/* BOTTOM SHEET STATUS */}
      <RBSheet
        ref={refRBSheetStatus}
        closeOnPressMask={false}
        height={Dimensions.get('window').height * 0.5}
        closeOnPressBack={true}
        animationType={'none'}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000030',
          },
          container: {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            padding: 24,
          },
        }}>
        <View>
          <ScrollView style={{height: '90%'}}>
            <Text style={styles.sheetTitle}>Status Keadaan Barang</Text>
            <View style={{marginBottom: 24}}>
              <View style={styles.sheetSubTitleContainer}>
                <View
                  style={{
                    ...styles.sheetSubTitleCircle,
                    backgroundColor: '#FC6011',
                  }}
                />
                <Text style={styles.sheetSubTitle}>Kehilangan</Text>
              </View>
              <Text style={styles.sheetInfo}>
                Postingan tentang kehilangan barang yang diupload oleh pengguna.
              </Text>
            </View>
            <View style={{marginBottom: 24}}>
              <View style={styles.sheetSubTitleContainer}>
                <View
                  style={{
                    ...styles.sheetSubTitleCircle,
                    backgroundColor: '#1262A5',
                  }}
                />
                <Text style={styles.sheetSubTitle}>Ditemukan</Text>
              </View>
              <Text style={styles.sheetInfo}>
                Postingan tentang menemukan barang hilang yang diupload oleh
                pengguna.
              </Text>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={styles.sheetBtnOk}
            activeOpacity={0.8}
            onPress={() => refRBSheetStatus.current.close()}>
            <Text style={styles.sheetBtnText}>OK</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
      {/* BOTTOM SHEET STATUS */}

      {/* BOTTOM SHEET CASE */}
      <RBSheet
        ref={refRBSheetCase}
        closeOnPressMask={false}
        height={Dimensions.get('window').height * 0.5}
        closeOnPressBack={true}
        animationType={'none'}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000030',
          },
          container: {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            padding: 24,
          },
        }}>
        <View>
          <ScrollView style={{height: '90%'}}>
            <Text style={styles.sheetTitle}>Status Postingan</Text>
            <View style={{marginBottom: 24}}>
              <View style={styles.sheetSubTitleContainer}>
                <View
                  style={{
                    ...styles.sheetSubTitleCircle,
                    backgroundColor: '#FC6011',
                  }}
                />
                <Text style={styles.sheetSubTitle}>Case Open</Text>
              </View>
              <Text style={styles.sheetInfo}>
                Pengguna yang membuat postingan ini masih butuh info terkait
                barang yang diupload. Bantu pengguna ini untuk menyelesaikan
                kasusnya melalui diskusi atau hubungi kontak pengguna yang
                tercantum.
              </Text>
            </View>
            <View style={{marginBottom: 24}}>
              <View style={styles.sheetSubTitleContainer}>
                <View
                  style={{
                    ...styles.sheetSubTitleCircle,
                    backgroundColor: '#1262A5',
                  }}
                />
                <Text style={styles.sheetSubTitle}>Case Closed</Text>
              </View>
              <Text style={styles.sheetInfo}>
                Pengguna yang membuat postingan ini telah mendapatkan info dan
                menyelesaikan kasusnya terkait barang yang diupload.
              </Text>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={styles.sheetBtnOk}
            activeOpacity={0.8}
            onPress={() => refRBSheetCase.current.close()}>
            <Text style={styles.sheetBtnText}>OK</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
      {/* BOTTOM SHEET CASE */}
    </View>
  );
};

export default TitleSection;
