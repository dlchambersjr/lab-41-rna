import * as React from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';
import { Speech } from 'expo';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import styles from './components/style';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      counterClass: 'positive',
    };
  }

  handleReset(value) {
    let counter = 0
    let counterClass = counter >= 0 ? 'positive' : 'negative';
    this.setState({ counter, counterClass });
  }
  handleButtonClick(value) {
    let counter = this.state.counter + value;
    if (counter !== 0 && counter % 15 === 0) {
      Speech.speak('FIZZ BUZZ');
    } else if (counter !== 0 && counter % 5 === 0) {
      Speech.speak('BUZZ');
    } else if (counter !== 0 && counter % 3 === 0) {
      Speech.speak('FIZZ');

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
        <TouchableOpacity onPress={() => this.handleReset()}>
          <View style={styles.resetButton}>
            <Text style={styles.resetText}>RESET</Text>
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