import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';
import {Paragraph} from '../../../components/Typography';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: 100,
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
    <View style={styles.background}>
      <Paragraph>
        React Native WebView is a cross-platform library which used to load
        webpages in your React Native app
      </Paragraph>
      <WebView
        style={{
          width: 500,
          flex: 1,
          borderWidth: 2,
        }}
        originWhitelist={['*']}
        source={{uri: 'https://roamdigital.com'}}
      />
    </View>
  );
}

export default WebviewExample;
