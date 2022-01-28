import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';
import ExampleContainer from '../../../components/ExampleContainer';
import {Paragraph} from '../../../components/Typography';

function WebviewExample() {
  const [parentWidth, setParentWidth] = useState(300);
  const onLayout = event => {
    const {x, y, height, width} = event.nativeEvent.layout;
    setParentWidth(width);
  };

  return (
    <ExampleContainer
      title="Webview demo"
      description="React Native WebView is a cross-platform library which used to load
        webpages in your React Native app"
      onLayout={onLayout}>
      {/* <View style={{flex: 1, height: 600, backgroundColor: '#ffcc00'}}> */}
      <WebView
        originWhitelist={['*']}
        source={{uri: 'https://roamdigital.com'}}
        scalesPageToFit={true}
      />
      {/* </View> */}
    </ExampleContainer>
  );
}

export default WebviewExample;
