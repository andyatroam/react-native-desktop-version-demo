import React from 'react';
import {Image, Text, useColorScheme} from 'react-native';
import ExampleContainer from '../../../components/ExampleContainer';
import OSColourSchemeImage from '../../assets/images/os_colour_scheme.png';

const ColorSchemeHook = () => {
  const colorScheme = useColorScheme();
  return (
    <ExampleContainer
      title="Color theme test"
      description="This would not work when debugging tools are opening">
      <Text>Current color theme: {colorScheme}</Text>
      <Image source={OSColourSchemeImage} />
    </ExampleContainer>
  );
};

export default ColorSchemeHook;
