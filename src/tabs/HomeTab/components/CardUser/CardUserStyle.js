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
    elevation: 6,
  },
  accentRight: {
    position: 'absolute',
    right: -40,
    top: -20,
  },
  accentIcon: {
    position: 'absolute',
    top: 48,
    left: 32,
  },
  circle: {
    position: 'relative',
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
  profileLvContainer: {
    position: 'absolute',
    backgroundColor: '#CBE2F1',
    borderRadius: 4,
    bottom: 10,
    paddingHorizontal: 4,
  },
  profileXpContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CBE2F1',
    borderRadius: 4,
    width: 60,
    bottom: 0,
    paddingHorizontal: 4,
  },
  profileLv: {
    ...globalFont,
    textAlign: 'center',
    fontSize: 6,
    color: '#1687D1',
  },
  profileXp: {
    ...globalFont,
    fontSize: 6,
    color: '#1687D1',
  },
  xpBack: {
    width: 38,
    height: 4,
    marginLeft: 2,
    borderRadius: 4,
    backgroundColor: '#FFF',
  },
  xpFront: {
    height: 4,
    left: -38,
    borderRadius: 4,
    backgroundColor: '#1262A5',
  },
  imgProfile: {
    width: 60,
    height: 60,
    backgroundColor: '#fefefe',
    borderRadius: 30,
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
    marginTop: 8,
    marginHorizontal: 24,
    justifyContent: 'space-between',
  },
  bottom: {
    backgroundColor: '#CBE2F1',
    paddingHorizontal: 32,
    paddingVertical: 4,
    borderRadius: 16,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 4,
  },
  bottomText: {
    ...globalFont.normal,
    fontSize: 14,
    color: '#1262A5',
  },
});

export default styles;
