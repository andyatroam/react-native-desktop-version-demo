import React from 'react';
import {Text} from 'react-native';
import ScreenContent from '../../components/PageContainer';

const AboutScreen = () => {
  return (
    <ScreenContent
      title="About"
      content={<Text>This is the about page</Text>}
    />
  );
};

export default AboutScreen;
