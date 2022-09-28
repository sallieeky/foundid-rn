import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  disekitarHeading: {
    ...globalFont.bold,
    fontSize: 18,
    marginLeft: 24,
  },
  disekitarContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: 24,
  },
  disekitarMainBox: {
    flexBasis: '80%',
    backgroundColor: '#1687D1',
    height: 148,
    borderRadius: 16,
    marginRight: 8,
    overflow: 'hidden',
  },
  disekitarMainBoxText: {
    ...globalFont.normal,
    color: '#FFFFFF',
    fontSize: 20,
    marginTop: 12,
    marginLeft: 12,
    marginRight: 72,
  },
  disekitarMainBoxImage: {
    position: 'absolute',
    right: -56,
    top: -26,
  },
  disekitarMainBoxBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#1F6BAA',
  },
  disekitarMainBoxBottomText: {
    ...globalFont.normal,
    color: '#FFFFFF',
    fontSize: 12,
  },
  disekitarDetailBox: {
    flexBasis: '20%',
    backgroundColor: '#1687D1',
    height: 148,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disekitarDetailBoxImage: {
    position: 'absolute',
    left: -152,
    top: -26,
  },
  disekitarDetailBoxText: {
    ...globalFont.normal,
    color: '#FFFFFF',
    fontSize: 10,
  },
});

export default styles;
