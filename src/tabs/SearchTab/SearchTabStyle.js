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
    backgroundColor: '#f9f9f9',
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
});

export default styles;
