import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapHeading: {
    ...globalFont.bold,
    fontSize: 18,
  },
  headingLihatSemua: {
    ...globalFont.normal,
    color: '#242424',
  },
  mapContainer: {
    borderRadius: 24,
    overflow: 'hidden',
    marginTop: 16,
  },
  infoContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
    right: 8,
    backgroundColor: '#FFF',
    zIndex: 8,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  infoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 4,
  },
  map: {
    width: '100%',
    height: 248,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 8,
  },
  filter: {
    borderWidth: 1,
    borderColor: '#1262A5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  filterText: {
    ...globalFont.normal,
    fontSize: 12,
  },
});

export default styles;
