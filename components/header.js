import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

class Header extends React.Component {
  render() {
    return <Text style={styles.header}>Fizz Buzz</Text>;
  }
}

export default Header;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'center',
    color: 'orange',
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
});
