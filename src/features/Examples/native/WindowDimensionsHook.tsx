import React from 'react';
import {useWindowDimensions} from 'react-native';
import ExampleContainer from '../../../components/ExampleContainer';

const WindowDimensionHook = () => {
  const window = useWindowDimensions();
  return (
    <ExampleContainer
      title="Window Dimension"
      description={`Window Dimensions: ${window.width} x ${window.height} `}
    />
  );
};

export default WindowDimensionHook;
