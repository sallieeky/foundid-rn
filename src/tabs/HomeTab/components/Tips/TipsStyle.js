import {StyleSheet} from 'react-native';
import {globalFont} from '../../../../assets/style/globalStyle';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 16,
  },
  heading: {
    ...globalFont.bold,
    fontSize: 18,
    marginLeft: 24,
  },
  tipsContainer: {
    justifyContent: 'center',
    height: 120,
    width: 264,
    marginHorizontal: 8,
    marginTop: 8,
    borderRadius: 16,
    overflow: 'hidden',
  },
  tipsTitle: {
    ...globalFont.bold,
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 16,
    width: 128,
  },
  tipsImage: {
    position: 'absolute',
    right: -72,
    top: -55,
  },
});

export default styles;
