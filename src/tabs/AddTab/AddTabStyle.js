const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    marginBottom: 64,
  },
  statusContainer: {
    flexDirection: 'row',
  },
  status: {
    flexBasis: '50%',
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C8D1E150',
  },
  select: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
  },
  imageList: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  imageError: {
    color: '#FF595985',
    fontSize: 10,
  },
  imageContainer: {
    flexBasis: '20%',
    height: 80,
    borderWidth: 0.5,
    borderColor: '#8A8A8A',
  },
  pickFoto: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    borderStyle: 'dotted',
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foto: {
    width: '100%',
    height: '100%',
  },
  btnUpload: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1687D1',
    marginBottom: 16,
    borderRadius: 4,
    marginTop: 4,
  },
});

export default styles;
