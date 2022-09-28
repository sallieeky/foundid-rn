import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    flex: 1,
    top: 0,
    bottom: 0,
  },

  infoContainer: {
    position: 'absolute',
    top: 72,
    left: 8,
    right: 8,
    backgroundColor: '#FFF',
    zIndex: 10,
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
});

export default styles;
