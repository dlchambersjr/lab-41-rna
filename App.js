import * as React from 'react';

import {
  TouchableOpacity,
  Alert,
  Button,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { Speech, Constants } from 'expo';

import Header from './components/header';
import Footer from './components/footer';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      counterClass: 'positive',
    };
  }

  handleButtonClick(value) {
    let counter = this.state.counter + value;
    if (counter !== 0 && counter % 15 === 0) {
      Alert.alert('FIZZ BUZZ');
    } else if (counter !== 0 && counter % 5 === 0) {
      Alert.alert('BUZZ');
    } else if (counter !== 0 && counter % 3 === 0) {
      Alert.alert('FIZZ');
    }
    let counterClass = counter >= 0 ? 'positive' : 'negative';
    this.setState({ counter, counterClass });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.handleButtonClick(1)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.paragraph}>
          <Text style={styles[this.state.counterClass]}>
            {this.state.counter}
          </Text>
        </Text>
        <TouchableOpacity onPress={() => this.handleButtonClick(-1)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Counter />
        <Footer />
      </View>
    );
  }
}

export default App;

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
  },
  positive: {
    backgroundColor: 'green',
  },
  negative: {
    backgroundColor: 'red',
  },
});
