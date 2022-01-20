import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    minWidth: 100,
    backgroundColor: '#ffcc00',
    borderColor: '#cccccc',
    borderWidth: 1,
  },
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
});

function WebviewExample() {
  return (
    <View style={styles.background}>
      <Text>This is a Webview test</Text>
      <WebView
        style={{width: '100%', borderWidth: 2, backgroundColor: '#ffcc00'}}
        originWhitelist={['*']}
        // source={{ html: '<h1>This is a static HTML source!</h1>' }}
        source={{uri: 'https://google.com'}}
      />
      <Text>React Native Webview supports all 4 platform</Text>
    </View>
  );
}

export default WebviewExample;
