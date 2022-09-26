import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  skeletonContainer: {
    flexDirection: 'row',
  },
  container: {
    marginTop: 24,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
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
    marginHorizontal: 24,
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
    marginHorizontal: 24,
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
  contentContainer: {
    marginTop: 4,
  },
  content: {
    flexDirection: 'row',
    padding: 4,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    width: 312,
    marginHorizontal: 8,
  },
  contentImageContainer: {
    height: 100,
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
    backgroundColor: '#FA6011',
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
    width: 188,
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
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 64,
    height: 64,
    backgroundColor: '#1F6BAA',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // CONTENT BLANK
  contentBlank: {
    ...globalFont.bold,
    marginTop: 8,
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 1,
    marginHorizontal: 24,
    paddingVertical: 8,
    borderStyle: 'dotted',
    borderRadius: 8,
  },
});

export default styles;
