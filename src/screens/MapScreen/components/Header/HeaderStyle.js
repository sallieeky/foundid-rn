import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 64,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  lokasiTitle: {
    ...globalFont.normal,
  },
  lokasiContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  lokasi: {
    ...globalFont.bold,
  },
});

export default styles;
