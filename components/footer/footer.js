import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import styles from './style';

class Footer extends React.Component {
  render() {
    return <Text style={styles.footer}> &copy; 2018 David Chambers </Text>;
  }
}

export default Footer;


