import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  kategoriHeading: {
    ...globalFont.bold,
    fontSize: 18,
    marginLeft: 24,
  },
  kategoriContainer: {
    marginHorizontal: 24,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  kategori: {
    alignItems: 'center',
    flex: 1,
    flexBasis: '20%',
    marginBottom: 8,
    marginHorizontal: 4,
  },
  namaKategori: {
    ...globalFont.normal,
    fontSize: 10,
  },
});

export default styles;
