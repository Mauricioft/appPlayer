import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const imageWidth = width - 48;
const imageHeight = height - 320;

export default  StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
});