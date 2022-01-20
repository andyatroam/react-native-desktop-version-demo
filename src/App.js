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
import TSExample from './TSExample';
import WebviewExample from './WebviewExample';
import MoveXY from './MoveXY';

const App = () => {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        {/* <TSExample /> */}
        {/* <WebviewExample /> */}
        {/* <Root /> */}
        {/* <Text style={styles.welcome}>To-dos 2022-01-17</Text> */}
        {/* <TodosList /> */}
        {/* <ToneExample /> */}
        {/* <AnimationExample /> */}
        {/* <RNElementExample /> */}
        <MoveXY />
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
