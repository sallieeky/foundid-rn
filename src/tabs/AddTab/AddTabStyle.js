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
});

export default styles;
