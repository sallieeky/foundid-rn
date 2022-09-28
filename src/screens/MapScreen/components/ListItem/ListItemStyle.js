import {Dimensions, StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.5;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.12;
const CONTENT_HEIGHT = BOTTOM_SHEET_MAX_HEIGHT - BOTTOM_SHEET_MIN_HEIGHT;

const styles = StyleSheet.create({
  container: {},
  content: {
    flexDirection: 'row',
    padding: 4,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    width: '100%',
    marginTop: 8,
  },
  contentImageContainer: {
    height: '100%',
    width: 108,
  },
  contentImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    position: 'absolute',
  },
  contentStatusContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  contentStatus: {
    ...globalFont.bold,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 10,
  },
  contentDetail: {
    marginLeft: 8,
  },
  contentDetailNama: {
    ...globalFont.bold,
  },
  contentInfo: {
    flexDirection: 'row',
    marginTop: 4,
  },
  detail: {
    ...globalFont.normal,
    fontSize: 10,
  },
  contentBottom: {
    flexDirection: 'row',
    marginTop: 8,
  },
  contentBottomDetail: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#1F6BAA',
    borderRadius: 24,
  },
  contentBottomDetailText: {
    ...globalFont.normal,
    color: '#1F6BAA',
    fontSize: 12,
  },
  contentBottomLocation: {
    padding: 8,
    backgroundColor: '#FC6011',
    borderRadius: 40,
    marginLeft: 8,
  },
  flatList: {
    height: CONTENT_HEIGHT,
  },
});

export default styles;
