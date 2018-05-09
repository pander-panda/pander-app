import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';


export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
