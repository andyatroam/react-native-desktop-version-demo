/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';
import AnimationExample from './AnimationExample';
import Root from './NavigationExample';
import RNElementExample from './RNElementExample';
// import TodosList from './TodosList';
// import ToneExample from './ToneExample';

const App = () => {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Root />
        {/* <Text style={styles.welcome}>To-dos 2022-01-17</Text> */}
        {/* <TodosList /> */}
        {/* <ToneExample /> */}
        {/* <AnimationExample /> */}
        {/* <RNElementExample /> */}
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    height: 150,
  },
  welcome: {
    fontSize: 28,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
