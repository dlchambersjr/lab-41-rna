import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import styles from './style';

class Header extends React.Component {
  render() {
    return <Text style={styles.header}>Fizz Buzz</Text>;
  }
}

export default Header;


