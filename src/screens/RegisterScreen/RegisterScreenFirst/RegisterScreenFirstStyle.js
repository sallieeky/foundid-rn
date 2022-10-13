import {StyleSheet} from 'react-native';
import {globalFont} from '../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    ...globalFont.bold,
    textAlign: 'center',
    fontSize: 24,
  },
  subTitle: {
    ...globalFont.normal,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#1687D1',
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 64,
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  buttonText: {
    ...globalFont.bold,
    color: '#F9F9F9',
  },
  btnKembali: {
    marginTop: 16,
    alignSelf: 'center',
  },
  btnKembaliText: {
    ...globalFont.normal,
  },
});

export default styles;
