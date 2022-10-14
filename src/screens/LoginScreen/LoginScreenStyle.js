import {StyleSheet} from 'react-native';
import {globalFont} from '../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  imgAccent: {
    position: 'absolute',
    top: 16,
    left: 16,
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
    marginBottom: 64,
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
  wrong: {
    ...globalFont.normal,
    color: '#FF5959',
    textAlign: 'center',
    marginTop: 8,
  },
  buttonText: {
    ...globalFont.bold,
    color: '#F9F9F9',
  },
  bottomText: {
    ...globalFont.normal,
    marginTop: 32,
    textAlign: 'center',
  },
  daftarAkun: {
    ...globalFont.bold,
    color: '#1687D1',
  },
});

export default styles;
