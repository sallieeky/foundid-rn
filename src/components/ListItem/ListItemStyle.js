import {StyleSheet} from 'react-native';
import {globalFont} from '../../assets/style/globalStyle';

const styles = StyleSheet.create({
  skeletonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  container: {},
  listItemHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemHeading: {
    ...globalFont.bold,
    fontSize: 18,
    marginLeft: 24,
  },
  lihatSemua: {
    ...globalFont.normal,
    marginRight: 24,
  },
  contentContainer: {
    marginTop: 16,
  },
  content: {
    width: 142,
    paddingBottom: 4,
    backgroundColor: '#F9F9F9',
    marginHorizontal: 8,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 4,
  },
  contentImageSection: {
    height: 148,
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#8a8a8a',
  },
  contentImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  contentKategoriContainer: {
    borderRadius: 16,
    paddingVertical: 6,
    width: '70%',
  },
  contentKategori: {
    ...globalFont.bold,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 10,
  },
  contentDetailContainer: {
    marginHorizontal: 8,
  },
  contentTitleSection: {
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    ...globalFont.bold,
    color: '#FFFFFF',
    marginBottom: 8,
    marginLeft: 8,
  },
  contentDetail: {
    flexDirection: 'row',
    marginTop: 8,
  },
  detail: {
    ...globalFont.normal,
    fontSize: 12,
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
