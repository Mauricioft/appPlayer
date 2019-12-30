import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 10,
  },
  button: {
    opacity: 0.72,
    color: '#fff',
  }
});