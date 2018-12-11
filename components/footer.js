import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Footer extends React.Component {
  render() {
    return <Text style={styles.footer}> &copy; 2018 Code Fellows </Text>;
  }
}

export default Footer;

const styles = StyleSheet.create({
  footer: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
});
