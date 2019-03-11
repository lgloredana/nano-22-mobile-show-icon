import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    MaterialCommunityIcons } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
          <MaterialCommunityIcons name="baby-buggy" size={32} color="blue" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
