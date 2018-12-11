
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: 115,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    fontSize: 60,
    padding: 5,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  resetButton: {
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: 115,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',

  },
  resetText: {
    fontSize: 25,
    padding: 5,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  positive: {
    backgroundColor: 'green',
  },
  negative: {
    backgroundColor: 'red',
  },
});

export default styles;
