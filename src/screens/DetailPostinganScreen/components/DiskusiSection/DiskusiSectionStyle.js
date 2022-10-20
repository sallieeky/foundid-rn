import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
    paddingTop: 16,
  },
  title: {
    ...globalFont.bold,
    fontSize: 20,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  nama: {
    ...globalFont.normal,
    marginLeft: 8,
  },
  komen: {
    ...globalFont.normal,
    flexBasis: '93%',
  },
  bottom: {
    ...globalFont.normal,
    fontSize: 12,
    marginRight: 16,
  },
  btnText: {
    ...globalFont.normal,
    color: '#1262A5',
    textAlign: 'center',
  },
});

export default styles;
