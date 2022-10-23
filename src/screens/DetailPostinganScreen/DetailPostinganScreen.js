import React, {useEffect, useState} from 'react';
import styles from './DetailPostinganScreenStyle';
import ImageSwiper from './components/ImageSwiper/ImageSwiper';
import TitleSection from './components/TitleSection/TitleSection';
import DetailSection from './components/DetailSection/DetailSection';
import PublisherSection from './components/PublisherSection/PublisherSection';
import {ScrollView} from 'react-native';
import DeskripsiSection from './components/DeskripsiSection/DeskripsiSection';
import DiskusiSection from './components/DiskusiSection/DiskusiSection';
import {URL_STORAGE} from '../../config/variable';

const DetailPostinganScreen = ({route, navigation}) => {
  const {postingan} = route.params;
  const [foto, setFoto] = useState([]);
  useEffect(() => {
    getFoto();
  }, []);

  const getFoto = () => {
    let ft = [];
    postingan.item.gambar.map(itm => {
      ft.push(`${URL_STORAGE}/item/${itm.nama}`);
    });
    setFoto(ft);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageSwiper
        navigation={navigation}
        foto={foto}
        timestamps={postingan.diffForHumans}
      />
      <TitleSection
        status={postingan.hilang_ditemukan}
        isDone={postingan.isDone}
        title={postingan.item.nama}
      />
      <DetailSection
        lokasi={postingan.item.lokasi.kota}
        kategori={postingan.item.kategory.nama}
      />
      <PublisherSection user={postingan.user} />
      <DeskripsiSection deskripsi={postingan.item.deskripsi} />
      <DiskusiSection komentar={postingan.komentar} />
    </ScrollView>
  );
};

export default DetailPostinganScreen;
