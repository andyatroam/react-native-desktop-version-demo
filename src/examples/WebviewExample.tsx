import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
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
    // <SafeAreaView>
    <View style={styles.background}>
      {/* <Text>This is a Webview test</Text>
      <Text>This is a Webview test</Text>
      <Text>This is a Webview test</Text>
      <Text>This is a Webview test</Text>
      <Text>This is a Webview test</Text>
      <Text>This is a Webview test</Text>
      <Text>This is a Webview test</Text> */}
      <WebView
        style={{
          width: 300,
          height: 300,
          borderWidth: 2,
          backgroundColor: '#ffcc00',
        }}
        originWhitelist={['*']}
        source={{uri: 'https://google.com'}}
      />
      <Text>React Native Webview supports all 4 platform</Text>
    </View>
    // </SafeAreaView>
  );
}

export default WebviewExample;
