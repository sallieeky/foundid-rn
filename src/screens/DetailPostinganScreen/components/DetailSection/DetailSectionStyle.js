import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexBasis: '60%',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  kategoriContainer: {
    flexBasis: '38%',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  title: {
    ...globalFont.normal,
    fontSize: 10,
  },
  subTitle: {
    ...globalFont.normal,
    fontSize: 14,
    marginLeft: 8,
  },
});

export default styles;
