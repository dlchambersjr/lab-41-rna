import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

import Header from './components/header/header';
import Counter from './components/counter/counter'
import Footer from './components/footer/footer';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default App;