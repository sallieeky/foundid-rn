import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    flexBasis: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 8,
  },
  infoText: {
    ...globalFont.bold,
    fontSize: 12,
    color: '#F9F9F9',
  },
  title: {
    ...globalFont.normal,
    fontSize: 24,
  },
  sheetTitle: {
    ...globalFont.bold,
    fontSize: 24,
    marginBottom: 16,
  },
  sheetSubTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sheetSubTitleCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 4,
  },
  sheetSubTitle: {
    ...globalFont.normal,
    fontSize: 16,
  },
  sheetInfo: {
    ...globalFont.normal,
  },
  sheetBtnOk: {
    backgroundColor: '#1687D1',
    padding: 12,
    alignItems: 'center',
    borderRadius: 4,
  },
  sheetBtnText: {
    ...globalFont.bold,
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default styles;
