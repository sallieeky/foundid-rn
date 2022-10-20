import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
    paddingTop: 16,
  },
  title: {
    ...globalFont.bold,
    fontSize: 24,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  deskripsi: {
    ...globalFont.normal,
    textAlign: 'justify',
  },
  viewMore: {
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    color: '#1262A5',
    paddingVertical: 2,
  },
});

export default styles;
