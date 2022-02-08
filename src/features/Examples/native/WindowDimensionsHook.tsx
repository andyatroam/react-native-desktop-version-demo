import React from 'react';
import {useWindowDimensions} from 'react-native';
import {Text} from 'react-native-elements';
import ExampleContainer from '../../../components/ExampleContainer';

const WindowDimensionHook = () => {
  const window = useWindowDimensions();
  return (
    <ExampleContainer
      title="Window Dimension"
      description="Resize the windows to see the changes below on the macOS version of app">
      <Text>{`Window Dimensions: ${window.width} x ${window.height} `}</Text>
    </ExampleContainer>
  );
};

export default WindowDimensionHook;
