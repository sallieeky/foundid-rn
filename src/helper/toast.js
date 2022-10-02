import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {globalFont} from '../assets/style/globalStyle';

const Toast = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);

  if (show) {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 72,
          left: 16,
          right: 16,
          padding: 8,
          borderLeftWidth: 4,
          borderLeftColor: '#E43837',
          backgroundColor: '#FA9F97',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 4,
        }}>
        <Feather name="alert-triangle" size={24} style={{marginRight: 16}} />
        <View style={{flex: 1}}>
          <Text style={{...globalFont.bold, size: 16}}>
            Gagal Melacak Lokasi Anda
          </Text>
          <Text style={{...globalFont.normal, fontSize: 12}}>
            Coba periksa koneksi jaringan internet anda dan coba lagi
          </Text>
        </View>
      </View>
    );
  }
};

const showToast = () => {
  return <Toast />;
};

export default Toast;
