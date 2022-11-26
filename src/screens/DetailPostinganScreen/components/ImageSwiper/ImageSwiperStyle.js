import {Dimensions, StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  imageSwiperContainer: {
    height: WINDOW_HEIGHT / 2.5,
  },
  btnBackContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#AAAAAA75',
    padding: 8,
    zIndex: 12,
    borderRadius: 40,
  },
  waktuUploadContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: '#AAAAAA75',
    flexDirection: 'row',
    zIndex: 12,
    paddingHorizontal: 8,
    borderRadius: 40,
    alignItems: 'center',
  },
  waktuUploadText: {
    ...globalFont.normal,
    color: '#F9F9F9',
    fontSize: 8,
    marginLeft: 4,
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#AAAAAA75',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 40,
  },
  paginationText: {
    ...globalFont.normal,
    color: '#F9F9F9',
    fontSize: 12,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default styles;
