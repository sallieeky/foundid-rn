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
  fpContainer: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  fp: {
    backgroundColor: '#8A8A8A50',
    width: 128,
    height: 128,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  fpTitle: {
    ...globalFont.normal,
    textAlign: 'center',
    marginTop: 8,
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
