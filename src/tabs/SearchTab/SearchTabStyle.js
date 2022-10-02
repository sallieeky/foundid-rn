import {StyleSheet} from 'react-native';
import {globalFont} from '../../assets/style/globalStyle';

const styles = StyleSheet.create({
  searchSectionContainer: {
    marginTop: 16,
    flexDirection: 'row',
    marginHorizontal: 24,
    alignItems: 'center',
    height: 40,
  },
  noSearchHistoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  },
  noSearchHistoryText: {
    ...globalFont.bold,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#1262A5',
    paddingHorizontal: 8,
    ...globalFont.normal,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 16,
    marginHorizontal: 8,
  },
  filter: {
    borderWidth: 1,
    borderColor: '#1262A5',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  filterText: {
    ...globalFont.normal,
    fontSize: 12,
  },
  terkiniSectionContainer: {
    marginTop: 16,
  },
  dataSectionContainer: {
    marginTop: 16,
  },
  dataSectionNoData: {
    marginTop: 16,
    textAlign: 'center',
    ...globalFont.bold,
  },
  loadingData: {
    alignSelf: 'center',
    marginTop: 16,
  },
  terkiniSectionHead: {
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  terkiniSectionTitle: {
    ...globalFont.bold,
    fontSize: 24,
  },
  terkiniSectionHapus: {
    ...globalFont.normal,
  },
  bottomSheetHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomSheetHeadTitle: {
    ...globalFont.bold,
    fontSize: 24,
  },
  bottomSheetOrderContainer: {
    flex: 1,
    marginTop: 16,
  },
  bottomSheetOrderTitle: {
    ...globalFont.bold,
    color: '#8A8A8A',
  },
  radioItem: {
    ...globalFont.normal,
  },
  bottomSheetCheckBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomSheetCheckBoxName: {
    ...globalFont.normal,
  },
  buttonTerapkan: {
    alignItems: 'center',
    backgroundColor: '#1262A5',
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    ...globalFont.normal,
    color: '#F9F9F9',
  },
});

export default styles;
