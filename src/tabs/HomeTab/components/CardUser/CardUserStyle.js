import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    marginTop: 12,
    backgroundColor: '#1687D1',
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11,
  },
  circle: {
    position: 'absolute',
    right: -40,
    top: -40,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#F9F9F9',
    opacity: 0.8,
  },
  profileContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  imgProfile: {
    width: 54,
    height: 54,
    backgroundColor: '#fefefe',
    borderRadius: 27,
    marginRight: 16,
  },
  hello: {
    ...globalFont.normal,
    color: '#FFFFFF',
  },
  nama: {
    ...globalFont.bold,
    color: '#FFFFFF',
  },
  noTelpContainer: {
    width: '100%',
    backgroundColor: '#1262A5',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 30,
  },
  noTelp: {
    ...globalFont.normal,
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 32,
    justifyContent: 'space-between',
  },
  bottom: {
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 16,
  },
  bottomText: {
    ...globalFont.normal,
    fontSize: 14,
  },
});

export default styles;
