import {Dimensions, StyleSheet} from 'react-native';
const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
    position: 'absolute',
    zIndex: 122,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#00000030',
  },
  content: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 12,
    flexBasis: '40%',
  },
});

export default styles;
