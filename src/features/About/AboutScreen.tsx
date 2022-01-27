import React from 'react';
import {Text} from 'react-native';
import ScreenContent from '../../components/ScreenContent';

const AboutScreen = () => {
  return (
    <ScreenContent
      title="About"
      content={<Text>This is the tab inner view</Text>}
    />
  );
};

export default AboutScreen;
