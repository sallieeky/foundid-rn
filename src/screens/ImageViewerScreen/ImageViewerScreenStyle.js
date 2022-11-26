import {StyleSheet} from 'react-native';
import {globalFont} from '../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  head: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#24242490',
    zIndex: 12,
  },
  btnText: {
    ...globalFont.bold,
    color: '#F9F9F9',
    marginLeft: 8,
  },
  wrapper: {
    backgroundColor: '#242424',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242424',
  },
});

export default styles;
