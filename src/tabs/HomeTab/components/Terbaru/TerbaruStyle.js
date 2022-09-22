import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 24,
  },
  terbaruHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  terbaruHeading: {
    ...globalFont.bold,
    fontSize: 18,
  },
  lihatSemua: {
    ...globalFont.normal,
    marginRight: 24,
  },
  contentContainer: {
    marginTop: 16,
  },
  content: {
    height: 208,
    width: 142,
    backgroundColor: '#D9D9D9',
    marginRight: 24,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
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
    backgroundColor: '#1F6BAA',
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
});

export default styles;
