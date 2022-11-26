import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    backgroundColor: '#1687D1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionContainer: {
    flexBasis: '48%',
  },
  title: {
    ...globalFont.normal,
    fontSize: 12,
    color: '#F9F9F9',
  },
  nama: {
    ...globalFont.normal,
    fontSize: 14,
    color: '#F9F9F9',
    marginBottom: 4,
  },
  btnLihatProfile: {
    borderWidth: 1,
    borderColor: '#F9F9F9',
    borderRadius: 40,
    backgroundColor: '#1262A5',
  },
  btnLihatProfileText: {
    ...globalFont.normal,
    fontSize: 12,
    textAlign: 'center',
    color: '#F9F9F9',
  },
  btnSosmed: {
    flexBasis: '30%',
    margin: 0,
    padding: 0,
    borderRadius: 4,
  },
});

export default styles;
