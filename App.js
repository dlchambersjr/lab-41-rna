import * as React from 'react';
import { PickerIOS, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: 'contacts',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>What should I do Today?</Text>

        <PickerIOS
          selectedValue={this.state.choice}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ choice: itemValue })
          }>
          <PickerIOS.Item label="Contacts" value="contacts" />
          <PickerIOS.Item label="Calendar" value="calendar" />
          <PickerIOS.Item label="Camera" value="camera" />
        </PickerIOS>

        <Card>
          <AssetExample />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'lightblue',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});