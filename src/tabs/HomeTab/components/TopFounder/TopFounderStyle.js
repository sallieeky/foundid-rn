import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  topFounderContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: 8,
    width: '100%',
  },
  topFounderMainBox: {
    flexBasis: '75%',
    backgroundColor: '#1687D1',
    borderRadius: 16,
    marginRight: 8,
    overflow: 'hidden',
    padding: 8,
  },
  topFounderMainBoxTitle: {
    ...globalFont.bold,
    color: '#F9F9F9',
  },
  topFounderMainBoxContentContainer: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    padding: 8,
    justifyContent: 'space-between',
    borderRadius: 8,
    marginTop: 2,
  },
  topFounderMainBoxContentRank: {
    ...globalFont.bold,
    fontSize: 20,
    marginRight: 4,
  },
  topFounderMainBoxContentNama: {
    ...globalFont.normal,
    fontSize: 12,
  },
  topFounderMainBoxContentPoint: {
    ...globalFont.normal,
    fontSize: 10,
    color: '#C8D1E1',
  },
  topFounderDetailBox: {
    flexBasis: '18%',
    backgroundColor: '#1687D1',
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topFounderDetailBoxImage: {
    position: 'absolute',
    left: -72,
    height: '100%',
  },
  topFounderDetailBoxText: {
    ...globalFont.normal,
    color: '#FFFFFF',
    fontSize: 10,
  },
});

export default styles;
