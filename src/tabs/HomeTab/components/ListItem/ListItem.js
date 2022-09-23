import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './ListItemStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-adwad1223uh1',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-d12i3jjssdih',
    title: 'Fifth Item',
  },
];

const Item = ({title}) => (
  <View style={styles.content}>
    <View style={styles.contentImageSection}>
      <Image
        source={require('../../../../assets/images/dummy_item.jpg')}
        style={styles.contentImage}
      />
      <View style={styles.contentTitleSection}>
        <View style={styles.contentKategoriContainer}>
          <Text style={styles.contentKategori}>KEHILANGAN</Text>
        </View>
        <Text style={styles.title}>XIAOMI REDMI 9</Text>
      </View>
    </View>

    <View style={styles.contentDetailContainer}>
      <View style={styles.contentDetail}>
        <MaterialCommunityIcons name="map-marker-outline" size={16} />
        <Text style={styles.detail}>Sekitar Balikpapan</Text>
      </View>
      <View style={styles.contentDetail}>
        <MaterialCommunityIcons name="account-outline" size={16} />
        <Text style={styles.detail}>081243942304</Text>
      </View>
    </View>
  </View>
);

const ListItem = ({header}) => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <View style={styles.listItemHeadingContainer}>
        <Text style={styles.listItemHeading}>{header}</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.lihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.contentContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListItem;
